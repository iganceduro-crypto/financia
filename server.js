const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
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
      date TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

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
      date: demande.date || new Date().toLocaleString('fr-FR')
    };

    const result = await run(
      `INSERT INTO requests (
        nom, pays, telephone, email, profession, employeur, revenu, type,
        montant, duree, pieceRecto, pieceVerso, banque, titulaireCompte, iban,
        adresse, objetCredit, statut, date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
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
        fields.date
      ]
    );

    const inserted = await get('SELECT * FROM requests WHERE id = ?', [result.id]);
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
