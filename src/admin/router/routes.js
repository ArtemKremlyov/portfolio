export default [
    {
        path: '/',
        component: () => import("../components/pages/admin-about.vue"),
        meta: {
            title: "Блок «Обо мне»"
        }
    },
    {
        path: '/works',
        component: () => import("../components/pages/admin-works.vue"),
        meta: {
            title: "Блок «Работы»"
        }
    },
    {
        path: '/new',
        component: () => import("../components/pages/admin-new.vue"),
        meta: {
            title: "Блок «Отзывы»"
        }
    },

    {
        path: '/login',
        component: () => import("../components/pages/authorization.vue"),
        meta: {
            public: true
        }
    }
];


