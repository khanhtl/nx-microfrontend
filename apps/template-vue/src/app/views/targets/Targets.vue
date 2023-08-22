<template>
  <div class="products gap-8">
    <div v-for="item in products">
      <img :src="item.image" alt="" width="200" height="100">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
async function list() {
    const response = await axios.get(
      'https://fakestoreapi.com/products',
    )
    return response.data
  }
const products=ref(await list());
</script>
