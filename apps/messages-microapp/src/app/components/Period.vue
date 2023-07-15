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

<template>
  <div>Period work</div>
</template>
