import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import FreeClinic from '../views/freeClinic.vue'
import Inquiry from '../views/inquiry.vue'
import DoctorDetails from '../views/doctorDetails.vue'
import OrderDetails from '../views/orderDetails.vue'
import Pay from '../views/pay.vue'
import OrderDetailsPay from '../views/orderDetailsPay.vue'
import Description from '../views/description.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home
  },
  {
    path: '/freeClinic',
    name: '义诊专区',
    component: FreeClinic
  },
  {
    path: '/inquiry',
    name: '普通问诊',
    component: Inquiry
  },
  {
    path: '/doctorDetails',
    name: '医生详情',
    component:DoctorDetails
  },
  {
    path: '/description',
    name: '病情描述',
    component:Description
    },
    {
    path:'/orderDetails',
    name:'订单详情',
    component:OrderDetails
    },
    {
      path:'/pay',
      name:'支付方式',
      component:Pay
    },
    {
      path:'/orderDetailsPay',
      name:'订单详情已付',
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
