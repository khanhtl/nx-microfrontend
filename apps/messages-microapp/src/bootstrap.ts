import { createApp } from 'vue';
import Messages from './app/components/Messages.vue';
import './styles.css';
import { router } from './router'
export class MfeVue extends HTMLElement {
  app!: any;
  connectedCallback() {
    this.app = createApp(Messages).use(router);
    this.app.mount(this);
  }

  disconnectedCallback() {
    if (this.app) {
      this.app.unmount();
    }
  }
}

customElements.define('vue-component', MfeVue);
