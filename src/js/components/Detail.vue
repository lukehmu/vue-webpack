<template>
  <v-container fluid>
    <v-item-group>
      <div v-if="beersState == 'pending'">
        Loading...
      </div>
      <div v-if="beersState == 'error'">
        Error:<code> {{ dataError }}</code>
      </div>
    </v-item-group>
    <v-item-group>
      <v-container>
        <v-row>
          <Card
            :image-url="singleBeer.image[0].url"
            :title="singleBeer.title"
            :percentage="singleBeer.percentage"
            :description="singleBeer.description"
            :date-created="singleBeer.dateCreated"
          >
          </Card>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</template>
<script>
import Card from './Card.vue'

export default {
  name: 'Detail',
  components: {
    Card,
  },
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
