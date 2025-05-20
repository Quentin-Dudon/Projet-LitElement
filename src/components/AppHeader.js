// src/components/AppHeader.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class AppHeader extends LitElement {
    static styles = css`
        .header-menu {
            display: flex;
            justify-content: space-between; 
        }

        .header-menu-home {
            width: 56px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FFFFFF;
        }

        .header-menu-tools {
            display: flex;
            align-items: center;
        }

        .header-menu-tools .icon-button {
            border: none;
            padding: 0 10px;
            background: none;
            height: 40px;
            position: relative;
        }

        .header-menu-tools .icon-button:not(:first-child)::before {
            content: '';
            position: absolute;
            left: 0;
            top: 4px;
            width: 1px;
            height: 32px;
            background-color: #C3D1E1;
        }

        .header-menu-tools .nums {
            position: absolute;
            top: 5px;
            right: 5px;
        }

        .header-menu-tools .icon-button.avatar {
            padding: 0;
        }
    `;

    render() {
        return html`
            <header>  
                <nav aria-label="Menu principal" class="header-menu">

                    <!-- Logo Accueil -->
                    <a href="/" class="header-menu-home" aria-label="Accueil">
                        <img src="src/icons/home.svg" alt="" />
                    </a>

                    <!-- Outils utilisateur -->
                    <div class="header-menu-tools" role="group" aria-label="Outils utilisateur">
                    
                        <button type="button" class="icon-button" aria-label="Favoris">
                            <img src="src/icons/star.svg" alt="" />
                        </button>

                        <button type="button" class="icon-button" aria-label="Support">
                            <img src="src/icons/support.svg" alt="" />
                        </button>

                        <button type="button" class="icon-button" aria-label="Paramètres">
                            <img src="src/icons/settings.svg" alt="" />
                        </button>

                        <button type="button" class="icon-button" aria-label="Boîte mail">
                            <img src="src/icons/mail.svg" alt="" />
                            <img src="src/icons/nums.svg" class="nums" />
                        </button>

                        <button type="button" class="icon-button" aria-label="Notifications">
                            <img src="src/icons/bell.svg" alt="" />
                        </button>

                        <button type="button" class="icon-button avatar" aria-label="Profil utilisateur">
                            <img src="src/icons/avatar.png" />
                        </button>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader);
