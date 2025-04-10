/**
 * Copyright 2025 macygmac
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-card.js";

/**
 * `ddd-card-list` 
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";  
    this.accent = ""; 
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      primary: {
        type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
      accent: {
        type: String,
        reflect: true,
        attribute: "ddd-accent",
      },
      data: { type: Object },
      
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        color: var(--ddd-theme-default-coalyGray);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);

      }
      .wrapper {
        margin: 16px 16px 20px;
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-slateMaxLight);
      }
      .title-bar {  
        padding: var(--ddd-spacing-2);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-primary);
        
      }
      div ::slotted(*) {
        display: inline-block;
     
      }
      h3 span{
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
        color: var(--ddd-theme-primary);
      
      }

      slot {
      display: grid;
      grid-template-columns: repeat(1,1fr);
      gap: var(--ddd-spacing-4);
    }
    .wrapper {
        display: flex;
        background-color: var(--ddd-theme-accent);
        padding-left: var(--ddd-spacing-7);
        padding-right: var(--ddd-spacing-7);
        padding-top: var(--ddd-spacing-15);
        padding-bottom: var(--ddd-spacing-15);
        background-color: var(--ddd-theme-default-slateMaxLight);
      }

    @media screen and (min-width: 768px) {
      .wrapper slot {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-2);
      }
    }
    @media screen and (min-width: 1080px) {
      .wrapper slot {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-4);
      }
    }
      
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    
<div class="wrapper">
  
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);
