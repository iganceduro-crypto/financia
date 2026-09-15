// ==========================================
// FINANCIA - SCRIPT PRINCIPAL
// ==========================================


// ==========================================
// 1. TRADUCTIONS
// ==========================================

const traductions = {

    fr: {
        accueil: "Accueil",
        credits: "Nos crédits",
        simulateur: "Demande de prêt",
        apropos: "À propos",
        contact: "Contact",
        simuler: "Demander",
        titre: "Financez vos projets simplement.",
        sousTitre: "Des solutions de crédit adaptées à vos besoins.",
        demande: "Demande de crédit",
        demandeTitre: "Demande de crédit",
        demandeSousTitre: "Remplissez le formulaire pour soumettre votre demande.",
        badgeHero: "SOLUTIONS FINANCIÈRES",
        sousTitreHero: "Demandez votre prêt en quelques secondes et découvrez une estimation de vos mensualités.",
        btnDemanderPret: "Demander mon prêt",
        btnDecouvrirCredits: "Découvrir nos crédits",
        simulationRapide: "Simulation rapide",
        mensualiteEstimee: "Mensualité estimée",
        modifierSimulation: "Modifier la simulation →",
        nosSolutions: "NOS SOLUTIONS",
        creditsTitre: "Des crédits adaptés à vos projets",
        creditsSousTitre: "Découvrez nos principales solutions de financement.",
        enSavoirPlus: "En savoir plus →",
        demandePretLabel: "DEMANDE DE PRÊT",
        demandePretTitre: "Demandez votre prêt",
        demandePretSousTitre: "Cette demande est indicative et ne constitue pas une offre de crédit.",
        montantCreditSimu: "Montant du crédit",
        dureeCreditSimu: "Durée (mois)",
        tauxAnnuelSimu: "Taux annuel (%)",
        nosEngagements: "NOS ENGAGEMENTS",
        engagementTitre: "Une expérience simple et transparente",
        aboutDescription: "FINANCIA est une plateforme de démonstration conçue pour présenter des solutions modernes de simulation et de demande de crédit.",
        featureSimulation: "✓ Simulation rapide",
        featureProcessus: "✓ Processus simplifié",
        featureTransparence: "✓ Informations transparentes",
        featureSupport: "✓ Assistance client",
        contactLabel: "CONTACT",
        contactTitre: "Besoin d'informations ?",
        contactSousTitre: "Contactez notre équipe pour obtenir plus d'informations sur nos solutions.",
        blocIdentite: "Informations personnelles",
        blocCoordonnees: "Coordonnées",
        blocProfession: "Situation professionnelle",
        blocDocuments: "Pièces justificatives",
        blocBanque: "Informations bancaires",
        montant: "Montant demandé (FCFA)",
        duree: "Durée (mois)",
        taux: "Taux annuel (%)",
        calculer: "Calculer",
        profession: "Profession / activité",
        revenu: "Revenu mensuel (FCFA)",
        envoyer: "Soumettre ma demande",
        nom: "Nom et prénom",
        pays: "Pays de résidence",
        telephone: "Téléphone",
        email: "Adresse email",
        employeur: "Employeur / entreprise",
        typeCredit: "Type de crédit",
        montantDemande: "Montant demandé (FCFA)",
        dureeDemande: "Durée (mois)",
        pieceRecto: "Pièce d’identité recto",
        pieceVerso: "Pièce d’identité verso",
        banque: "Banque",
        titulaireCompte: "Titulaire du compte",
        iban: "IBAN / numéro de compte",
        adresse: "Adresse",
        objetCredit: "Objet du crédit",
        soumettreDemande: "Soumettre ma demande",
        confirmationMessage: "Votre demande a bien été enregistrée.",
        choisirPays: "Choisir votre pays",
        choisirType: "Choisir un crédit",
        choisirDuree: "Choisir la durée",
        creditPersonnel: "Crédit personnel",
        creditProfessionnel: "Crédit professionnel",
        creditImmobilier: "Crédit immobilier",
        nomPlaceholder: "Ex : Jean Dupont",
        telephonePlaceholder: "Ex : 97 00 00 00",
        emailPlaceholder: "Ex : jean@email.com",
        professionPlaceholder: "Ex : Agent commercial",
        employeurPlaceholder: "Ex : FINANCIA Services",
        revenuPlaceholder: "Ex : 250000",
        banquePlaceholder: "Ex : Banque Atlantique",
        titulaireComptePlaceholder: "Ex : Jean Dupont",
        ibanPlaceholder: "Ex : BJ66 1234 5678 9012",
        adressePlaceholder: "Ex : 12 rue de la Paix, Cotonou",
        objetCreditPlaceholder: "Expliquez brièvement votre projet...",
        montantDemandePlaceholder: "Ex : 1000000"
    },

    en: {
        accueil: "Home",
        credits: "Our loans",
        simulateur: "Loan request",
        apropos: "About",
        contact: "Contact",
        simuler: "Apply",
        titre: "Finance your projects simply.",
        sousTitre: "Credit solutions adapted to your needs.",
        demande: "Loan request",
        demandeTitre: "Loan request",
        demandeSousTitre: "Fill out the form to submit your request.",
        badgeHero: "FINANCIAL SOLUTIONS",
        sousTitreHero: "Apply for your loan in a few seconds and discover an estimate of your monthly payments.",
        btnDemanderPret: "Apply for a loan",
        btnDecouvrirCredits: "Discover our loans",
        simulationRapide: "Quick simulation",
        mensualiteEstimee: "Estimated monthly payment",
        modifierSimulation: "Modify the simulation →",
        nosSolutions: "OUR SOLUTIONS",
        creditsTitre: "Loans tailored to your projects",
        creditsSousTitre: "Discover our main financing solutions.",
        enSavoirPlus: "Learn more →",
        demandePretLabel: "LOAN REQUEST",
        demandePretTitre: "Apply for your loan",
        demandePretSousTitre: "This request is indicative and does not constitute a credit offer.",
        montantCreditSimu: "Loan amount",
        dureeCreditSimu: "Duration (months)",
        tauxAnnuelSimu: "Annual rate (%)",
        nosEngagements: "OUR COMMITMENTS",
        engagementTitre: "A simple and transparent experience",
        aboutDescription: "FINANCIA is a demo platform designed to present modern solutions for loan simulation and application.",
        featureSimulation: "✓ Fast simulation",
        featureProcessus: "✓ Simplified process",
        featureTransparence: "✓ Transparent information",
        featureSupport: "✓ Customer support",
        contactLabel: "CONTACT",
        contactTitre: "Need more information?",
        contactSousTitre: "Contact our team for more information about our solutions.",
        blocIdentite: "Personal information",
        blocCoordonnees: "Contact details",
        blocProfession: "Professional situation",
        blocDocuments: "Supporting documents",
        blocBanque: "Bank details",
        montant: "Requested amount",
        duree: "Duration (months)",
        taux: "Annual interest rate (%)",
        calculer: "Calculate",
        profession: "Occupation / activity",
        revenu: "Monthly income",
        envoyer: "Submit my application",
        nom: "Full name",
        pays: "Country of residence",
        telephone: "Phone",
        email: "Email address",
        employeur: "Employer / company",
        typeCredit: "Loan type",
        montantDemande: "Requested amount",
        dureeDemande: "Duration (months)",
        pieceRecto: "Identity card front",
        pieceVerso: "Identity card back",
        banque: "Bank",
        titulaireCompte: "Account holder",
        iban: "IBAN / account number",
        adresse: "Address",
        objetCredit: "Purpose of the loan",
        soumettreDemande: "Submit my application",
        confirmationMessage: "Your request has been registered successfully.",
        choisirPays: "Choose your country",
        choisirType: "Choose a loan",
        choisirDuree: "Choose the duration",
        creditPersonnel: "Personal loan",
        creditProfessionnel: "Business loan",
        creditImmobilier: "Mortgage loan",
        nomPlaceholder: "Ex: John Smith",
        telephonePlaceholder: "Ex: +1 555 123 4567",
        emailPlaceholder: "Ex: john@email.com",
        professionPlaceholder: "Ex: Sales representative",
        employeurPlaceholder: "Ex: FINANCIA Services",
        revenuPlaceholder: "Ex: 2500",
        banquePlaceholder: "Ex: Barclays Bank",
        titulaireComptePlaceholder: "Ex: John Smith",
        ibanPlaceholder: "Ex: GB82 WEST 1234 5698 7654 32",
        adressePlaceholder: "Ex: 12 Main Street, London",
        objetCreditPlaceholder: "Briefly explain your project...",
        montantDemandePlaceholder: "Ex: 10000"
    },

    de: {
        accueil: "Startseite",
        credits: "Unsere Kredite",
        simulateur: "Kreditanfrage",
        apropos: "Über uns",
        contact: "Kontakt",
        simuler: "Beantragen",
        titre: "Finanzieren Sie Ihre Projekte einfach.",
        sousTitre: "Kreditlösungen, die Ihren Bedürfnissen entsprechen.",
        demande: "Kreditanfrage",
        demandeTitre: "Kreditanfrage",
        demandeSousTitre: "Füllen Sie das Formular aus, um Ihren Antrag zu senden.",
        badgeHero: "FINANZIELLE LÖSUNGEN",
        sousTitreHero: "Beantragen Sie Ihren Kredit in wenigen Sekunden und entdecken Sie eine Schätzung Ihrer monatlichen Zahlungen.",
        btnDemanderPret: "Kredit beantragen",
        btnDecouvrirCredits: "Unsere Kredite entdecken",
        simulationRapide: "Schnelle Simulation",
        mensualiteEstimee: "Geschätzte monatliche Rate",
        modifierSimulation: "Simulation ändern →",
        nosSolutions: "UNSERE LÖSUNGEN",
        creditsTitre: "Kredite, die zu Ihren Projekten passen",
        creditsSousTitre: "Entdecken Sie unsere wichtigsten Finanzierungslösungen.",
        enSavoirPlus: "Mehr erfahren →",
        demandePretLabel: "KREDITANFRAGE",
        demandePretTitre: "Beantragen Sie Ihren Kredit",
        demandePretSousTitre: "Diese Anfrage ist informativ und stellt kein Kreditangebot dar.",
        montantCreditSimu: "Kreditbetrag",
        dureeCreditSimu: "Laufzeit (Monate)",
        tauxAnnuelSimu: "Jährlicher Zinssatz (%)",
        nosEngagements: "UNSERE VERPFLICHTUNGEN",
        engagementTitre: "Eine einfache und transparente Erfahrung",
        aboutDescription: "FINANCIA ist eine Demo-Plattform, die moderne Lösungen für Kredit-Simulation und -Antrag präsentiert.",
        featureSimulation: "✓ Schnelle Simulation",
        featureProcessus: "✓ Vereinfachter Prozess",
        featureTransparence: "✓ Transparente Informationen",
        featureSupport: "✓ Kundenservice",
        contactLabel: "KONTAKT",
        contactTitre: "Benötigen Sie Informationen?",
        contactSousTitre: "Kontaktieren Sie unser Team für weitere Informationen zu unseren Lösungen.",
        blocIdentite: "Persönliche Angaben",
        blocCoordonnees: "Kontaktdaten",
        blocProfession: "Berufliche Situation",
        blocDocuments: "Unterlagen",
        blocBanque: "Bankdaten",
        montant: "Beantragter Betrag",
        duree: "Laufzeit (Monate)",
        taux: "Jährlicher Zinssatz (%)",
        calculer: "Berechnen",
        profession: "Beruf / Tätigkeit",
        revenu: "Monatliches Einkommen",
        envoyer: "Antrag einreichen",
        nom: "Vor- und Nachname",
        pays: "Wohnsland",
        telephone: "Telefon",
        email: "E-Mail-Adresse",
        employeur: "Arbeitgeber / Unternehmen",
        typeCredit: "Kreditart",
        montantDemande: "Beantragter Betrag",
        dureeDemande: "Laufzeit (Monate)",
        pieceRecto: "Personalausweis Vorderseite",
        pieceVerso: "Personalausweis Rückseite",
        banque: "Bank",
        titulaireCompte: "Kontoinhaber",
        iban: "IBAN / Kontonummer",
        adresse: "Adresse",
        objetCredit: "Zweck des Kredits",
        soumettreDemande: "Antrag einreichen",
        confirmationMessage: "Ihre Anfrage wurde erfolgreich gespeichert.",
        choisirPays: "Wählen Sie Ihr Land",
        choisirType: "Kredit auswählen",
        choisirDuree: "Dauer auswählen",
        creditPersonnel: "Privatkredit",
        creditProfessionnel: "Unternehmenskredit",
        creditImmobilier: "Immobilienkredit",
        nomPlaceholder: "Bsp.: Max Mustermann",
        telephonePlaceholder: "Bsp.: +49 170 1234567",
        emailPlaceholder: "Bsp.: max@email.de",
        professionPlaceholder: "Bsp.: Verkaufsmitarbeiter",
        employeurPlaceholder: "Bsp.: FINANCIA Services",
        revenuPlaceholder: "Bsp.: 2500",
        banquePlaceholder: "Bsp.: Deutsche Bank",
        titulaireComptePlaceholder: "Bsp.: Max Mustermann",
        ibanPlaceholder: "Bsp.: DE89 3704 0044 0532 0130 00",
        adressePlaceholder: "Bsp.: Musterstraße 12, Berlin",
        objetCreditPlaceholder: "Erläutern Sie kurz Ihr Projekt...",
        montantDemandePlaceholder: "Bsp.: 10000"
    },

    es: {
        accueil: "Inicio",
        credits: "Nuestros créditos",
        simulateur: "Solicitud de préstamo",
        apropos: "Sobre nosotros",
        contact: "Contacto",
        simuler: "Solicitar",
        titre: "Financia tus proyectos fácilmente.",
        sousTitre: "Soluciones de crédito adaptadas a tus necesidades.",
        demande: "Solicitud de préstamo",
        demandeTitre: "Solicitud de préstamo",
        demandeSousTitre: "Complete el formulario para enviar su solicitud.",
        badgeHero: "SOLUCIONES FINANCIERAS",
        sousTitreHero: "Solicite su préstamo en pocos segundos y conozca una estimación de sus cuotas mensuales.",
        btnDemanderPret: "Solicitar préstamo",
        btnDecouvrirCredits: "Descubrir nuestros créditos",
        simulationRapide: "Simulación rápida",
        mensualiteEstimee: "Cuota mensual estimada",
        modifierSimulation: "Modificar la simulación →",
        nosSolutions: "NUESTRAS SOLUCIONES",
        creditsTitre: "Créditos adaptados a sus proyectos",
        creditsSousTitre: "Descubra nuestras principales soluciones de financiación.",
        enSavoirPlus: "Más información →",
        demandePretLabel: "SOLICITUD DE PRÉSTAMO",
        demandePretTitre: "Solicite su préstamo",
        demandePretSousTitre: "Esta solicitud es indicativa y no constituye una oferta de crédito.",
        montantCreditSimu: "Monto del crédito",
        dureeCreditSimu: "Duración (meses)",
        tauxAnnuelSimu: "Tasa anual (%)",
        nosEngagements: "NUESTROS COMPROMISOS",
        engagementTitre: "Una experiencia simple y transparente",
        aboutDescription: "FINANCIA es una plataforma de demostración diseñada para presentar soluciones modernas de simulación y solicitud de crédito.",
        featureSimulation: "✓ Simulación rápida",
        featureProcessus: "✓ Proceso simplificado",
        featureTransparence: "✓ Información transparente",
        featureSupport: "✓ Atención al cliente",
        contactLabel: "CONTACTO",
        contactTitre: "¿Necesita información?",
        contactSousTitre: "Contacte a nuestro equipo para obtener más información sobre nuestras soluciones.",
        blocIdentite: "Información personal",
        blocCoordonnees: "Datos de contacto",
        blocProfession: "Situación profesional",
        blocDocuments: "Documentos justificativos",
        blocBanque: "Datos bancarios",
        montant: "Importe solicitado",
        duree: "Duración (meses)",
        taux: "Tasa anual (%)",
        calculer: "Calcular",
        profession: "Profesión / actividad",
        revenu: "Ingresos mensuales",
        envoyer: "Enviar mi solicitud",
        nom: "Nombre y apellidos",
        pays: "País de residencia",
        telephone: "Teléfono",
        email: "Correo electrónico",
        employeur: "Empleador / empresa",
        typeCredit: "Tipo de crédito",
        montantDemande: "Importe solicitado",
        dureeDemande: "Duración (meses)",
        pieceRecto: "Documento de identidad anverso",
        pieceVerso: "Documento de identidad reverso",
        banque: "Banco",
        titulaireCompte: "Titular de la cuenta",
        iban: "IBAN / número de cuenta",
        adresse: "Dirección",
        objetCredit: "Objeto del crédito",
        soumettreDemande: "Enviar mi solicitud",
        confirmationMessage: "Su solicitud se ha registrado correctamente.",
        choisirPays: "Elija su país",
        choisirType: "Elija un crédito",
        choisirDuree: "Elija la duración",
        creditPersonnel: "Crédito personal",
        creditProfessionnel: "Crédito empresarial",
        creditImmobilier: "Crédito hipotecario",
        nomPlaceholder: "Ej.: Juan Pérez",
        telephonePlaceholder: "Ej.: +34 600 123 456",
        emailPlaceholder: "Ej.: juan@email.com",
        professionPlaceholder: "Ej.: Comercial",
        employeurPlaceholder: "Ej.: FINANCIA Services",
        revenuPlaceholder: "Ej.: 2500",
        banquePlaceholder: "Ej.: Banco Santander",
        titulaireComptePlaceholder: "Ej.: Juan Pérez",
        ibanPlaceholder: "Ej.: ES91 2100 0418 4502 0005 1332",
        adressePlaceholder: "Ej.: Calle Mayor 12, Madrid",
        objetCreditPlaceholder: "Explique brevemente su proyecto...",
        montantDemandePlaceholder: "Ej.: 10000"
    },

    it: {
        accueil: "Home",
        credits: "I nostri prestiti",
        simulateur: "Richiesta di prestito",
        apropos: "Chi siamo",
        contact: "Contatti",
        simuler: "Richiedi",
        titre: "Finanzia i tuoi progetti facilmente.",
        sousTitre: "Soluzioni di credito adatte alle tue esigenze.",
        demande: "Richiesta di prestito",
        demandeTitre: "Richiesta di prestito",
        demandeSousTitre: "Compila il modulo per inviare la tua richiesta.",
        montant: "Importo richiesto",
        duree: "Durata (mesi)",
        taux: "Tasso annuale (%)",
        calculer: "Calcola",
        profession: "Professione / attività",
        revenu: "Reddito mensile",
        envoyer: "Invia la richiesta",
        nom: "Nome e cognome",
        pays: "Paese di residenza",
        telephone: "Telefono",
        email: "Email",
        employeur: "Datore di lavoro / azienda",
        typeCredit: "Tipo di prestito",
        montantDemande: "Importo richiesto",
        dureeDemande: "Durata (mesi)",
        pieceRecto: "Documento d’identità fronte",
        pieceVerso: "Documento d’identità retro",
        banque: "Banca",
        titulaireCompte: "Titolare del conto",
        iban: "IBAN / numero conto",
        adresse: "Indirizzo",
        objetCredit: "Scopo del prestito",
        soumettreDemande: "Invia la richiesta",
        confirmationMessage: "La tua richiesta è stata registrata con successo.",
        choisirPays: "Scegli il tuo paese",
        choisirType: "Scegli un prestito",
        choisirDuree: "Scegli la durata",
        creditPersonnel: "Prestito personale",
        creditProfessionnel: "Prestito aziendale",
        creditImmobilier: "Prestito immobiliare",
        nomPlaceholder: "Es.: Mario Rossi",
        telephonePlaceholder: "Es.: +39 333 1234567",
        emailPlaceholder: "Es.: mario@email.it",
        professionPlaceholder: "Es.: Commerciale",
        employeurPlaceholder: "Es.: FINANCIA Services",
        revenuPlaceholder: "Es.: 2500",
        banquePlaceholder: "Es.: Intesa Sanpaolo",
        titulaireComptePlaceholder: "Es.: Mario Rossi",
        ibanPlaceholder: "Es.: IT60 X054 2811 1010 0000 0123 456",
        adressePlaceholder: "Es.: Via Roma 12, Milano",
        objetCreditPlaceholder: "Spiega brevemente il tuo progetto...",
        montantDemandePlaceholder: "Es.: 10000"
    },

    pt: {
        accueil: "Início",
        credits: "Nossos créditos",
        simulateur: "Pedido de empréstimo",
        apropos: "Sobre nós",
        contact: "Contacto",
        simuler: "Solicitar",
        titre: "Financie os seus projetos facilmente.",
        sousTitre: "Soluções de crédito adaptadas às suas necessidades.",
        demande: "Pedido de empréstimo",
        demandeTitre: "Pedido de empréstimo",
        demandeSousTitre: "Preencha o formulário para enviar o seu pedido.",
        montant: "Montante solicitado",
        duree: "Duração (meses)",
        taux: "Taxa anual (%)",
        calculer: "Calcular",
        profession: "Profissão / atividade",
        revenu: "Rendimento mensal",
        envoyer: "Enviar pedido",
        nom: "Nome e sobrenome",
        pays: "País de residência",
        telephone: "Telefone",
        email: "E-mail",
        employeur: "Empregador / empresa",
        typeCredit: "Tipo de crédito",
        montantDemande: "Montante solicitado",
        dureeDemande: "Duração (meses)",
        pieceRecto: "Documento de identidade frente",
        pieceVerso: "Documento de identidade verso",
        banque: "Banco",
        titulaireCompte: "Titular da conta",
        iban: "IBAN / número da conta",
        adresse: "Endereço",
        objetCredit: "Objetivo do crédito",
        soumettreDemande: "Enviar pedido",
        confirmationMessage: "O seu pedido foi registado com sucesso.",
        choisirPays: "Escolha o seu país",
        choisirType: "Escolha um crédito",
        choisirDuree: "Escolha a duração",
        creditPersonnel: "Crédito pessoal",
        creditProfessionnel: "Crédito empresarial",
        creditImmobilier: "Crédito habitação",
        nomPlaceholder: "Ex.: João Silva",
        telephonePlaceholder: "Ex.: +351 912 345 678",
        emailPlaceholder: "Ex.: joao@email.pt",
        professionPlaceholder: "Ex.: Vendedor",
        employeurPlaceholder: "Ex.: FINANCIA Services",
        revenuPlaceholder: "Ex.: 2500",
        banquePlaceholder: "Ex.: Banco BPI",
        titulaireComptePlaceholder: "Ex.: João Silva",
        ibanPlaceholder: "Ex.: PT50 0002 0123 0000 0000 0000 0",
        adressePlaceholder: "Ex.: Rua da Liberdade 12, Lisboa",
        objetCreditPlaceholder: "Explique brevemente o seu projeto...",
        montantDemandePlaceholder: "Ex.: 10000"
    },

    nl: {
        accueil: "Home",
        credits: "Onze leningen",
        simulateur: "Leningsaanvraag",
        apropos: "Over ons",
        contact: "Contact",
        simuler: "Aanvragen",
        titre: "Financier uw projecten eenvoudig.",
        sousTitre: "Kredietoplossingen aangepast aan uw behoeften.",
        demande: "Leningsaanvraag",
        demandeTitre: "Leningsaanvraag",
        demandeSousTitre: "Vul het formulier in om uw aanvraag in te dienen.",
        montant: "Aangevraagd bedrag",
        duree: "Looptijd (maanden)",
        taux: "Jaarlijkse rente (%)",
        calculer: "Berekenen",
        profession: "Beroep / activiteit",
        revenu: "Maandelijks inkomen",
        envoyer: "Aanvraag indienen",
        nom: "Voornaam en achternaam",
        pays: "Land van verblijf",
        telephone: "Telefoon",
        email: "E-mailadres",
        employeur: "Werkgever / bedrijf",
        typeCredit: "Soort lening",
        montantDemande: "Aangevraagd bedrag",
        dureeDemande: "Looptijd (maanden)",
        pieceRecto: "Identiteitskaart voorzijde",
        pieceVerso: "Identiteitskaart achterzijde",
        banque: "Bank",
        titulaireCompte: "Rekeninghouder",
        iban: "IBAN / rekeningnummer",
        adresse: "Adres",
        objetCredit: "Doel van de lening",
        soumettreDemande: "Aanvraag indienen",
        confirmationMessage: "Uw aanvraag is succesvol geregistreerd.",
        choisirPays: "Kies uw land",
        choisirType: "Kies een lening",
        choisirDuree: "Kies de duur",
        creditPersonnel: "Persoonlijke lening",
        creditProfessionnel: "Zakelijke lening",
        creditImmobilier: "Hypothecaire lening",
        nomPlaceholder: "Bijv.: Jan Jansen",
        telephonePlaceholder: "Bijv.: +31 6 12345678",
        emailPlaceholder: "Bijv.: jan@email.nl",
        professionPlaceholder: "Bijv.: Verkoopmedewerker",
        employeurPlaceholder: "Bijv.: FINANCIA Services",
        revenuPlaceholder: "Bijv.: 2500",
        banquePlaceholder: "Bijv.: ING Bank",
        titulaireComptePlaceholder: "Bijv.: Jan Jansen",
        ibanPlaceholder: "Bijv.: NL91 INGB 0000 1234 00",
        adressePlaceholder: "Bijv.: Dorpsstraat 12, Amsterdam",
        objetCreditPlaceholder: "Leg kort uw project uit...",
        montantDemandePlaceholder: "Bijv.: 10000"
    },

    pl: {
        accueil: "Strona główna",
        credits: "Nasze kredyty",
        simulateur: "Wniosek o pożyczkę",
        apropos: "O nas",
        contact: "Kontakt",
        simuler: "Złóż wniosek",
        titre: "Finansuj swoje projekty w prosty sposób.",
        sousTitre: "Rozwiązania kredytowe dopasowane do Twoich potrzeb.",
        demande: "Wniosek o pożyczkę",
        demandeTitre: "Wniosek o pożyczkę",
        demandeSousTitre: "Wypełnij formularz, aby złożyć wniosek.",
        montant: "Wnioskowana kwota",
        duree: "Okres (miesiące)",
        taux: "Roczna stopa procentowa (%)",
        calculer: "Oblicz",
        profession: "Zawód / działalność",
        revenu: "Miesięczny dochód",
        envoyer: "Wyślij wniosek",
        nom: "Imię i nazwisko",
        pays: "Kraj zamieszkania",
        telephone: "Telefon",
        email: "Adres e-mail",
        employeur: "Pracodawca / firma",
        typeCredit: "Typ pożyczki",
        montantDemande: "Wnioskowana kwota",
        dureeDemande: "Okres (miesiące)",
        pieceRecto: "Dowód tożsamości przód",
        pieceVerso: "Dowód tożsamości tył",
        banque: "Bank",
        titulaireCompte: "Właściciel konta",
        iban: "IBAN / numer konta",
        adresse: "Adres",
        objetCredit: "Cel pożyczki",
        soumettreDemande: "Wyślij wniosek",
        confirmationMessage: "Twój wniosek został pomyślnie zarejestrowany.",
        choisirPays: "Wybierz swój kraj",
        choisirType: "Wybierz pożyczkę",
        choisirDuree: "Wybierz okres",
        creditPersonnel: "Pożyczka osobista",
        creditProfessionnel: "Pożyczka firmowa",
        creditImmobilier: "Kredyt hipoteczny",
        nomPlaceholder: "Np.: Anna Kowalska",
        telephonePlaceholder: "Np.: +48 500 123 456",
        emailPlaceholder: "Np.: anna@email.pl",
        professionPlaceholder: "Np.: Sprzedawca",
        employeurPlaceholder: "Np.: FINANCIA Services",
        revenuPlaceholder: "Np.: 2500",
        banquePlaceholder: "Np.: PKO BP",
        titulaireComptePlaceholder: "Np.: Anna Kowalska",
        ibanPlaceholder: "Np.: PL61109010140000071219812874",
        adressePlaceholder: "Np.: ul. Warszawska 12, Warszawa",
        objetCreditPlaceholder: "Krótko opisz swój projekt...",
        montantDemandePlaceholder: "Np.: 10000"
    },

    lv: {
        accueil: "Sākums",
        credits: "Mūsu kredīti",
        simulateur: "Aizdevuma pieprasījums",
        apropos: "Par mums",
        contact: "Kontakti",
        simuler: "Pieteikties",
        titre: "Finansējiet savus projektus vienkārši.",
        sousTitre: "Kredīta risinājumi, kas pielāgoti jūsu vajadzībām.",
        demande: "Aizdevuma pieprasījums",
        demandeTitre: "Aizdevuma pieprasījums",
        demandeSousTitre: "Aizpildiet veidlapu, lai iesniegtu pieprasījumu.",
        montant: "Pieprasītā summa",
        duree: "Termiņš (mēneši)",
        taux: "Gada procentu likme (%)",
        calculer: "Aprēķināt",
        profession: "Profesija / darbība",
        revenu: "Mēneša ienākumi",
        envoyer: "Iesniegt pieteikumu",
        nom: "Vārds un uzvārds",
        pays: "Rezidences valsts",
        telephone: "Tālrunis",
        email: "E-pasts",
        employeur: "Darba devējs / uzņēmums",
        typeCredit: "Kredīta veids",
        montantDemande: "Pieprasītā summa",
        dureeDemande: "Termiņš (mēneši)",
        pieceRecto: "Personas kartes priekšpuse",
        pieceVerso: "Personas kartes aizmugure",
        banque: "Banka",
        titulaireCompte: "Konta īpašnieks",
        iban: "IBAN / konta numurs",
        adresse: "Adrese",
        objetCredit: "Kredīta mērķis",
        soumettreDemande: "Iesniegt pieteikumu",
        confirmationMessage: "Jūsu pieprasījums ir veiksmīgi reģistrēts.",
        choisirPays: "Izvēlieties valsti",
        choisirType: "Izvēlieties kredītu",
        choisirDuree: "Izvēlieties termiņu",
        creditPersonnel: "Personīgais kredīts",
        creditProfessionnel: "Uzņēmuma kredīts",
        creditImmobilier: "Īpašuma kredīts",
        nomPlaceholder: "Piem.: Jānis Bērziņš",
        telephonePlaceholder: "Piem.: +371 20000000",
        emailPlaceholder: "Piem.: janis@email.lv",
        professionPlaceholder: "Piem.: Tirdzniecības pārstāvis",
        employeurPlaceholder: "Piem.: FINANCIA Services",
        revenuPlaceholder: "Piem.: 2500",
        banquePlaceholder: "Piem.: Swedbank",
        titulaireComptePlaceholder: "Piem.: Jānis Bērziņš",
        ibanPlaceholder: "Piem.: LV80 BANK 0000 0000 0000 1",
        adressePlaceholder: "Piem.: Rīgas iela 12, Rīga",
        objetCreditPlaceholder: "Īsi aprakstiet savu projektu...",
        montantDemandePlaceholder: "Piem.: 10000"
    },

    lt: {
        accueil: "Pagrindinis",
        credits: "Mūsų kreditai",
        simulateur: "Paskolos paraiška",
        apropos: "Apie mus",
        contact: "Kontaktai",
        simuler: "Prašyti",
        titre: "Lengvai finansuokite savo projektus.",
        sousTitre: "Kredito sprendimai, pritaikyti jūsų poreikiams.",
        demande: "Paskolos paraiška",
        demandeTitre: "Paskolos paraiška",
        demandeSousTitre: "Užpildykite formą, kad pateiktumėte paraišką.",
        montant: "Prašoma suma",
        duree: "Terminas (mėnesiais)",
        taux: "Metinė palūkanų norma (%)",
        calculer: "Skaičiuoti",
        profession: "Profesija / veikla",
        revenu: "Mėnesinės pajamos",
        envoyer: "Pateikti paraišką",
        nom: "Vardas ir pavardė",
        pays: "Gyvenamoji šalis",
        telephone: "Telefonas",
        email: "El. paštas",
        employeur: "Darbdavys / įmonė",
        typeCredit: "Kredito tipas",
        montantDemande: "Prašoma suma",
        dureeDemande: "Terminas (mėnesiais)",
        pieceRecto: "Asmens tapatybės kortelė priekinė",
        pieceVerso: "Asmens tapatybės kortelė galinė",
        banque: "Bankas",
        titulaireCompte: "Sąskaitos savininkas",
        iban: "IBAN / sąskaitos numeris",
        adresse: "Adresas",
        objetCredit: "Kredito tikslas",
        soumettreDemande: "Pateikti paraišką",
        confirmationMessage: "Jūsų paraiška sėkmingai užregistruota.",
        choisirPays: "Pasirinkite šalį",
        choisirType: "Pasirinkite kreditą",
        choisirDuree: "Pasirinkite terminą",
        creditPersonnel: "Asmeninis kreditas",
        creditProfessionnel: "Verslo kreditas",
        creditImmobilier: "Nekilnojamojo turto kreditas",
        nomPlaceholder: "Pvz.: Jonas Petraitis",
        telephonePlaceholder: "Pvz.: +370 612 34567",
        emailPlaceholder: "Pvz.: jonas@email.lt",
        professionPlaceholder: "Pvz.: Pardavėjas",
        employeurPlaceholder: "Pvz.: FINANCIA Services",
        revenuPlaceholder: "Pvz.: 2500",
        banquePlaceholder: "Pvz.: Swedbank",
        titulaireComptePlaceholder: "Pvz.: Jonas Petraitis",
        ibanPlaceholder: "Pvz.: LT12 3450 0600 0000 0000",
        adressePlaceholder: "Pvz.: Gedimino g. 12, Vilnius",
        objetCreditPlaceholder: "Trumpai aprašykite savo projektą...",
        montantDemandePlaceholder: "Pvz.: 10000"
    }
};

