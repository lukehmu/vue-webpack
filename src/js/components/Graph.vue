<template>
  <div class="container">
    <div v-if="beersState == 'pending'">
      Loading...
    </div>
    <div v-if="beersState == 'error'">
      Error:<code> {{ dataError }}</code>
    </div>
    <b-button
      v-if="beersState == 'loaded'"
      @click="shuffle"
    >
      Shuffle
    </b-button>
    <!-- <b-button>
      Refresh data
    </b-button> -->
    <transition-group
      name="flip-list"
      tag="b-card-group"
      deck
    >
      <b-card
        v-for="beer in sharedState.state.beers"
        :key="beer.id"
        no-body
        style="max-width: 20rem;"
        :img-src="beer.image[0].url"
        img-alt="Image"
        img-top
      >
        <b-card-body>
          <b-card-title>{{ beer.title }}</b-card-title>
          <b-card-sub-title class="mb-2">
            ABV: {{ beer.percentage }}%
          </b-card-sub-title>
          <b-card-text>
            {{ beer.description }}
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item>Leaving this in for later</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <router-link :to="{ name: 'beer-detail', params: { beer, slug: beer.slug }}">
            Link text - Vue Router
          </router-link>
        </b-card-body>

        <b-card-footer>Added: {{ beer.dateCreated | stringToDate }}</b-card-footer>
      </b-card>
    </transition-group>
  </div>
</template>

<script>
import shuffle from 'lodash.shuffle'
// import { mapGetters } from 'vuex'

export default {
  name: 'Graph',
  filters: {
    stringToDate(value) {
      const valueInt = parseInt(value, 0)
      const entryDate = new Date(valueInt * 1000).toLocaleDateString()
      return `${entryDate}`
    },
  },
  props: {
  },
  data() {
    return {
      sharedState: this.$store,
      beerList: '',
    }
  },
  computed: {
    beers() {
      return this.$store.getters.getBeers
    },
    beersState() {
      return this.$store.getters.getBeersStatus
    },
  },
  watch: {
  },
  created() {
    this.$store.dispatch('loadBeer')
  },
  mounted() {
  },
  methods: {
    shuffle() {
      this.sharedState.state.beers = shuffle(this.sharedState.state.beers)
    },
  },
}
</script>
<style lang="scss">
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
