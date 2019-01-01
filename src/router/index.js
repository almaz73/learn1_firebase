import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/pages/Index'
import Authorize from '@/pages/Authorize'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/enter',
            name: 'Authorize',
            component: Authorize
        }
    ]
})