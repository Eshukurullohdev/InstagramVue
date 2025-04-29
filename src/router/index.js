import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Login from '@/views/Login.vue'

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
    }
   
  ],
})

export default router


// Router Linklar
// <router-link to="/">Home</router-link>
