<template>
  <div style="height: calc(100vh - 56px); overflow: auto;">
    <canvas id="line"></canvas>
    <canvas id="bar"></canvas>
    <canvas id="doughnut"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { initChartJs } from '../../../../../../libs/core/src/lib/chartjs/init';

onMounted(() => {
  initChartJs(document.querySelector('#doughnut'), 'doughnut')
  initChartJs(document.querySelector('#bar'), 'bar')
  initChartJs(document.querySelector('#line'), 'line')
});
</script>