const correspondancePays = {
    FR: { langue: "fr", devise: "EUR" },
    BE: { langue: "fr", devise: "EUR" },
    CH: { langue: "fr", devise: "EUR" },
    CM: { langue: "fr", devise: "XOF" },
    SN: { langue: "fr", devise: "XOF" },
    CI: { langue: "fr", devise: "XOF" },
    ML: { langue: "fr", devise: "XOF" },
    BF: { langue: "fr", devise: "XOF" },
    TG: { langue: "fr", devise: "XOF" },
    BJ: { langue: "fr", devise: "XOF" },
    NE: { langue: "fr", devise: "XOF" },
    DE: { langue: "de", devise: "EUR" },
    AT: { langue: "de", devise: "EUR" },
    LU: { langue: "de", devise: "EUR" },
    ES: { langue: "es", devise: "EUR" },
    PT: { langue: "pt", devise: "EUR" },
    IT: { langue: "it", devise: "EUR" },
    NL: { langue: "nl", devise: "EUR" },
    PL: { langue: "pl", devise: "PLN" },
    GB: { langue: "en", devise: "GBP" },
    IE: { langue: "en", devise: "EUR" },
    US: { langue: "en", devise: "GBP" },
    CA: { langue: "en", devise: "GBP" }
};

function obtenirConfigurationAutomatique() {
    const locale =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        "fr-FR";

    const codeLocale = locale.replace("_", "-");
    const parties = codeLocale.split("-");
    const langue = parties[0]?.toLowerCase() || "fr";
    const pays = parties[1]?.toUpperCase() || "";

    if (correspondancePays[pays]) {
        return correspondancePays[pays];
    }

    if (traductions[langue]) {
        const deviseParLangue = {
            fr: "EUR",
            de: "EUR",
            es: "EUR",
            pt: "EUR",
            it: "EUR",
            nl: "EUR",
            pl: "PLN",
            en: "GBP"
        };

        return {
            langue,
            devise: deviseParLangue[langue] || "XOF"
        };
    }

    return { langue: "fr", devise: "XOF" };
}


