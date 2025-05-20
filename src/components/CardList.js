// src/components/Cardlist.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CardList extends LitElement {
    static properties = {
        cards: { type: Array }
    };

    constructor() {
        super();
        this.cards = [];
    }

    static styles = css`
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding: 1.5rem;
        }

        .card-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 0.5rem;
            background-color: #ffffff;
            max-width: 280px;
            width: 100%;
        }

        .card-item .card-username, 
        .card-item .card-title {
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            margin: 0;
        }

        .card-item .card-description {
            margin: 2rem 0 1.25rem;
            line-height: 18px;
            font-size: 13px;
            color: #627184;
        }

        .card-header {
            display: flex;
            align-items: center;
            margin: 0.75rem;
        }

        .custom-checkbox {
            display: inline-flex;
            cursor: pointer;
        }

        .custom-checkbox input {
            opacity: 0;
            position: absolute;
        }

        .custom-checkbox .checkmark {
            width: 16px;
            height: 16px;
            border: 1px solid #A3B1C2;
            border-radius: 2px;
            box-sizing: border-box;
            position: relative;
        }

        .custom-checkbox:hover .checkmark {
            border-color: #00BFFF;
        }

        .custom-checkbox input:checked + .checkmark {
            background-color: #00BFFF;
            border-color: #00BFFF;
        }

        .custom-checkbox input:checked + .checkmark::after {
            content: "";
            position: absolute;
            left: 4px;
            width: 5px;
            height: 9px;
            border: solid black;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        .custom-checkbox input:focus + .checkmark {
            outline: 2px solid #000000;
            outline-offset: 2px;
        }

        .card-header .icon-globe {
            margin: 0 10px 0 20px;
        }
            
        .card-media {
            width: 100%;
            height: auto;
            height: 120px;
            object-fit: cover;
        }

        .card-content {
            margin: 1rem;
        }

        .card-content .grey-text {
            color: #627184;
        }

        .card-content .card-info-container {
            display: flex;
            justify-content: space-between;
        }

        .card-content .card-info p,
        .card-content .card-info time {
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            margin: 0;
        }

        .card-actions {
            display: flex;
            justify-content: center;
            margin: 0.5rem 1rem;
        }

        .card-actions .btn-img-container {
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
            background: none;
            border: none;
        }

        .card-actions .btn-img-container:hover {
            background: #000000;
            cursor: pointer;
        }
            
        .card-actions .btn-img-container:hover svg path {
            fill: #87CEEB;
        }
  `;

    render() {
        return html`
            <section class="card-container">
                ${this.cards.map(card => html`
                    <article class="${card.iconClass}" aria-labelledby="card-title-${card.id}">
                        <header class="card-header">
                            <label class="custom-checkbox">
                                <input 
                                    type="checkbox" 
                                    aria-label="Sélectionner la carte de ${card.userName}"                        
                                />
                                <span class="checkmark"></span>                   
                            </label>
                            <img 
                                src="src/icons/globe.svg"
                                class="icon-globe" 
                                alt=""
                            />
                            <h3 class="card-username">${card.userName}</h2>
                        </header>
                        <img 
                            class="card-media" 
                            src="src/utils/fake-map.jpg" 
                            alt="Aperçu de la carte ${card.name}" 
                        />
                        <div class="card-content">
                            <h2 id="card-title-${card.id}" class="card-title">${card.name}</h2>
                            <p class="card-description">${card.description}</p>
                            <div class="card-info-container" role="group" aria-label="Informations complémentaires">
                                <div class="card-info">
                                    <p>Modifié le</p>
                                    <time class="grey-text">${new Date(parseInt(card.modificationDate)).toLocaleDateString()}</time>
                                </div>
                                <div class="card-info">
                                    <p>Application</p>
                                    <p class="grey-text">Mon application</p>
                                </div>
                            </div>
                        </div>
                        <nav class="card-actions" aria-label="Actions sur la carte">
                            <button class="btn-img-container" aria-label="Voir la carte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z" fill="#1565C0"/>
                                </svg>                
                            </button>
                            <button class="btn-img-container" aria-label="Editer la carte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path d="M5.49875 13C6.04875 13 6.49875 13.45 6.49875 14C6.49875 15.1 5.59875 16 4.49875 16C4.32875 16 4.16875 15.98 3.99875 15.95C4.30875 15.4 4.49875 14.74 4.49875 14C4.49875 13.45 4.94875 13 5.49875 13ZM17.1687 0C16.9087 0 16.6587 0.1 16.4587 0.29L7.49875 9.25L10.2487 12L19.2087 3.04C19.5987 2.65 19.5987 2.02 19.2087 1.63L17.8687 0.29C17.6687 0.09 17.4187 0 17.1687 0ZM5.49875 11C3.83875 11 2.49875 12.34 2.49875 14C2.49875 15.31 1.33875 16 0.498749 16C1.41875 17.22 2.98875 18 4.49875 18C6.70875 18 8.49875 16.21 8.49875 14C8.49875 12.34 7.15875 11 5.49875 11Z" fill="#1565C0"/>
                                </svg>                
                            </button>
                            <button class="btn-img-container" aria-label="Dupliquer la carte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                    <path d="M14.5 0H2.5C1.4 0 0.5 0.9 0.5 2V16H2.5V2H14.5V0ZM13.5 4H6.5C5.4 4 4.51 4.9 4.51 6L4.5 20C4.5 21.1 5.39 22 6.49 22H17.5C18.6 22 19.5 21.1 19.5 20V10L13.5 4ZM6.5 20V6H12.5V11H17.5V20H6.5Z" fill="#1565C0"/>
                                </svg>
                            </button>   
                            <button class="btn-img-container" aria-label="Supprimer la carte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                                    <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#1565C0"/>
                                </svg>
                            </button>   
                            <button class="btn-img-container" aria-label="Plus d'options">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                    <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#1565C0"/>
                                </svg>
                            </button>
                        </nav>
                    </article>
                `)}
            </section>
        `;
    }
}

customElements.define('card-list', CardList);
