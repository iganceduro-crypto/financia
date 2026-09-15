const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'financia.db');

fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new sqlite3.Database(DB_FILE);
const DEFAULT_ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

const emailTransporter = process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS
  ? nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: Number(process.env.EMAIL_PORT || 587) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  : null;

const EMAIL_FROM = process.env.EMAIL_FROM || 'no-reply@financia.local';

function normalizeLanguage(lang) {
  const map = {
    fr: 'fr',
    en: 'en',
    de: 'de',
    es: 'es',
    it: 'it',
    pt: 'pt',
    nl: 'nl',
    pl: 'pl',
    lv: 'lv',
    lt: 'lt'
  };

  return map[lang] || 'fr';
}

const emailTemplates = {
  fr: {
    pending: {
      subject: 'FINANCIA - demande reçue',
      text: 'Bonjour {nom}, votre demande de crédit a bien été reçue. Elle est actuellement en cours de validation. Vous recevrez un e-mail dès la décision finale.',
      html: '<p>Bonjour {nom},</p><p>Votre demande de crédit a bien été reçue.</p><p>Elle est actuellement en cours de validation. Vous recevrez un e-mail dès la décision finale.</p>'
    },
    approved: {
      subject: 'FINANCIA - demande validée',
      text: 'Bonjour {nom}, votre demande de crédit a été validée. Nous vous contacterons prochainement pour la suite.',
      html: '<p>Bonjour {nom},</p><p>Votre demande de crédit a été validée.</p><p>Nous vous contacterons prochainement pour la suite.</p>'
    },
    refused: {
      subject: 'FINANCIA - demande refusée',
      text: 'Bonjour {nom}, votre demande de crédit n’a pas été retenue pour le moment. Merci de nous contacter si vous souhaitez plus d’informations.',
      html: '<p>Bonjour {nom},</p><p>Votre demande de crédit n’a pas été retenue pour le moment.</p><p>Merci de nous contacter si vous souhaitez plus d’informations.</p>'
    }
  },
  en: {
    pending: {
      subject: 'FINANCIA - request received',
      text: 'Hello {nom}, your credit request has been received. It is currently under review. You will receive an email once a final decision is made.',
      html: '<p>Hello {nom},</p><p>Your credit request has been received.</p><p>It is currently under review. You will receive an email once a final decision is made.</p>'
    },
    approved: {
      subject: 'FINANCIA - request approved',
      text: 'Hello {nom}, your credit request has been approved. We will contact you shortly to continue the process.',
      html: '<p>Hello {nom},</p><p>Your credit request has been approved.</p><p>We will contact you shortly to continue the process.</p>'
    },
    refused: {
      subject: 'FINANCIA - request declined',
      text: 'Hello {nom}, your credit request could not be accepted at this time. Please contact us if you would like more information.',
      html: '<p>Hello {nom},</p><p>Your credit request could not be accepted at this time.</p><p>Please contact us if you would like more information.</p>'
    }
  },
  de: {
    pending: {
      subject: 'FINANCIA - Anfrage erhalten',
      text: 'Hallo {nom}, Ihre Kreditanfrage wurde erhalten. Sie wird derzeit geprüft. Sie erhalten eine E-Mail, sobald eine Entscheidung getroffen wurde.',
      html: '<p>Hallo {nom},</p><p>Ihre Kreditanfrage wurde erhalten.</p><p>Sie wird derzeit geprüft. Sie erhalten eine E-Mail, sobald eine Entscheidung getroffen wurde.</p>'
    },
    approved: {
      subject: 'FINANCIA - Anfrage genehmigt',
      text: 'Hallo {nom}, Ihre Kreditanfrage wurde genehmigt. Wir werden Sie schnellstmöglich für den weiteren Verlauf kontaktieren.',
      html: '<p>Hallo {nom},</p><p>Ihre Kreditanfrage wurde genehmigt.</p><p>Wir werden Sie schnellstmöglich für den weiteren Verlauf kontaktieren.</p>'
    },
    refused: {
      subject: 'FINANCIA - Anfrage abgelehnt',
      text: 'Hallo {nom}, Ihre Kreditanfrage konnte derzeit nicht angenommen werden. Bitte kontaktieren Sie uns für weitere Informationen.',
      html: '<p>Hallo {nom},</p><p>Ihre Kreditanfrage konnte derzeit nicht angenommen werden.</p><p>Bitte kontaktieren Sie uns für weitere Informationen.</p>'
    }
  },
  es: {
    pending: {
      subject: 'FINANCIA - solicitud recibida',
      text: 'Hola {nom}, su solicitud de crédito ha sido recibida. Actualmente está en revisión. Recibirá un correo cuando se tome la decisión final.',
      html: '<p>Hola {nom},</p><p>Su solicitud de crédito ha sido recibida.</p><p>Actualmente está en revisión. Recibirá un correo cuando se tome la decisión final.</p>'
    },
    approved: {
      subject: 'FINANCIA - solicitud validada',
      text: 'Hola {nom}, su solicitud de crédito ha sido validada. Pronto nos pondremos en contacto con usted para continuar.',
      html: '<p>Hola {nom},</p><p>Su solicitud de crédito ha sido validada.</p><p>Pronto nos pondremos en contacto con usted para continuar.</p>'
    },
    refused: {
      subject: 'FINANCIA - solicitud rechazada',
      text: 'Hola {nom}, su solicitud de crédito no pudo aceptarse en este momento. Contáctenos si desea más información.',
      html: '<p>Hola {nom},</p><p>Su solicitud de crédito no pudo aceptarse en este momento.</p><p>Contáctenos si desea más información.</p>'
    }
  },
  it: {
    pending: {
      subject: 'FINANCIA - richiesta ricevuta',
      text: 'Ciao {nom}, la tua richiesta di prestito è stata ricevuta. È attualmente in fase di verifica. Riceverai un’e-mail al termine della decisione finale.',
      html: '<p>Ciao {nom},</p><p>La tua richiesta di prestito è stata ricevuta.</p><p>È attualmente in fase di verifica. Riceverai un’e-mail al termine della decisione finale.</p>'
    },
    approved: {
      subject: 'FINANCIA - richiesta approvata',
      text: 'Ciao {nom}, la tua richiesta di prestito è stata approvata. Ti contatteremo presto per il proseguimento.',
      html: '<p>Ciao {nom},</p><p>La tua richiesta di prestito è stata approvata.</p><p>Ti contatteremo presto per il proseguimento.</p>'
    },
    refused: {
      subject: 'FINANCIA - richiesta rifiutata',
      text: 'Ciao {nom}, la tua richiesta di prestito non è stata accettata al momento. Contattaci per maggiori informazioni.',
      html: '<p>Ciao {nom},</p><p>La tua richiesta di prestito non è stata accettata al momento.</p><p>Contattaci per maggiori informazioni.</p>'
    }
  },
  pt: {
    pending: {
      subject: 'FINANCIA - pedido recebido',
      text: 'Olá {nom}, o seu pedido de crédito foi recebido. Está atualmente em análise. Receberá um e-mail quando a decisão final for tomada.',
      html: '<p>Olá {nom},</p><p>O seu pedido de crédito foi recebido.</p><p>Está atualmente em análise. Receberá um e-mail quando a decisão final for tomada.</p>'
    },
    approved: {
      subject: 'FINANCIA - pedido validado',
      text: 'Olá {nom}, o seu pedido de crédito foi validado. Em breve entraremos em contacto para continuar.',
      html: '<p>Olá {nom},</p><p>O seu pedido de crédito foi validado.</p><p>Em breve entraremos em contacto para continuar.</p>'
    },
    refused: {
      subject: 'FINANCIA - pedido recusado',
      text: 'Olá {nom}, o seu pedido de crédito não pôde ser aceite neste momento. Contacte-nos para mais informações.',
      html: '<p>Olá {nom},</p><p>O seu pedido de crédito não pôde ser aceite neste momento.</p><p>Contacte-nos para mais informações.</p>'
    }
  },
  nl: {
    pending: {
      subject: 'FINANCIA - aanvraag ontvangen',
      text: 'Hallo {nom}, uw kredietaanvraag is ontvangen. Deze wordt momenteel beoordeeld. U ontvangt een e-mail zodra een definitieve beslissing is genomen.',
      html: '<p>Hallo {nom},</p><p>Uw kredietaanvraag is ontvangen.</p><p>Deze wordt momenteel beoordeeld. U ontvangt een e-mail zodra een definitieve beslissing is genomen.</p>'
    },
    approved: {
      subject: 'FINANCIA - aanvraag goedgekeurd',
      text: 'Hallo {nom}, uw kredietaanvraag is goedgekeurd. We nemen snel contact met u op voor de volgende stappen.',
      html: '<p>Hallo {nom},</p><p>Uw kredietaanvraag is goedgekeurd.</p><p>We nemen snel contact met u op voor de volgende stappen.</p>'
    },
    refused: {
      subject: 'FINANCIA - aanvraag geweigerd',
      text: 'Hallo {nom}, uw kredietaanvraag kon op dit moment niet worden aanvaard. Neem contact met ons op voor meer informatie.',
      html: '<p>Hallo {nom},</p><p>Uw kredietaanvraag kon op dit moment niet worden aanvaard.</p><p>Neem contact met ons op voor meer informatie.</p>'
    }
  },
  pl: {
    pending: {
      subject: 'FINANCIA - wniosek otrzymany',
      text: 'Cześć {nom}, twój wniosek o kredyt został otrzymany. Obecnie jest w trakcie weryfikacji. Otrzymasz e-mail po podjęciu decyzji.',
      html: '<p>Cześć {nom},</p><p>Twój wniosek o kredyt został otrzymany.</p><p>Obecnie jest w trakcie weryfikacji. Otrzymasz e-mail po podjęciu decyzji.</p>'
    },
    approved: {
      subject: 'FINANCIA - wniosek zatwierdzony',
      text: 'Cześć {nom}, twój wniosek o kredyt został zatwierdzony. Skontaktujemy się z Tobą wkrótce, aby kontynuować procedurę.',
      html: '<p>Cześć {nom},</p><p>Twój wniosek o kredyt został zatwierdzony.</p><p>Skontaktujemy się z Tobą wkrótce, aby kontynuować procedurę.</p>'
    },
    refused: {
      subject: 'FINANCIA - wniosek odrzucony',
      text: 'Cześć {nom}, twój wniosek o kredyt nie został przyjęty w tej chwili. Skontaktuj się z nami, jeśli chcesz uzyskać więcej informacji.',
      html: '<p>Cześć {nom},</p><p>Twój wniosek o kredyt nie został przyjęty w tej chwili.</p><p>Skontaktuj się z nami, jeśli chcesz uzyskać więcej informacji.</p>'
    }
  },
  lv: {
    pending: {
      subject: 'FINANCIA - pieprasījums saņemts',
      text: 'Sveiki {nom}, jūsu kredīta pieprasījums ir saņemts. Tas pašlaik tiek pārbaudīts. Jūs saņemsiet e-pastu pēc galīgās lēmuma pieņemšanas.',
      html: '<p>Sveiki {nom},</p><p>Jūsu kredīta pieprasījums ir saņemts.</p><p>Tas pašlaik tiek pārbaudīts. Jūs saņemsiet e-pastu pēc galīgās lēmuma pieņemšanas.</p>'
    },
    approved: {
      subject: 'FINANCIA - pieprasījums apstiprināts',
      text: 'Sveiki {nom}, jūsu kredīta pieprasījums ir apstiprināts. Drīz sazināsimies, lai turpinātu procesu.',
      html: '<p>Sveiki {nom},</p><p>Jūsu kredīta pieprasījums ir apstiprināts.</p><p>Drīz sazināsimies, lai turpinātu procesu.</p>'
    },
    refused: {
      subject: 'FINANCIA - pieprasījums noraidīts',
      text: 'Sveiki {nom}, jūsu kredīta pieprasījums šobrīd netika apstiprināts. Sazinieties ar mums, lai saņemtu vairāk informācijas.',
      html: '<p>Sveiki {nom},</p><p>Jūsu kredīta pieprasījums šobrīd netika apstiprināts.</p><p>Sazinieties ar mums, lai saņemtu vairāk informācijas.</p>'
    }
  },
  lt: {
    pending: {
      subject: 'FINANCIA - paraiška gauta',
      text: 'Sveiki {nom}, jūsų kredito paraiška gauta. Ji šiuo metu tikrinama. Kai bus priimtas galutinis sprendimas, gausite el. laišką.',
      html: '<p>Sveiki {nom},</p><p>Jūsų kredito paraiška gauta.</p><p>Ji šiuo metu tikrinama. Kai bus priimtas galutinis sprendimas, gausite el. laišką.</p>'
    },
    approved: {
      subject: 'FINANCIA - paraiška patvirtinta',
      text: 'Sveiki {nom}, jūsų kredito paraiška patvirtinta. Netrukus susisieksime, kad tęstumėme procesą.',
      html: '<p>Sveiki {nom},</p><p>Jūsų kredito paraiška patvirtinta.</p><p>Netrukus susisieksime, kad tęstumėme procesą.</p>'
    },
    refused: {
      subject: 'FINANCIA - paraiška atmesta',
      text: 'Sveiki {nom}, jūsų kredito paraiška šiuo metu nebuvo priimta. Susisiekite su mumis, jei norite daugiau informacijos.',
      html: '<p>Sveiki {nom},</p><p>Jūsų kredito paraiška šiuo metu nebuvo priimta.</p><p>Susisiekite su mumis, jei norite daugiau informacijos.</p>'
    }
  }
};