// ==========================================
// 2. CHANGER DE LANGUE
// ==========================================

function changerLangue(langue) {

    if (!traductions[langue]) {
        langue = "fr";
    }

    localStorage.setItem("langueFinancia", langue);

    const t = traductions[langue];

    // Navigation
    const nav = document.querySelectorAll("nav a");

    if (nav.length >= 6) {
        nav[0].textContent = t.accueil;
        nav[1].textContent = t.credits;
        nav[2].textContent = t.simulateur;
        nav[3].textContent = t.apropos;
        nav[4].textContent = t.contact;
        nav[5].textContent = t.simuler;
    }

    // Titres principaux
    const titre = document.querySelector(".hero h1");
    if (titre) titre.textContent = t.titre;

    const sousTitre = document.querySelector(".hero p");
    if (sousTitre) sousTitre.textContent = t.sousTitre;

    // Formulaire
    const titreDemande = document.querySelector(".demande h2");
    if (titreDemande) titreDemande.textContent = t.demandeTitre || t.demande;

    const sousTitreDemande = document.querySelector(".demande .section-title p");
    if (sousTitreDemande) sousTitreDemande.textContent = t.demandeSousTitre || t.demande;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    const confirmation = document.getElementById("confirmation");
    if (confirmation && t.confirmationMessage) {
        confirmation.textContent = t.confirmationMessage;
    }

    // Sélecteur
    const select = document.getElementById("languageSelect");
    if (select) select.value = langue;

    document.documentElement.lang = langue;
}


