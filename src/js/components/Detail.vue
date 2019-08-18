<template>
  <div class="container">
    <b-button
      @click="getBeer"
    >
      Get beer
    </b-button>
    <b-card
      v-if="beerItem.title"
      no-body
      style="max-width: 20rem;"
      :img-src="beerItem.image[0].url"
      img-alt="Image"
      img-top
    >
      <b-card-body>
        <b-card-title>{{ beerItem.title }}</b-card-title>
        <b-card-sub-title class="mb-2">
          ABV: {{ beerItem.percentage }}%
        </b-card-sub-title>
        <b-card-text>
          {{ beerItem.description }}
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Leaving this in for later</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <!-- <b-link :to="detail">
            Link text - Bootstrap
          </b-link> -->
        <router-link :to="{ name: 'beer-detail', params: { beerItem, slug: beerItem.slug }}">
          Link text - Vue Router
        </router-link>
      </b-card-body>

      <b-card-footer>Added: {{ beerItem.dateCreated }}</b-card-footer>
    </b-card>
    <div
      v-else
      class="container"
    >
      {{ beer.message }}
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
  },
  created() {
    if (this.beer.message) {
      this.getBeer()
    }
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
