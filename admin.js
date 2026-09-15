// ==========================================
// FINANCIA - ESPACE ADMINISTRATEUR
// ==========================================

const totalDemandes =
    document.getElementById("totalDemandes");

const demandesAttente =
    document.getElementById("demandesAttente");

const demandesApprouvees =
    document.getElementById("demandesApprouvees");

const demandesRefusees =
    document.getElementById("demandesRefusees");

const listeDemandes =
    document.getElementById("listeDemandes");


// Récupérer les demandes enregistrées
let demandes =
    JSON.parse(localStorage.getItem("demandesFinancia")) || [];


// ==========================================
// AFFICHER LES STATISTIQUES
// ==========================================

function getStatutValue(statut) {
    if (!statut) return "En attente";

    const value = statut.toLowerCase();

    if (value.includes("approuv")) return "Approuvée";
    if (value.includes("refus")) return "Refusée";
    return "En attente";
}

function mettreAJourStats() {

    totalDemandes.textContent = demandes.length;

    demandesAttente.textContent =
        demandes.filter(
            demande => getStatutValue(demande.statut) === "En attente"
        ).length;

    demandesApprouvees.textContent =
        demandes.filter(
            demande => getStatutValue(demande.statut) === "Approuvée"
        ).length;

    demandesRefusees.textContent =
        demandes.filter(
            demande => getStatutValue(demande.statut) === "Refusée"
        ).length;
}


// ==========================================
// AFFICHER LES DEMANDES
// ==========================================

function sauvegarderDemandes() {
    localStorage.setItem("demandesFinancia", JSON.stringify(demandes));
}

function changerStatut(index, nouveauStatut) {
    if (!demandes[index]) return;

    demandes[index].statut = nouveauStatut;
    sauvegarderDemandes();
    mettreAJourStats();
    afficherDemandes();
}

function approuverDemande(index) {
    changerStatut(index, "Approuvée");
}

function refuserDemande(index) {
    changerStatut(index, "Refusée");
}

function afficherDemandes() {

    listeDemandes.innerHTML = "";

    if (demandes.length === 0) {

        listeDemandes.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center;">
                    Aucune demande pour le moment.
                </td>
            </tr>
        `;

        return;
    }


    demandes.forEach((demande, index) => {

        const statut = getStatutValue(demande.statut);
        const classeStatut =
            statut === "Approuvée" ? "approuvee" :
            statut === "Refusée" ? "refusee" : "attente";

        const ligne = document.createElement("tr");

        ligne.innerHTML = `

            <td>${demande.nom || "—"}</td>

            <td>${demande.telephone || "—"}</td>

            <td>${demande.type || "—"}</td>

            <td>
                ${new Intl.NumberFormat("fr-FR").format(demande.montant || 0)}
                FCFA
            </td>

            <td>${demande.duree || 0} mois</td>

            <td>
                <span class="status ${classeStatut}">
                    ${statut}
                </span>
            </td>

            <td>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <button
                        class="btn-voir"
                        onclick="voirDemande(${index})">
                        Voir
                    </button>
                    <button
                        class="btn-voir"
                        onclick="approuverDemande(${index})">
                        Approuver
                    </button>
                    <button
                        class="btn-voir"
                        style="background:#c0392b; border-color:#c0392b;"
                        onclick="refuserDemande(${index})">
                        Refuser
                    </button>
                </div>
            </td>
        `;

        listeDemandes.appendChild(ligne);
    });
}


// ==========================================
// VOIR UNE DEMANDE
// ==========================================

function voirDemande(index) {

    const demande = demandes[index];
    const statut = getStatutValue(demande.statut);

    const details = [
        "DEMANDE DE CRÉDIT",
        "",
        "Nom : " + (demande.nom || "—"),
        "Pays : " + (demande.pays || "—"),
        "Téléphone : " + (demande.telephone || "—"),
        "Email : " + (demande.email || "—"),
        "Profession : " + (demande.profession || "—"),
        "Employeur : " + (demande.employeur || "—"),
        "Type : " + (demande.type || "—"),
        "Montant : " +
            new Intl.NumberFormat("fr-FR").format(demande.montant || 0) +
            " FCFA",
        "Durée : " + (demande.duree || 0) + " mois",
        "Revenu : " +
            new Intl.NumberFormat("fr-FR").format(demande.revenu || 0) +
            " FCFA",
        "Banque : " + (demande.banque || "—"),
        "Titulaire du compte : " + (demande.titulaireCompte || "—"),
        "IBAN : " + (demande.iban || "—"),
        "Adresse : " + (demande.adresse || "—"),
        "Objet du crédit : " + (demande.objetCredit || "—"),
        "Pièce recto : " + (demande.pieceRecto || "—"),
        "Pièce verso : " + (demande.pieceVerso || "—"),
        "",
        "Statut : " + statut,
        "Date : " + (demande.date || "—")
    ].join("\n");

    alert(details);
}


// ==========================================
// INITIALISATION
// ==========================================

mettreAJourStats();
afficherDemandes();