<template>
  <footer class="my-5 pt-5 text-muted text-center text-small">
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="https://lukehmu.github.io">Lukehmu's Github</a>
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
