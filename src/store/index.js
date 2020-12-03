import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    click (x, v) {
      x = document.getElementById('my')
      v = document.getElementById('hello')
      if (x.className === 'header_burger' && v.className === 'header_menu') {
        x.className += ' active'
        v.className += ' active'
      } else {
        x.className = 'header_burger'
        v.className = 'header_menu'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
