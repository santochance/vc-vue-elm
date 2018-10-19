import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
import ShopContainer from './views/ShopContainer.vue'


Vue.use(Router);

import TabPage from '@/components/TabPage'
const tabPageWrapper = (tabKey, component) =>
  ({
    ...TabPage,
    injectedTabKey: tabKey,
    injectedComponent: component,
  })

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      redirect: '/shop',
    },
    {
      path: '/shop',
      // component: () => import(/* webpackChunkName: "shop" */ '@/views/Shop/Shop'),
      component: ShopContainer,
    },
    {
      path: '/checkout',
      component: () => import(/* webpackChunkName: "checkout" */ '@/views/Checkout'),
      children: [{
        path: '',
        component: () => import(/* webpackChunkName: "confirm-order" */ '@/views/Checkout/ConfirmOrder'),
      }, {
        path: 'address',
        component: () => import(/* webpackChunkName: "address" */ '@/views/Checkout/Address'),
      }, {        
        path: 'address/edit',
        component: () => import(/* webpackChunkName: "address" */ '@/views/Checkout/AddressEdit'),
      }, {        
        path: 'address/create',
        component: () => import(/* webpackChunkName: "address" */ '@/views/Checkout/AddressEdit'),
      }, {
        path: 'remark',
        component: () => import(/* webpackChunkName: "remark" */ '@/views/Checkout/Remark'),
      }]
    },
    /* tabbar */
    {
      path: '/index',
      component: tabPageWrapper('index', () => import(/* webpackChunkName: "index" */ '@/views/Index')),
    },
    {
      path: '/discover',
      component: tabPageWrapper('discover', () => import(/* webpackChunkName: "discover" */ '@/views/Discover')),
    },
    {
      path: '/order',
      component: tabPageWrapper('order', () => import(/* webpackChunkName: "order" */ '@/views/Order')),
    },
    {
      path: '/profile',
      component: tabPageWrapper('profile', () => import(/* webpackChunkName: "profile" */ '@/views/Profile')),
    },
    {
      path: '/profile/info',
      component: () => import(/* webpackChunkName: "profile-info" */ '@/views/Profile/ProfileInfo'),
      children: [{
        path: '',
        component: () => import(/* webpackChunkName: "profile-info-main" */ '@/views/Profile/ProfileInfoMain'),
      }, {
        path: 'username',
        component: () => import(/* webpackChunkName: "profile-info-username" */ '@/views/Profile/ProfileInfoUsername')
      }, {
        path: 'password',
        component: () => import(/* webpackChunkName: "profile-info-password" */ '@/views/Profile/ProfileInfoPassword')
      }],
    }
  ],
});
