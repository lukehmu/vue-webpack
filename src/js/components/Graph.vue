<template>
  <div class="container">
    <h1>Got some beer right here</h1>
    <div class="row">
      <button
        type="button"
        class="btn btn-info"
        @click="getBeer"
      >
        Refresh Beer
      </button>
    </div>
    <div>
      <div class="card-group">
        <div
          v-for="beer in beerList"
          :key="beer.id"
          class="card"
        >
          <img
            class="card-img-top"
            :src="beer.image[0].url"
            alt="Card image cap"
          >
          <div class="card-body">
            <h2 class="card-title">
              {{ beer.title }}
            </h2>
            <p class="card-subtitle mb-2 text-muted">
              ABV {{ beer.percentage }}%
            </p>
            <p class="card-text">
              {{ beer.description }}
            </p>
            <a
              :href="beer.uri"
              class="card-link"
            >Detail page [WIP]</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">Added: {{ beer.dateCreated | stringToDate() }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// public token
const bearerToken = 'RgMzQoWn2IWzkoimXi-qBmbEbDEkkLt0vr4NOQra9VPOpx1knS1Mb06JA5ixf5Mr'

axios.defaults.headers.common = {
  Authorization: `Bearer ${bearerToken}`,
}

const moment = require('moment')

export default {
  name: 'Graph',
  filters: {
    stringToDate(value) {
      const valueInt = parseInt(value, 0)
      // console.log(moment.unix(valueInt, "MM-DD-YYYY"))
      return `${moment.unix(valueInt).format('MM-DD-YYYY')}`
    },
  },
  data() {
    return {
      beerList: '',
    }
  },
  created() {
    this.getBeer()
  },
  methods: {
    async getBeer() {
      const beerQuery = `
         {
           entries(limit:5) {
             ...on Beer {
               id
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
        const res = await axios.post(
          'http://headless.test/api', {
            query: beerQuery,
          },
        )
        this.beerList = res.data.data.entries
      } catch (e) {
        console.log('err', e)
      }
    },
  },
}

</script>
<style scoped>
  /* .card-img-top {
  width: 33%
} */

</style>
