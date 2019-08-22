<template>
  <v-container fluid>
    <v-item-group class="text-center">
      <v-progress-circular
        v-if="sharedState.state.beersStatus == 'pending'"
        indeterminate
        color="blue-grey"
      ></v-progress-circular>
      <div v-if="sharedState.state.beersStatus == 'error'">
        Error:<code> {{ dataError }}</code>
      </div>
      <v-btn
        v-if="sharedState.state.beersStatus == 'loaded'"
        @click="shuffle"
      >
        <v-icon>mdi-shuffle-variant</v-icon>
        Shuffle
      </v-btn>
      <v-btn
        v-if="sharedState.state.beersStatus == 'loaded'"
        @click="sort"
      >
        <v-icon>mdi-sort</v-icon>
        Sort by %
      </v-btn>
    </v-item-group>
    <v-item-group
      v-if="sharedState.state.beersStatus == 'loaded'"
    >
      <!-- <v-row> -->
      <transition-group
        tag="div"
        name="flip-list"
        width="100%"
        class="row"
      >
        <Card
          v-for="beer in sharedState.state.beers"
          :key="beer.id"
          :image-url="beer.image[0].url"
          :title="beer.title"
          :percentage="beer.percentage"
          :description="beer.description"
          :slug="beer.slug"
        >
        </Card>
      </transition-group>
      <!-- </v-row> -->
    </v-item-group>
  </v-container>
</template>

<script>
import shuffle from 'lodash.shuffle'
import { VContainer } from 'vuetify/lib'
import Card from './Card.vue'

export default {
  name: 'CardList',
  components: {
    Card,
    VContainer,
  },
  props: {
  },
  data() {
    return {
      sharedState: this.$store,
      sortPercentageAsc: false,
    }
  },
  computed: {
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
    sort() {
      this.sortPercentageAsc = !this.sortPercentageAsc
      this.sharedState.state.beers.sort((a, b) => {
        const x = a.percentage
        const y = b.percentage
        return (this.sortPercentageAsc ? x > y : x < y)
      })
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