// ==========================================
// 3. DÉTECTION AUTOMATIQUE
// ==========================================

function detecterLangue() {

    const langueSauvegardee =
        localStorage.getItem("langueFinancia");

    if (langueSauvegardee && traductions[langueSauvegardee]) {
        changerLangue(langueSauvegardee);
        return;
    }

    const configAuto = obtenirConfigurationAutomatique();

    if (traductions[configAuto.langue]) {
        changerLangue(configAuto.langue);
    } else {
        changerLangue("fr");
    }
}


// ==========================================
// DEVISES FINANCIA
// ==========================================

const devises = {
    XOF: {
        symbole: "FCFA",
        taux: 1,
        locale: "fr-FR"
    },

    EUR: {
        symbole: "€",
        taux: 655.957,
        locale: "fr-FR"
    },

    GBP: {
        symbole: "£",
        taux: 770,
        locale: "en-GB"
    },

    PLN: {
        symbole: "zł",
        taux: 155,
        locale: "pl-PL"
    }
};

let deviseActuelle =
    localStorage.getItem("deviseFinancia") || "XOF";


// ==========================================
// CHANGER DEVISE
// ==========================================

function changerDevise(devise) {

    if (!devises[devise]) {
        devise = "XOF";
    }

    deviseActuelle = devise;

    localStorage.setItem(
        "deviseFinancia",
        devise
    );

    const select =
        document.getElementById("currencySelect");

    if (select) {
        select.value = devise;
    }

    calculerCredit();
}


