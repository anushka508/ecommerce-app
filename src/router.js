import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import Order from './pages/Order.vue'
import Contact from './pages/Contact.vue'
import AboutPage from './pages/AboutPage.vue'
import Cart from './pages/Cart.vue'
import OrderList from './pages/OrderList.vue'


const routes = [
  { path: '/', component: Home },
  {path:"/about", component:AboutPage},
  { path: '/products', component: Products },
  { path: '/order/:id', component: Order, props: true },
  { path: '/contact', component: Contact },
  { path: '/cart', component: Cart },
  { path: '/orders', component: OrderList }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router