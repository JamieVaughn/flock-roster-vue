import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedStock: [
      {
        value: false,
        photo: '',
        thumb: 'https://yt3.ggpht.com/-jP6v09aZE60/AAAAAAAAAAI/AAAAAAAAAAA/bjlJ7KExLQk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
        name: 'Rona',
        id: 1001,
        weight: 120,
        dob: '05-10-2012',
        condition: 4,
        famacha: 4,
        notes: 'Black, Hair'
      },
      {
        value: false,
        photo: '',
        thumb: 'https://yt3.ggpht.com/-jP6v09aZE60/AAAAAAAAAAI/AAAAAAAAAAA/bjlJ7KExLQk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
        name: 'Eige',
        id: 1103,
        weight: 131,
        dob: '05-15-2012',
        condition: 4,
        famacha: 3,
        notes: 'BBX'
      },
      {
        value: false,
        photo: '',
        thumb: 'https://yt3.ggpht.com/-jP6v09aZE60/AAAAAAAAAAI/AAAAAAAAAAA/bjlJ7KExLQk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
        name: 'Freckles',
        id: 1104,
        weight: 119,
        dob: '05-18-2012',
        condition: 3,
        famacha: 3,
        notes: 'BBX'
      },
      {
        value: false,
        photo: '',
        thumb: 'https://yt3.ggpht.com/-jP6v09aZE60/AAAAAAAAAAI/AAAAAAAAAAA/bjlJ7KExLQk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
        name: 'Nada',
        id: 1002,
        weight: 86,
        dob: '05-11-2012',
        condition: 2,
        famacha: 3,
        notes: 'BBX'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createEntry (state, payload) {
      state.loadedStock.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createEntry ({commit}, payload) {
      const stock = {
        name: payload.name,
        id: payload.id,
        thumb: payload.thumb,
        weight: payload.weight,
        dob: payload.dob,
        condition: payload.condition,
        famacha: payload.famacha,
        sex: payload.sex,
        notes: payload.notes
      }
      // store to firebase
      commit('createEntry', stock)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                id: user.uid,
                registeredStock: []
              }
              commit('setUser', newUser)
            }
        )
        .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
            user => {
              const newUser = {
                id: user.uid,
                registeredStock: []
              }
              commit('setUser', newUser)
            }
        )
        .catch(
            error => {
              console.log(error)
            }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedStock (state) {
      return state.loadedStock.sort((stockA, stockB) => {
        return stockA.weight > stockB.weight
      })
    },
    loadedIndividual (state) {
      return (stockid) => {
        return state.loadedStock.find((stock) => {
          return stock.id === stockid
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
