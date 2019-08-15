<template>
  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">
      {{ orgName }}
    </p>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="#">X</a>
      </li>
      <li class="list-inline-item">
        <a href="#">Y</a>
      </li>
      <li class="list-inline-item">
        <a href="#">Z</a>
      </li>
    </ul>
  </footer>
</template>


<script>
export default {
  name: 'LayoutFooter',
  props: {
    orgName: {
      type: String,
      default: '',
    },
  },
}

</script>
