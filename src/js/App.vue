<template>
  <div id="app">
    <LayoutHeader pageName="hello"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LayoutHeader from './components/LayoutHeader.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    LayoutHeader
  }
}
</script>

<style>

</style>
