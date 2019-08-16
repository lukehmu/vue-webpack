<template>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <a
        href="#"
        class="navbar-brand d-flex align-items-center"
      >{{ pageName }}</a>
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
