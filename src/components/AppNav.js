// src/components/AppNav.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class AppNav extends LitElement {
    static styles = css`
        .main-nav {
            height: 31px;
            background-color: #FFFFFF;
            border-top: 1px solid #C3D1E1;
            border-bottom: 1px solid #C3D1E1;
        }
    `;

    render() {
        return html`
            <nav class="breadcrumb-nav" aria-label="Fil d’Ariane">
                <!-- À remplir -->
            </nav>
        `;
    }
}

customElements.define('app-nav', AppNav);
