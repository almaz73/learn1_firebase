import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index'
import InnerPage from '@/pages/InnerPage'
import Authorize from '@/pages/Authorize'
import Registration from '@/pages/Registration'
import store from '../store';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/innerpage',
            name: 'InnerPage',
            component: InnerPage,
            tobeforeEnter(to, from, next) {
                store.getters.isLogged ? next() : next('/authorization')
            }
        },
        {
            path: '/authorization',
            name: 'Authorize',
            component: Authorize
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        }
    ]
})