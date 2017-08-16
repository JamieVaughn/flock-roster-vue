import Vue from 'vue'
import Vuex from 'vuex'

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
    user: {
      id: '00001',
      registeredStock: ['00001']
    }
  },
  mutations: {},
  actions: {},
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
    }
  }
})
