<script setup>
import { Pie } from 'vue-chartjs'

const props = defineProps({
  active: Number,
  inactive: Number
})

const chartData = {
  labels: ['Active', 'Inactive'],
  datasets: [
    {
      data: [props.active, props.inactive]
    }
  ]
}
</script>

<template>
  <div class="w-72 mx-auto">
    <Pie :data="chartData" />
  </div>
</template>