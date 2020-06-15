declare module 'vue-plotly' {
  import Vue from 'vue'

  const Plotly: Vue.Component

  export { Plotly }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
