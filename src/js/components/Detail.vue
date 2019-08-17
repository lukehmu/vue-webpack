<template>
  <div class="container">
    {{ slug }}
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  computed: {
    // beerSlug() {
    //   // We will see what `params` is shortly
    //   return this.$route.params.slug
    // },
  },
}
</script>
