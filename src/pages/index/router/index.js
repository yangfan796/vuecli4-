import Vue from 'vue'
import Router from 'vue-router'
 
import myIndex from '../views/myindex';
import myInfo from '../views/myInfo';
 
Vue.use(Router);
 
const routes = [
    {
        path: '/',
        name: 'myIndex',
        component: myIndex,
        meta: { requiresAuth: false },
    },
    {
        path: '/myInfo',
        name: 'myInfo',
        component: myInfo,
        meta: { requiresAuth: false },
    },
];
const router = new Router({
    mode: 'hash',
    routes,
});
 
export default router;