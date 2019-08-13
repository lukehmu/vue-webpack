<template>
  <div id="app">
    <LayoutHeader pageName="hello" />
    <HelloWorld msg="Body here" />
    <LayoutFooter orgName="footer company name"/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import LayoutHeader from './components/LayoutHeader.vue'
  import LayoutFooter from './components/LayoutFooter.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      LayoutHeader,
      LayoutFooter
    }
  }

</script>

<style>

</style>
