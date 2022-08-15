import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/page/wel')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/admin/user/info'),
    }],
},
{
    path: '/contract',
    component: Layout,
    redirect: '/contract/detail',
    children: [{
        path: 'detail',
        name: '查看合同',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/admin/contract/detail'),
    }]
},
{
    path: '/apply',
    component: Layout,
    children: [{
        path: 'rentList/detail',
        name: '查看出租申请',
        component: () =>
            import('@/views/apply/rentList/detail'),
    }]
},
{
    path: '/listings/project',
    component: Layout,
    children: [{
        path: 'huxingList',
        name: '户型图',
        component: () =>
            import('@/views/listings/project/huxingList'),
    }]
},


]
