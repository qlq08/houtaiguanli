import Vue from "vue"
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import Main from '@/views/Main.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/', component: Main, redirect: '/home',
      children: [
        { path: 'home', component: Home },
        { path: 'user', component: User }
      ]
    },

  ]
})
export default router