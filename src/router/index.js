import Vue from 'vue'
import VueRouter from 'vue-router'
const Find = () => import('../view/Find/Find')
const Video = () => import('../view/Video/Video')
const Me  = () => import('../view/Me/Me')
const YunCun = () => import('../view/YunCun/YunCun')
const Account = () => import('../view/Account/Account')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/find'
    },
    {
        path:'/find',
        component:Find
    },
    {
        path:'/video',
        component:Video
    },
    {
        path:'/me',
        component:Me
    },
    {
        path:'/yuncun',
        component:YunCun
    },
    {
        path:'/account',
        component:Account
    }
   
]
const router = new VueRouter({
    routes
})
export default router