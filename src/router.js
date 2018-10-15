import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import ShopContainer from './views/ShopContainer.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
  ],
});
