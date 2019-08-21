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
    commit('SET_BEERSSTATUS', 'pending')
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
    // router.currentRoute.query.token
    const postURL = router.currentRoute.query['x-craft-preview'] ? `${process.env.API_URL}?token=${router.currentRoute.query.token}` : process.env.API_URL
    await axios.post(postURL, {
      query: beerQuery,
      // params: { token: '7DJObxoCMsod30DodUeC0Ion3J_UX_Nh', 'x-craft-preview': 'y3oexr2RVq' },
    }).then((res) => res.data.data.entries)
      .then((beers) => {
        commit('SET_BEERS', beers)
        commit('SET_BEERSSTATUS', 'loaded')
      })

    //   this.beerList = res.data.data.entries

    //   this.dataLoaded = true
    //   this.dataLoading = false
      .catch((error) => {
        console.log('err', error)
        commit('SET_BEERSSTATUS', 'error')
        //   this.dataLoading = false
        //   this.dataError = error
      })
  },

}

const getters = {
  getBeers(state) {
    return state.beers
  },
  getBeersStatus(state) {
    return state.beersStatus
  },
  getBeer(state, slug) {
    return state.beers.find((beer) => beer.slug === slug)
  },
}

const state = {
  beers: {},
  beersStatus: '',
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
