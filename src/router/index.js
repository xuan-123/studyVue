import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=> import('../components/Login/Login')
const Find = () => import('../view/Find/Find')
const Video = () => import('../view/Video/Video')
const Me  = () => import('../view/Me/Me')
const YunCun = () => import('../view/YunCun/YunCun')
const Account = () => import('../view/Account/Account')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/login'
    },
    {
        path:'/login',
        component:Login
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
//路由守卫，不登录不能使用本产品。
router.beforeEach((to,from,next)=>{
    if(to.path==='/login'||to.path==='/find'){
        return next()
    }
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) {
        alert('您还没有登录,请登录后使用去音乐')
        return next('/login')
    }
    next()
})
export default router