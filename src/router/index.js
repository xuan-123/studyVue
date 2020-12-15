import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=> import('../components/Login/Login')
const Home =()=> import('../view/Home/Home') //主页大路由
const Find = () => import('../view/Find/Find')
const Video = () => import('../view/Video/Video')
const Me  = () => import('../view/Me/Me')
const YunCun = () => import('../view/YunCun/YunCun')
const Account = () => import('../view/Account/Account')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/login',
        meta:{
            title:'登录'
        }
    },
    {
        path:'/login',
        component:Login,
        name:'Login',
        meta:{
            title:'登录'
        }
    },
    {
        path:'/home',
        component:Home,
        name:'Home',

        children:[
            {
                path:'',
                redirect:'account',
                name:'Account',
                meta:{
                    title:'首页'
                }
            },
            {
                path:'account',
                component:Account,
                name:'Account',
                meta:{
                    title:'帐户'
                }
            },
            {
                path:'find',
                component:Find,
                name:'Find',
                meta:{
                    title:'发现'
                }
            },
            {
                path:'me',
                component:Me,
                name:'Me',
                meta:{
                    title:'我的'
                }
            },
            {
                path:'video',
                component:Video,
                name:'Video',
                meta:{
                    title:'视频'
                }
            },
            {
                path:'yuncun',
                component:YunCun,
                name:'YunCun',
                meta:{
                    title:'云村'
                }
            }
        ]
    },
    
    
   
]
const router = new VueRouter({
    routes
})
//路由守卫，不登录不能使用本产品。
router.beforeEach((to,from,next)=>{
    // if(to.path==='/login'||to.path==='/home/find'){
    //     return next()
    // }
    // const tokenStr = window.sessionStorage.getItem('token')
    // if(!tokenStr) {
    //     alert('您还没有登录,请登录后使用去音乐')
    //     return next('/login')
    // }
    //设置不同路由标题
    document.title = to.matched[0].meta.title ||to.meta.title || '宣祥云音乐',
    // document.title = 
    next()
})

export default router