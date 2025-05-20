// src/utils/fakeCard.js
export function generateFakeCard() {    
    const id = crypto.randomUUID();

    const titles = [
        "Projet Alpha", "Rapport RH", "Analyse Marché",
        "Documentation", "Fiche Client", "Dossier Budget",
        "Prévision Ventes", "Statistiques", "Étude UX", "Note Interne"
    ];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    const author = [
        "Jane Doe", "John Doe", "Auteur 1", "Auteur 2",
        "Auteur 3", "Auteur 4", "Auteur 5", "Auteur 6"
    ];
    const randomAuthor = author[Math.floor(Math.random() * author.length)];

    return {
        id,
        modificationDate: Date.now().toString(),
        userName: randomAuthor,
        name: randomTitle,
        description: "Aliqua voluptate laboris eiusmod sit occaecat. Dolor irure incididunt labor ...",
        iconClass: "card-item",
    };
}
