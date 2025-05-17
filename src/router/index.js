import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Login from '@/views/Login.vue'
import Saralangan from '@/views/Saralangan.vue'
import Savat from '@/views/savat.vue'
import TopshirishPunk from '@/views/TopshirishPunk.vue'
import Sotuvchi from '@/views/Sotuvchi.vue'
import RegisterSotuv from '@/views/RegisterSotuv.vue'
import KirishSotuv from '@/views/KirishSotuv.vue'
import Fleshka from '@/views/Fleshka.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/saralangan',
      name: 'saralangan',
      component: Saralangan
    },
    {
      path: '/savat',
      name: 'savat',
      component: Savat
    },
    {
      path: '/punkit',
      name: 'punkit',
      component: TopshirishPunk
    },
    {
      path: '/sotuvchi',
      name: 'sotuvchi',
      component: Sotuvchi
    },
    {
      path: '/registersotuv',
      name: 'registersotuv',
      component: RegisterSotuv
    },
    {
      path: '/kirishsotuv',
      name: 'kirishsotuv',
      component: KirishSotuv
    },
    {
      path: '/fleshka',
      name: 'fleshka',
      component: Fleshka
    }
  ],
})

export default router


// Router Linklar
// <router-link to="/">Home</router-link>
