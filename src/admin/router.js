import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import("components/pages/admin-about.vue")
    },
    {
        path: '/works',
        component: () => import("components/pages/admin-works.vue")
    },
    {
        path: '/new',
        component: () => import("components/pages/admin-new.vue")
    },
    {
        path: '/login',
        component: () => import("components/pages/autorization.vue")
    }
];



export default new VueRouter({routes})
