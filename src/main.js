import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEsl6GibR2vbmYYt1wcxve5d9qcEX04iQ',
      authDomain: 'flockroster.firebaseapp.com',
      databaseURL: 'https://flockroster.firebaseio.com',
      projectId: 'flockroster',
      storageBucket: ''
    })
  }
})
