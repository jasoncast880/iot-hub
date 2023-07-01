//index.js for VUE ROUTER
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LiveStreamView from '../views/LiveStreamView.vue'
import LoginForm from '../views/LoginForm.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginForm
  },
  {
    path: '/doc-rsrc',
    name: 'docs',
    component: HomeView
  },
  {
    path: '/camera-test',
    name: 'camera-test',
    component: () => import('../views/LiveStreamView.vue'),
    beforeEnter(to,from,next) {
      if(store.state.allowAccess === true) {
        console.log("ALLOW ACCESS");
        next();
      } else {
        next({name:"EnterCode"});
        alert("Please enter the secret code");
      }
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default router
