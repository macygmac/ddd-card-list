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
    this.primary = "";
    this.accent = ""; 
    

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
      primary: {
        type: String,
        Reflect: true,
        DDDDataAttributes: "data-primary",
      },
      
    };
  }

    // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        :host {
          display: inline-block;
          color: var(--ddd-theme-default-coalyGray);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-primary);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-xs);
          
        }
        img { 
          max-width: 100%;
          border-radius: var(--ddd-radius-sm);  
          border-bottom: 12px var(--ddd-theme-primary) solid;
          border-bottom-left-radius: var(--ddd-radius-0);
          border-bottom-right-radius: var(--ddd-radius-0);
        }
  

        .details {
          padding: 0px 16px;
          margin: var(--ddd-radius-0);
          height: 150px;
          overflow: hidden;
          line-height: var(--ddd-lh-150);
        }
        
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: 16px 16px 20px;
        }
        
        .title{
          font-size: var(--link-preview-card-label-font-size, var(--ddd-font-size-s));
          color: var(--ddd-theme-primary);
          padding: var(--ddd-spacing-3);
          font-weight: var(--ddd-font-weight-bold);
          margin: var(--ddd-spacing-0);
          
        }
        .button a {
          color: var(--ddd-theme-accent);
      }
        
  
      .button {
        display: flex;
        background-color: var(--ddd-theme-default-link);
        padding: 0px 100px;
        margin: 10px 20px 20px 20px;
        justify-content: center;
        align-items: center;
        vertical-align: center;
        font-size: var(--ddd-font-size-4xs);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-white);
        border: none;
        border-radius: var(--ddd-radius-sm);
        height: 50px;
        width: 90%;
        cursor: pointer;
      }

      a{
        margin: auto 0;
      }
      a:link,
      a:visited {
        vertical-align: center;
        background-color: var(--ddd-theme-default-link);
      }
      button:hover, a:hover, a:active {
        background-color: var(--ddd-theme-default-nittanyNavy);
        
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
    <div class="img-container" part="img-container">
      ${this.image ? html`<img src="${this.image}" alt=${this.label} />` : ''}
      </div>
      <div class="content" part="content">
        <h3 class="title" part="title">${this.title}</h3>
        <div class="details" part="details"><slot></slot></div>
        <a href="${this.link}" target="_blank"><button class="button">Explore ></button></a>
      </div>
    
  `;
}

  
}

globalThis.customElements.define(DddCard.tag, DddCard);