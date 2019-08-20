<template>
  <div id="app">
    <LayoutHeader page-name="Vue routing with CraftQL" />
    <transition
      name="fade"
      appear
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <LayoutFooter
      org-name="
footer company name"
    />
  </div>
</template>

<script>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter,
  },
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
