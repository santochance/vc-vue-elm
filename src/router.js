import Vue from 'vue';
import Router from 'vue-router';

import IndexPage from '@/views/Index/IndexPage'

Vue.use(Router);

// import TabPage from '@/components/TabPage'
// const tabPageWrapper = (tabKey, component) =>
//   ({
//     ...TabPage,
//     injectedTabKey: tabKey,
//     injectedComponent: component,
//   })
// const Index = tabPageWrapper('index', () => import(/* webpackChunkName: 'Index' */ '@/views/Index'))
// const Discover = tabPageWrapper('discover', () => import(/* webpackChunkName: "Discover" */'@/views/Discover'))
// const Order = tabPageWrapper('order', () => import(/* webpackChunkName: "Order" */ '@/views/Order'))
// const Profile = tabPageWrapper('profile', () => import(/* webpackChunkName: "Profile" */ '@/views/Profile'))

const Index = () => import(/* webpackChunkName: 'Index' */ '@/views/Index')
const Discover = () => import(/* webpackChunkName: "Discover" */'@/views/Discover')
const Order = () => import(/* webpackChunkName: "Order" */ '@/views/Order')
const Profile = () => import(/* webpackChunkName: "Profile" */ '@/views/Profile')

const IndexSelectAddress = () => import(/* webpackChunkName: 'IndexSelectAddress' */ '@/views/Index/IndexSelectAddress')
const IndexAddressEdit = () => import(/* webpackChunkName: 'IndexAddressEdit' */ '@/views/Index/IndexAddressEdit')

const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login')
const Shop = () => import(/* webpackChunkName: "ShopContainer" */ '@/views/ShopContainer')

const Checkout = () => import(/* webpackChunkName: "checkout" */ '@/views/Checkout')
const CheckoutConfirmOrder = () => import(/* webpackChunkName: "confirm-order" */ '@/views/Checkout/ConfirmOrder')
const CheckoutAddress = () => import(/* webpackChunkName: "checkout-address" */ '@/views/Checkout/CheckoutAddress')
const CheckoutAddressEdit = () => import(/* webpackChunkName: "checkout-address-edit" */ '@/views/Checkout/CheckoutAddressEdit')
const CheckoutRemark = () => import(/* webpackChunkName: "remark" */ '@/views/Checkout/Remark')

const ProfileInfo = () => import(/* webpackChunkName: "profile-info" */ '@/views/Profile/ProfileInfo')
const ProfileInfoMain = () => import(/* webpackChunkName: "profile-info-main" */ '@/views/Profile/ProfileInfoMain')
const ProfileInfoUsername = () => import(/* webpackChunkName: "profile-info-username" */ '@/views/Profile/ProfileInfoUsername')
const ProfileInfoPassword = () => import(/* webpackChunkName: "profile-info-password" */ '@/views/Profile/ProfileInfoPassword')
const ProfileRebindMobile = () => import(/* webpackChunkName: "profile-rebind-mobile" */ '@/views/Profile/ProfileRebindMobile')
const ProfileAddress = () => import(/* webpackChunkName: "profile-address" */ '@/views/Profile/ProfileAddress')
const ProfileAddressEdit = () => import(/* webpackChunkName: "profile-address-edit" */ '@/views/Profile/ProfileAddressEdit')

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