<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let currentPath = '';

/**
 * Lắng nghe sự kiện thay đổi router
 */
onMounted(() => {
  window.addEventListener('routeNavigate', handleNavigate);
});
/**
 * Hủy lắng nghe sự kiện
 */
onBeforeUnmount(() => {
  window.removeEventListener('routeNavigate', handleNavigate);
});
/**
 * Chuyển router vào các màn hình
 * @param {*} param0
 */
function handleNavigate({ detail }) {
  if (detail.app === 'review' && currentPath !== detail.path) {
    currentPath = detail.path
    router.push(detail.path);
  }
}
</script>

<template>
  <router-view></router-view>
</template>
