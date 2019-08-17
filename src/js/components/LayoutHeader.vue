<template>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <router-link
        to="/"
        class="navbar-brand d-flex align-items-center"
      >
        Vue Router with CraftQL
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    pageName: {
      type: String,
      default: '',
    },
  },
}
</script>
