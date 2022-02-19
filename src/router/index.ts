import { createWebHashHistory, createRouter } from 'vue-router'
import Landing from '@/views/Landing.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
