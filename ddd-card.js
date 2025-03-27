/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";


/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDD {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.url = "";
    this.description = "";  
    this.data = {};
    this.image = "";
    this.link = "";
    this.loading = false;


    
  }



  
  

 



  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      data: { type: Object },
      url: { type: String },
      link: { type: String },
      description: { type: String },
      image: { type: String },
      loading: { type: Boolean, reflect: true },
    };
  }

    // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-3);
          max-width: 400px;
          border: var(--ddd-border-xs);
          
        }
        img { 
          max-width: 100%;
          border-radius: var(--ddd-radius-sm);  
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        
        h3 span {
          font-size: var(--link-preview-card-label-font-size, var(--ddd-font-size-s));
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
  
        .loading-spinner {
          margin: 20px auto;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 2s linear infinite;
        }
  
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
      `];
    }

  // Lit render the HTML
  render() {
    return html`
  <div class="preview" part="preview">
        ${this.loading
          ? html`<div class="loading-spinner" part="loading-spinner"></div>`
          : html`
            ${this.image ? html`<img src="${this.image}" alt=${this.label} />` : ''}
            <div class="content" part="content">
              <h3 class="title" part="title">${this.title}</h3>
              <slot></slot>
              <a href="${this.link}" target="_blank" class="url" part="url">Visit Site</a>
            </div>
        `}
      </div>`;
  }

  
}

globalThis.customElements.define(DddCard.tag, DddCard);