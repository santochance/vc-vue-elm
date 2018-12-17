import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Discover from '@/views/Discover'
import Order from '@/views/Order'
import Profile from '@/views/Profile'

const Index = () => import(/* webpackChunkName: 'Index' */ '@/views/Index')
// const Discover = () => import(/* webpackChunkName: "Discover" */'@/views/Discover')
// const Order = () => import(/* webpackChunkName: "Order" */ '@/views/Order')
// const Profile = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile')

const IndexSelectAddress = () => import(/* webpackChunkName: 'Index' */ '@/views/Index/IndexSelectAddress')
const IndexAddressEdit = () => import(/* webpackChunkName: 'Index' */ '@/views/Index/IndexAddressEdit')

const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login')
const Shop = () => import(/* webpackChunkName: "ShopContainer" */ '@/views/ShopContainer')

const Checkout = () => import(/* webpackChunkName: "Checkout" */ '@/views/Checkout')
const CheckoutConfirmOrder = () => import(/* webpackChunkName: "Checkout" */ '@/views/Checkout/ConfirmOrder')
const CheckoutAddress = () => import(/* webpackChunkName: "Checkout" */ '@/views/Checkout/CheckoutAddress')
const CheckoutAddressEdit = () => import(/* webpackChunkName: "Checkout" */ '@/views/Checkout/CheckoutAddressEdit')
const CheckoutRemark = () => import(/* webpackChunkName: "Checkout" */ '@/views/Checkout/Remark')

const ProfileInfo = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileInfo')
const ProfileInfoMain = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileInfoMain')
const ProfileInfoUsername = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileInfoUsername')
const ProfileInfoPassword = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileInfoPassword')
const ProfileRebindMobile = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileRebindMobile')
const ProfileAddress = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileAddress')
const ProfileAddressEdit = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/ProfileAddressEdit')

const router = new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '',
      component: Index,
    }]
  }, {
    path: '/index/address',
    component: IndexSelectAddress,
  }, {
    path: '/index/create',
    component: IndexAddressEdit,
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: 'address',
      component: IndexSelectAddress,
    }, {
      path: 'address/create',
      component: IndexAddressEdit,
    }]
  }, {
    path: '/discover',
    component: Discover,
  }, {
    path: '/order',
    component: Order,
  }, {
    path: '/profile',
    component: Profile,
  }, {
    path: '/profile/info',
    component: ProfileInfo,
    children: [{
      path: '',
      component: ProfileInfoMain,
    }, {
      path: 'username',
      component: ProfileInfoUsername,
    }, {
      path: 'password',
      component: ProfileInfoPassword,
    }]
  }, {
    path: '/profile/rebind',
    component: ProfileRebindMobile,
  }, {
    path: '/profile/address',
    component: ProfileAddress,
  }, {
    path: '/profile/address/(edit|create)',
    component: ProfileAddressEdit,
  }, {
    path: '/login',
    component: Login,
  }, {
    path: '/shop',
    component: Shop,
  }, {
    path: '/checkout',
    component: Checkout,
    children: [{
      path: '',
      component: CheckoutConfirmOrder,
    }, {
      path: 'address',
      component: CheckoutAddress,
    }, {
      path: 'address/(edit|create)',
      component: CheckoutAddressEdit,
    }, {
      path: 'remark',
      component: CheckoutRemark,
    }]
  }]
})

export default router