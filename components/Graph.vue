<template>
  <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script lang="ts">
import Vue from 'vue'
import { Plotly } from 'vue-plotly'
import SampleData from '~/sample_data/indexData_201.json'

export default Vue.extend({
  components: {
    Plotly
  },
  data() {
    return {
      data: [
        {
          x: SampleData[0].x, // [1, 2, 3, 4],
          y: SampleData[0].y, // [10, 15, 13, 17],
          type: 'scatter'
        }
      ],
      layout: {
        title: 'Cumulative Index Performance'
      }
    }
  }
})
</script>