async function sendEmail({ to, subject, text, html }) {
  if (!emailTransporter || !to) {
    console.log('Email skipped: SMTP not configured or no recipient.');
    return { ok: false };
  }

  try {
    await emailTransporter.sendMail({
      from: EMAIL_FROM,
      to,
      subject,
      text,
      html
    });

    return { ok: true };
  } catch (error) {
    console.error('Email send failed:', error.message);
    return { ok: false, error: error.message };
  }
}

function buildEmailTemplate({ lang, type, nom }) {
  const language = normalizeLanguage(lang);
  const template = emailTemplates[language]?.[type];

  if (!template) {
    return emailTemplates.fr[type];
  }

  return {
    subject: template.subject.replace('{nom}', nom || 'Client'),
    text: (template.text || '').replace('{nom}', nom || 'Client'),
    html: (template.html || '').replace('{nom}', nom || 'Client')
  };
}

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'financia-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 60 * 8
    }
  })
);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Authentification requise.' });
  }
  next();
}

async function initializeDatabase() {
  await run(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      langue TEXT DEFAULT 'fr',
      nom TEXT,
      pays TEXT,
      telephone TEXT,
      email TEXT,
      profession TEXT,
      employeur TEXT,
      revenu REAL,
      type TEXT,
      montant REAL,
      duree INTEGER,
      pieceRecto TEXT,
      pieceVerso TEXT,
      banque TEXT,
      titulaireCompte TEXT,
      iban TEXT,
      adresse TEXT,
      objetCredit TEXT,
      statut TEXT DEFAULT 'En attente',
      message_client TEXT,
      date TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const requestColumns = await all('PRAGMA table_info(requests)');
  const existingColumns = new Set((requestColumns || []).map((column) => column.name));
  const columnAdditions = [
    ['langue', "TEXT DEFAULT 'fr'"],
    ['message_client', 'TEXT'],
    ['objetCredit', 'TEXT'],
    ['adresse', 'TEXT'],
    ['iban', 'TEXT'],
    ['titulaireCompte', 'TEXT'],
    ['banque', 'TEXT'],
    ['pieceVerso', 'TEXT'],
    ['pieceRecto', 'TEXT'],
    ['duree', 'INTEGER'],
    ['montant', 'REAL'],
    ['type', 'TEXT'],
    ['revenu', 'REAL'],
    ['employeur', 'TEXT'],
    ['profession', 'TEXT'],
    ['email', 'TEXT'],
    ['telephone', 'TEXT'],
    ['pays', 'TEXT'],
    ['nom', 'TEXT']
  ];

  for (const [colName, colDefinition] of columnAdditions) {
    if (!existingColumns.has(colName)) {
      await run(`ALTER TABLE requests ADD COLUMN ${colName} ${colDefinition}`);
    }
  }

  const admin = await get('SELECT * FROM admins WHERE username = ?', [DEFAULT_ADMIN_USERNAME]);

  if (!admin) {
    const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
    await run('INSERT INTO admins (username, password_hash) VALUES (?, ?)', [DEFAULT_ADMIN_USERNAME, hash]);
  }
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Financia API is running.' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d’utilisateur et mot de passe requis.' });
  }

  try {
    const admin = await get('SELECT * FROM admins WHERE username = ?', [username]);

    if (!admin) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    const ok = await bcrypt.compare(password, admin.password_hash);

    if (!ok) {
      return res.status(401).json({ message: 'Identifiants invalides.' });
    }

    req.session.user = {
      id: admin.id,
      username: admin.username
    };

    return res.json({ ok: true, user: req.session.user });
  } catch (error) {
    return res.status(500).json({ message: 'Erreur serveur.', error: error.message });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true, message: 'Déconnexion réussie.' });
  });
});

