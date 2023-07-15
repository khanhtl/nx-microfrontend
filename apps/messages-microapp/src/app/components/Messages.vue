<script>
import PubSub from 'pubsub-js';

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
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';
const route = useRoute();
const router = useRouter();

watch(
  route,
  (val) => {
    console.log(route);
  },
  {
    deep: true,
    immediate: true,
  }
);
watch(
  router,
  (val) => {
    console.log(router);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <div
    class="m-3 p-2 bg-gradient-to-br from-rose-100 to-teal-100 rounded shadow-lg"
  >
    <RouterView></RouterView>
  </div>
</template>
