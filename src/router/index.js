import Vue from 'vue'
import VueRouter from 'vue-router'
const Me  = () => import('../view/Me/Me')
const Cate = () => import('../view/Cate/Cate')
const Menu = () => import('../view/Menu/Menu')
const Home = () => import('../view/Home/Home')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cate',
        component:Cate
    },
    {
        path:'/menu',
        component:Menu
    },
    {
        path:'/me',
        component:Me
    }
]
const router = new VueRouter({
    routes
})
export default router