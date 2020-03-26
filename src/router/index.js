import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import FreeClinic from '../views/freeClinic.vue'
import Inquiry from '../views/inquiry.vue'
//import DoctorDetails from '../views/doctorDetails.vue'
import OrderDetails from '../views/orderDetails.vue'
import Pay from '../views/pay.vue'
import OrderDetailsPay from '../views/orderDetailsPay.vue'
//import Description from '../views/description.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/freeClinic',
    name: 'freeClinic',
    component: FreeClinic
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    component: Inquiry
  },
  {
    path: '/doctorDetails',
    name: 'doctorDetails',
    //component:DoctorDetails
      component: () => import( '../views/doctorDetails.vue')
  },
  {
    path: '/description',
    name: 'description',
    //component:Description
      component: () => import('../views/description.vue')
    },
    {
    path:'/orderDetails',
    name:'orderDetails',
    component:OrderDetails
    },
    {
      path:'/pay',
      name:'pay',
      component:Pay
    },
    {
      path:'/orderDetailsPay',
      name:'orderDetailsPay',
      component:OrderDetailsPay
    },
  {
    path: '/about',
    name: 'About',
    // component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
