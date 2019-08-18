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

      <b-card-body>
        <!-- <b-link :to="detail">
            Link text - Bootstrap
          </b-link> -->
        <router-link :to="{ name: 'beer-detail', params: { singleBeer, slug: singleBeer.slug }}">
          Link text - Vue Router
        </router-link>
      </b-card-body>

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
import axios from 'axios'
// public token
const bearerToken = process.env.BEARER_TOKEN

axios.defaults.headers.common = {
  Authorization: `Bearer ${bearerToken}`,
}
export default {
  name: 'Detail',
  props: {
    slug: {
      type: String,
      default: '',
    },
    beer: {
      type: Object,
      default() {
        return { message: 'No props passed from Graph' }
      },
    },
  },
  data() {
    return {
      beerResult: 'No need to go to the API - already have props from Graph',
      dataLoaded: null,
      dataLoading: false,
      dataError: null,
    }
  },
  computed: {
    beerItem() {
      if (this.beer.message) {
        return this.beerResult
      } if (this.beer.title) {
        return this.beer
      }
      console.log(this.beer.title)
      return 'uh oh'
    },
    singleBeer() {
      return this.$store.getters.getBeers.find((beer) => beer.slug === this.slug)
    },
    beersState() {
      return this.$store.getters.getBeersStatus
    },
  },
  created() {
    if (this.beer.message) {
      this.getBeer()
    }
    this.$store.dispatch('loadBeer')
  },
  methods: {
    async getBeer() {
      this.dataLoading = true
      const beerQuery = `
         {
           entries(slug: "${this.slug}" limit:1) {
             ...on Beer {
               id
               slug
               uri
               title
               description
               dateCreated
               percentage
               image { url }
             }
           }
         }
        `

      await axios.post(process.env.API_URL, {
        query: beerQuery,
      }).then((res) => {
        const [singleBeer] = res.data.data.entries
        this.beerResult = singleBeer
        this.dataLoaded = true
        this.dataLoading = false
      }).catch((error) => {
        console.log(error.message)
        this.dataLoading = false
        this.dataError = error
      })
    },
  },
}
</script>
