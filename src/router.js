import Vue from 'vue';
import Router from 'vue-router';

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
    /* tabbar */
    {
      path: '/',
      component: tabPageWrapper('index', () => import(/* webpackChunkName: "index" */ '@/views/Index')),
    },
    {
      path: '/select-address',
      component: () => import(/* webpackChunkName: "index" */ '@/views/SelectAddress')
    },
    {
      path: '/discover',
      component: tabPageWrapper('discover', () => import(/* webpackChunkName: "discover" */ '@/views/Discover')),
    },
    {
      path: '/order',
      component: tabPageWrapper('order', () => import(/* webpackChunkName: "order" */ '@/views/Order')),
    },

    /* shop */
    {
      path: '/shop',
      // component: () => import(/* webpackChunkName: "shop" */ '@/views/Shop/Shop'),
      component: ShopContainer,
    },

    /* checkout */
    {
      path: '/checkout',
      component: () => import(/* webpackChunkName: "checkout" */ '@/views/Checkout'),
      children: [{
        path: '',
        component: () => import(/* webpackChunkName: "confirm-order" */ '@/views/Checkout/ConfirmOrder'),
      }, {
        path: 'address',
        component: () => import(/* webpackChunkName: "checkout-address" */ '@/views/Checkout/CheckoutAddress'),
      }, {
        path: 'address/(edit|create)',
        component: () => import(/* webpackChunkName: "checkout-address-edit" */ '@/views/Checkout/CheckoutAddressEdit'),
      }, {
        path: 'remark',
        component: () => import(/* webpackChunkName: "remark" */ '@/views/Checkout/Remark'),
      }]
    },

    /* profile */
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
        component: () => import(/* webpackChunkName: "profile-info-username" */ '@/views/Profile/ProfileInfoUsername'),
      }, {
        path: 'password',
        component: () => import(/* webpackChunkName: "profile-info-password" */ '@/views/Profile/ProfileInfoPassword'),
      }],
    },
    {
      path: '/profile/rebind',
      component: () => import(/* webpackChunkName: "profile-rebind-mobile" */ '@/views/Profile/ProfileRebindMobile'),
    },
    {
      path: '/profile/address',
      component: () => import(/* webpackChunkName: "profile-address" */ '@/views/Profile/ProfileAddress'),
    },
    {
      path: '/profile/address/(edit|create)',
      component: () => import(/* webpackChunkName: "profile-address-edit" */ '@/views/Profile/ProfileAddressEdit'),
    },

    /* login */
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
    }
  ],
});
