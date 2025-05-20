// src/index.js
import './components/AppHeader.js';
import './components/ContentTools.js';
import './components/CardList.js';
import './components/AppNav.js';
import { generateFakeCard } from './utils/fakeCard.js';

const contentTools = document.querySelector('content-tools');
const cardList = document.querySelector('card-list');

let cards = []; // Tableau des cartes
let filteredCards = []; // Cartes à afficher

// Ajout d'une nouvelle carte
contentTools.addEventListener('create-card', () => {
    const newCard = generateFakeCard();
    cards = [newCard].concat(cards);
    filteredCards = cards;
    updateCardList();
});

// Réagit à la recherche
contentTools.addEventListener('search-change', (e) => {
    const term = e.detail.value.toLowerCase();
        filteredCards = cards.filter(card =>
            card.name.toLowerCase().includes(term)
        );
    updateCardList();
});

// Met à jour <card-list>
function updateCardList() {
    cardList.cards = filteredCards; 
}
