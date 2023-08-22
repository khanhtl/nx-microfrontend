<script setup lang="ts">
import { ref } from 'vue';
import { useProductService } from '../../services/use-product-service';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();

const product=ref(await useProductService().byId(route.params.id));
const router = useRouter()

function backToList() {
  (window as any).name= `targets`;
  router.push({name: 'targets'})
}
</script>

<template>
  <div>
    <button @click="backToList">Back to list</button>
    <br>
      <img width="300" height="200" :src="product.image" />
      <h2>{{ product.title }}</h2>
      <h3>{{ product.category }}</h3>
      <p>{{ product.description }}</p>
      <br />
      <p>${{ product.price }}</p>
  </div>
</template>