app.get('/api/session', (req, res) => {
  res.json({
    authenticated: !!req.session.user,
    user: req.session.user || null
  });
});

app.get('/api/requests', requireAuth, async (req, res) => {
  try {
    const rows = await all('SELECT * FROM requests ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes.', error: error.message });
  }
});

app.post('/api/requests', async (req, res) => {
  try {
    const demande = req.body || {};

    const fields = {
      langue: normalizeLanguage(demande.langue || 'fr'),
      nom: demande.nom || '',
      pays: demande.pays || '',
      telephone: demande.telephone || '',
      email: demande.email || '',
      profession: demande.profession || '',
      employeur: demande.employeur || '',
      revenu: Number(demande.revenu) || 0,
      type: demande.type || '',
      montant: Number(demande.montant) || 0,
      duree: Number(demande.duree) || 0,
      pieceRecto: demande.pieceRecto || '',
      pieceVerso: demande.pieceVerso || '',
      banque: demande.banque || '',
      titulaireCompte: demande.titulaireCompte || '',
      iban: demande.iban || '',
      adresse: demande.adresse || '',
      objetCredit: demande.objetCredit || '',
      statut: demande.statut || 'En attente',
      message_client: demande.messageClient || '',
      date: demande.date || new Date().toLocaleString('fr-FR')
    };

    const result = await run(
      `INSERT INTO requests (
        langue, nom, pays, telephone, email, profession, employeur, revenu, type,
        montant, duree, pieceRecto, pieceVerso, banque, titulaireCompte, iban,
        adresse, objetCredit, statut, message_client, date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fields.langue,
        fields.nom,
        fields.pays,
        fields.telephone,
        fields.email,
        fields.profession,
        fields.employeur,
        fields.revenu,
        fields.type,
        fields.montant,
        fields.duree,
        fields.pieceRecto,
        fields.pieceVerso,
        fields.banque,
        fields.titulaireCompte,
        fields.iban,
        fields.adresse,
        fields.objetCredit,
        fields.statut,
        fields.message_client,
        fields.date
      ]
    );

    const inserted = await get('SELECT * FROM requests WHERE id = ?', [result.id]);

    if (inserted && inserted.email) {
      const emailBody = buildEmailTemplate({ lang: inserted.langue, type: 'pending', nom: inserted.nom || 'Client' });
      await sendEmail({
        to: inserted.email,
        subject: emailBody.subject,
        text: emailBody.text,
        html: emailBody.html
      });
    }

    res.status(201).json({ ok: true, demande: inserted });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l’enregistrement de la demande.', error: error.message });
  }
});

app.patch('/api/requests/:id/status', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { statut } = req.body || {};

  if (!statut) {
    return res.status(400).json({ message: 'Le statut est obligatoire.' });
  }

  try {
    await run('UPDATE requests SET statut = ? WHERE id = ?', [statut, id]);
    const updated = await get('SELECT * FROM requests WHERE id = ?', [id]);

    if (updated && updated.email) {
      const templateType = statut === 'Approuvée' ? 'approved' : statut === 'Refusée' ? 'refused' : 'pending';
      const emailBody = buildEmailTemplate({ lang: updated.langue, type: templateType, nom: updated.nom || 'Client' });
      await sendEmail({
        to: updated.email,
        subject: emailBody.subject,
        text: emailBody.text,
        html: emailBody.html
      });
    }

    res.json({ ok: true, demande: updated });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du statut.', error: error.message });
  }
});

app.use(express.static(__dirname));

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Financia API is running on http://localhost:${PORT}`);
      console.log(`Default admin: ${DEFAULT_ADMIN_USERNAME} / ${DEFAULT_ADMIN_PASSWORD}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
    process.exit(1);
  });

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
