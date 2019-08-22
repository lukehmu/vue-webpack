<template>
  <v-container fluid>
    <v-item-group class="text-center">
      <v-progress-circular
        v-if="beersStatus == 'pending'"
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
      <div v-if="beersStatus == 'error'">
        Error:<code> {{ dataError }}</code>
      </div>
    </v-item-group>
    <v-item-group v-if="beersStatus == 'loaded'">
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
  },
  data() {
    return {
      dataLoaded: null,
      dataLoading: false,
      dataError: null,
    }
  },
  computed: {
    singleBeer() {
      return this.$store.getters.getBeerBySlug(this.slug)
    },
    beersStatus() {
      return this.$store.getters.getBeersStatus
    },
  },
  created() {
    this.$store.dispatch('loadBeer')
  },
  mounted() {

  },
  methods: {

  },
}
</script>
