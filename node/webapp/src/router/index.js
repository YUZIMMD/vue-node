import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/home'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import A from '@/components/A'
import NOfind from '@/components/404'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            meta: {
                title: "首页"
            },
            components: {
                default: Home,
                Header: Header,
                Footer: Footer
            }
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/a',
            name: 'A',
            component: A
        },
        {
            path: '*',
            meta: {
                title: "对不起，没有找到这个页面"
            },
            components: {
                '404': NOfind
            }
        }
    ]
})