// ==========================================
// FORMATAGE DU MONTANT
// ==========================================

function afficherMontant(montantXOF) {

    const devise = devises[deviseActuelle];

    const montant =
        montantXOF / devise.taux;

    const nombre =
        new Intl.NumberFormat(
            devise.locale,
            {
                maximumFractionDigits: 0
            }
        ).format(montant);

    return nombre + " " + devise.symbole;
}


// ==========================================
// 4. SIMULATEUR DE CRÉDIT
// ==========================================

function calculerCredit() {

    const montant =
        parseFloat(
            document.getElementById("montant").value
        );

    const duree =
        parseInt(
            document.getElementById("duree").value
        );

    const tauxAnnuel =
        parseFloat(
            document.getElementById("taux").value
        );

    if (
        isNaN(montant) ||
        isNaN(duree) ||
        isNaN(tauxAnnuel) ||
        montant <= 0 ||
        duree <= 0 ||
        tauxAnnuel < 0
    ) {
        document.getElementById(
            "mensualite"
        ).textContent = "Valeurs invalides";

        return;
    }

    const tauxMensuel =
        tauxAnnuel / 100 / 12;

    let mensualite;

    if (tauxMensuel === 0) {

        mensualite = montant / duree;

    } else {

        mensualite =
            montant *
            tauxMensuel *
            Math.pow(
                1 + tauxMensuel,
                duree
            ) /
            (
                Math.pow(
                    1 + tauxMensuel,
                    duree
                ) - 1
            );
    }

    document.getElementById(
        "mensualite"
    ).textContent =
        afficherMontant(mensualite);
}


