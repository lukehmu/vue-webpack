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
    // $route: 'getBeers',
  },
  created() {
    // this.getBeers()
    this.$store.dispatch('loadBeer')
  },
  mounted() {
    this.beerList = this.beers()
  },
  methods: {
    // async getBeers() {
    //   this.dataLoading = true
    //   const beerQuery = `
    //      {
    //        entries(limit:5) {
    //          ...on Beer {
    //            id
    //            slug
    //            uri
    //            title
    //            description
    //            dateCreated
    //            percentage
    //            image { url }
    //          }
    //        }
    //      }
    //     `
    //   await axios.post(process.env.API_URL, {
    //     query: beerQuery,
    //   }).then((res) => {
    //     this.beerList = res.data.data.entries
    //     this.dataLoaded = true
    //     this.dataLoading = false
    //   }).catch((error) => {
    //     console.log('err', error)
    //     this.dataLoading = false
    //     this.dataError = error
    //   })
    // },
    shuffle() {
      this.sharedState.state.beers = shuffle(this.sharedState.state.beers)
    },
  },
}
</script>
<style>
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
