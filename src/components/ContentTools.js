// src/components/ContentTools.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ContentTools extends LitElement {
    static styles = css`
        .content-tools {
            display: flex;
            padding: 0.85rem 1rem;
            background-color: #FFFFFF;
            position: relative;
        }

        .content-tools label {
            font-size: 12px;
            line-height: 16px;
            margin-bottom: 0.5rem;
        }

        .button-container {
            display: flex;
            flex-direction: column;
            padding-right: 1rem;
            position: relative;
        }

        .button-container::before {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            height: 60px;
            background-color: #C3D1E1;
        }

        button {
            border: none;
            width: 30px;
            height: 30px;
            cursor: pointer;
            background-color: #1565C0;
        }

        button:hover {
            opacity: 0.8;
        }

        button.icon-create {
            border-radius: 50%;
        }

        button.icon-search {
            border-radius: 0 6px 6px 0;
        }

        .search-container {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;
        }

        form {
            display: flex;
        }

        input {
            font-size: 13px;
            border: 1px solid #A3B1C2;
            border-right: none;
            border-radius: 6px 0 0 6px; 
            padding-left: 10px;
            width: 100%;
            max-width: fit-content;
        }

        input::placeholder {
            font-style: italic;
            margin-left: 0.5rem;
            color: #A2A9B1;
        }
    `;

    render() {
        return html`
            <div class="content-tools">
                <div class="button-container">
                    <label for="create-button">Créer</label>
                    <button
                        id="create-button"
                        type="button"
                        class="icon-create"
                        aria-label="Créer une nouvelle carte"
                        @click=${this._onCreate}
                    >
                        <img src="src/icons/plus.svg" alt="" aria-hidden="true" />
                    </button>
                </div>

                <div class="search-container">
                    <label for="search-input">Rechercher</label>
                    <form @submit=${this._onSubmit}>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Nom d'une ressource"
                            aria-label="Rechercher une ressource"
                        />
                        <button
                            class="icon-search"
                            type="submit"
                            aria-label="Lancer la recherche"
                        >
                            <img src="src/icons/search.svg" alt="" aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>
        `;
    }

    _onCreate() {
        this.dispatchEvent(new CustomEvent('create-card', { bubbles: true, composed: true }));
    }

    _onSubmit(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        const input = this.renderRoot.querySelector('#search-input');
        const value = input.value.trim();

        this.dispatchEvent(new CustomEvent('search-change', {
            detail: { value },
            bubbles: true,
            composed: true,
        }));
    }
}

customElements.define('content-tools', ContentTools);