// ==========================================
// 5. FORMULAIRE DE CRÉDIT
// ==========================================

const creditForm =
    document.getElementById("creditForm");

if (creditForm) {

    creditForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const demande = {

                id: Date.now(),

                nom:
                    document.getElementById("nom").value,

                pays:
                    document.getElementById("pays").value,

                telephone:
                    document.getElementById("telephone").value,

                email:
                    document.getElementById("email").value,

                profession:
                    document.getElementById("profession").value,

                employeur:
                    document.getElementById("employeur").value,

                revenu:
                    Number(
                        document.getElementById("revenu").value
                    ),

                type:
                    document.getElementById("typeCredit").value,

                montant:
                    Number(
                        document.getElementById("montantDemande").value
                    ),

                duree:
                    Number(
                        document.getElementById("dureeDemande").value
                    ),

                pieceRecto:
                    document.getElementById("pieceRecto")?.files?.[0]?.name || "",

                pieceVerso:
                    document.getElementById("pieceVerso")?.files?.[0]?.name || "",

                banque:
                    document.getElementById("banque").value,

                titulaireCompte:
                    document.getElementById("titulaireCompte").value,

                iban:
                    document.getElementById("iban").value,

                adresse:
                    document.getElementById("adresse").value,

                objetCredit:
                    document.getElementById("objetCredit").value,

                statut: "En attente",

                date:
                    new Date().toLocaleString("fr-FR")
            };


            let demandes =
                JSON.parse(
                    localStorage.getItem(
                        "demandesFinancia"
                    )
                ) || [];


            demandes.push(demande);


            localStorage.setItem(
                "demandesFinancia",
                JSON.stringify(demandes)
            );


            const confirmation =
                document.getElementById(
                    "confirmation"
                );

            if (confirmation) {

                confirmation.textContent =
                    "Votre demande a bien été enregistrée.";

                confirmation.style.background =
                    "#e8f5e9";

                confirmation.style.color =
                    "#2e7d32";
            }


            creditForm.reset();
        }
    );
}


