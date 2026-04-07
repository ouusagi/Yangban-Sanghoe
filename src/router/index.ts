import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/product-list', name:'ProductList', component: ()=> import('../views/ProductList.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return { top: 0 }
  }
})

export default router