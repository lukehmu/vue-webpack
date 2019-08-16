<template>
  <div class="container">
    <b-card-group deck>
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
          <a
            href="#"
            class="card-link"
          >Card link</a>
        </b-card-body>

        <b-card-footer>Added: {{ beer.dateCreated | stringToDate }}</b-card-footer>
      </b-card>
    </b-card-group>
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
        const res = await axios.post('http://headless.test/api', {
          query: beerQuery,
        })
        this.beerList = res.data.data.entries
        console.log(this.beerList)
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