// ==========================================
// 6. AFFICHAGE DE LA DEMANDE DE PRÊT
// ==========================================

function afficherSectionDemande() {
    const sectionDemande = document.getElementById("simulateur");

    if (!sectionDemande) return;

    sectionDemande.hidden = false;
    sectionDemande.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// 7. INITIALISATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const boutonsDemande = document.querySelectorAll('a[href="#simulateur"]');
        boutonsDemande.forEach((bouton) => {
            bouton.addEventListener("click", function(event) {
                event.preventDefault();
                afficherSectionDemande();
            });
        });

        const configAuto = obtenirConfigurationAutomatique();

        const langueSauvegardee =
            localStorage.getItem("langueFinancia");

        if (langueSauvegardee && traductions[langueSauvegardee]) {
            changerLangue(langueSauvegardee);
        } else if (traductions[configAuto.langue]) {
            changerLangue(configAuto.langue);
        } else {
            changerLangue("fr");
        }

        const deviseSauvegardee =
            localStorage.getItem("deviseFinancia");

        if (
            deviseSauvegardee &&
            devises[deviseSauvegardee]
        ) {
            changerDevise(deviseSauvegardee);
        } else if (devises[configAuto.devise]) {
            changerDevise(configAuto.devise);
        } else {
            changerDevise("XOF");
        }

    }
);