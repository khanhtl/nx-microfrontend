<template>
  <div style="height: calc(100vh - 56px); overflow: auto">
    <canvas class="chart" id="line"></canvas>
    <canvas class="chart" id="bar"></canvas>
    <canvas class="chart" id="doughnut"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { initChartJs } from '../../../../../../libs/core/src/lib/chartjs/init';
const isLoading=ref(true);
onMounted(() => {
    initChartJs(document.querySelector('#doughnut'), 'doughnut')
    initChartJs(document.querySelector('#bar'), 'bar')
    initChartJs(document.querySelector('#line'), 'line')
});
</script>
