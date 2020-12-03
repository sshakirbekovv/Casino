import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Output from '../components/Output.vue'
import Roulette from '../components/Roulette.vue'
import Menu from '../components/Menu.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/output', name: 'output', component: Output },
  { path: '/roulette', name: 'roulette', component: Roulette },
  { path: '/menu', name: 'menu', component: Menu }
]
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
