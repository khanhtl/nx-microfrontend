import { createApp } from 'vue';
import App from './app/App.vue';
import './styles.css';
import { router } from './router'
export class VueElement extends HTMLElement {
  app!: any;
  /**
   * Mount app when web component mount dom
   */
  connectedCallback() {
    this.app = createApp(App).use(router);
    this.app.mount(this);
  }
  /**
   * Un mount app when web component un mount dom
   */
  disconnectedCallback() {
    if (this.app) {
      this.app.unmount();
    }
  }
}

customElements.define('template-vue', VueElement);
