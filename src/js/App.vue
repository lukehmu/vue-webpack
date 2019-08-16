<template>
  <div id="app">
    <LayoutHeader page-name="hello" />
    <Graph />
    <LayoutFooter org-name="footer company name" />
  </div>
</template>

<script>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Graph from './components/Graph.vue'


export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter,
    Graph,
  },
}
</script>

<style></style>
