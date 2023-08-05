<script>
import PubSub from 'pubsub-js';
import { onBeforeUnmount, onMounted, onUnmounted, onActivated, onDeactivated, onUpdated } from 'vue';

export default {
  name: 'Messages',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.subscribeToEvents();
  },
  methods: {
    subscribeToEvents() {
      PubSub.subscribe('HERO_MESSAGES', this.subscriber);
    },
    subscriber(_, data) {
      this.messages.push(data);
    },
    clearMessages() {
      this.messages = [];
    },
  },
};
</script>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
let currentPath = '';
onMounted(() => {
  window.addEventListener('routeNavigate', handleNavigate);
});

onBeforeUnmount(() => {
  window.removeEventListener('routeNavigate', handleNavigate);
})

function handleNavigate({ detail }) {
  if (detail.app === 'review' && currentPath !== detail.path) {
    console.log('vào handleNavigate');
    currentPath = detail.path
    router.push(detail.path);
  }
}
</script>

<template>
  <div
    class="m-3 p-2 bg-gradient-to-br from-rose-100 to-teal-100 rounded shadow-lg"
  >
    <RouterView></RouterView>
  </div>
</template>
