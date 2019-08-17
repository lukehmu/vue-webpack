<template>
  <div class="container">
    <div v-if="dataLoading">
      Loading...
    </div>
    <div v-if="dataError">
      Error...
    </div>
    <b-button
      v-if="dataLoaded"
      @click="shuffle"
    >
      Shuffle
    </b-button>
    <b-button
      @click="getBeer"
    >
      Refresh data
    </b-button>
    <transition-group
      v-if="dataLoaded"
      name="flip-list"
      tag="b-card-group"
      deck
    >
      <b-card
        v-for="beer in beerList"
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
          <!-- <b-link :to="detail">
            Link text - Bootstrap
          </b-link> -->
          <router-link :to="{ name: 'beer-detail', params: { slug: beer.slug }}">
            Link text - Vue Router
          </router-link>
        </b-card-body>

        <b-card-footer>Added: {{ beer.dateCreated | stringToDate }}</b-card-footer>
      </b-card>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'
import { shuffle } from 'lodash'
// public token
const bearerToken = process.env.BEARER_TOKEN

axios.defaults.headers.common = {
  Authorization: `Bearer ${bearerToken}`,
}
console.log(bearerToken)

export default {
  name: 'Graph',
  filters: {
    stringToDate(value) {
      const valueInt = parseInt(value, 0)
      const entryDate = new Date(valueInt * 1000).toLocaleDateString()
      return `${entryDate}`
    },
  },
  data() {
    return {
      beerList: '',
      dataLoading: false,
      dataLoaded: null,
      dataError: null,
    }
  },
  watch: {
    $route: 'getBeer',
  },
  created() {
    this.getBeer()
  },
  methods: {
    async getBeer() {
      this.dataLoading = true
      const beerQuery = `
         {
           entries(limit:5) {
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
      try {
        const res = await axios.post(process.env.API_URL, {
          query: beerQuery,
        })
        this.beerList = res.data.data.entries
        this.dataLoaded = true
        this.dataLoading = false
      } catch (e) {
        console.log('err', e)
        this.dataLoading = false
        this.dataError = true
      }
    },
    shuffle() {
      this.beerList = shuffle(this.beerList)
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
