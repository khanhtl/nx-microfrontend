<template>
  <div class="products gap-8">
    <div v-for="item in products">
      <img @click="showDetail(item.id)" :src="item.image" alt="" width="200" height="100">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useProductService } from '../../services/use-product-service'
import { useRoute, useRouter } from 'vue-router';
const productService=useProductService();
const products=ref(await productService.list());
const router = useRouter()

function showDetail(id: any) {
  (window as any).name= `targets_detail`;
  router.push({name: 'targets_detail', params: {id}})
}
</script>
