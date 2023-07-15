import { createApp } from 'vue';
import Messages from './app/components/Messages.vue';
import './styles.css';
import { router } from './router'
export class MfeVue extends HTMLElement {
  connectedCallback() {
    createApp(Messages).use(router).mount(this);
  }
}
customElements.define('vue-component', MfeVue);
