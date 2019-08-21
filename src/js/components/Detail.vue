<template>
  <div class="container">
    <b-card
      v-if="beersState == 'loaded'"
      no-body
      style="max-width: 20rem;"
      :img-src="singleBeer.image[0].url"
      img-alt="Image"
      img-top
    >
      <b-card-body>
        <b-card-title>{{ singleBeer.title }}</b-card-title>
        <b-card-sub-title class="mb-2">
          ABV: {{ singleBeer.percentage }}%
        </b-card-sub-title>
        <b-card-text>
          {{ singleBeer.description }}
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Leaving this in for later</b-list-group-item>
      </b-list-group>
      <b-list-group flush>
        <b-list-group-item>Leaving this in for later</b-list-group-item>
      </b-list-group>

      <b-card-footer>Added: {{ singleBeer.dateCreated }}</b-card-footer>
    </b-card>
    <div
      v-else
      class="container"
    >
      <!-- {{ beer.message }} -->
    </div>
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
    craftToken: {
      type: String,
      default: '',
    },
    craftPreview: {
      type: String,
      default: '',
    },
    beer: {
      type: Object,
      default() {
        return { message: 'No props passed from CardList' }
      },
    },
  },
  data() {
    return {
      beerResult: 'No need to go to the API - already have props from CardList',
      dataLoaded: null,
      dataLoading: false,
      dataError: null,
    }
  },
  computed: {
    singleBeer() {
      return this.$store.getters.getBeers.find((beer) => beer.slug === this.slug)
    },
    beersState() {
      return this.$store.getters.getBeersStatus
    },
  },
  created() {
    this.$store.dispatch('loadBeer')
  },
  methods: {

  },
}
</script>
