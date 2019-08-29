import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import router from '../router'

Vue.use(Vuex)
// public token
const bearerToken = process.env.BEARER_TOKEN

axios.defaults.headers.common = {
  Authorization: `Bearer ${bearerToken}`,
}

const mutations = {
  SET_BEERS: (state, beers) => {
    state.beers = beers
  },
  SET_BEERSSTATUS: (state, beersStatus) => {
    state.beersStatus = beersStatus
  },
}

const actions = {
  async loadBeer({ commit }) {
    await commit('SET_BEERSSTATUS', 'pending')
    const beerQuery = `
           {
              entries (section: "beer"){
                title
                id
                slug
                uri
                title
                dateCreated @formatDateTime (format: "d/m/Y")
                ... on beer_beer_Entry {
                  percentage
                  image { url }
                }	
              }
            }
          `
    const postURL = router.currentRoute.query['x-craft-preview'] ? `${process.env.API_URL}?token=${router.currentRoute.query.token}` : process.env.API_URL
    // if we already have the data - skip fetching it again
    if (!this.state.beers) {
      console.log('Fetching from API')
      await axios.post(postURL, {
        query: beerQuery,
      }).then((res) => res.data.data.entries)
        .then((beers) => {
          commit('SET_BEERS', beers)
          commit('SET_BEERSSTATUS', 'loaded')
        })
        .catch((error) => {
          console.log('err', error)
          commit('SET_BEERSSTATUS', 'error')
        })
    } else {
      console.log('Already fetched from API')
      commit('SET_BEERSSTATUS', 'loaded')
    }
  },

}

const getters = {
  getBeers: (state) => state.beers,
  getBeersStatus: (state) => state.beersStatus,
  getBeerBySlug: (state) => (slug) => state.beers.find((beers) => beers.slug === slug),
}

const state = {
  beers: null,
  beersStatus: '',
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
