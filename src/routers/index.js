
import {createRouter, createWebHashHistory} from "vue-router";
import {TOKEN_CONFIG} from "../config/index.js";

const Login =()=> import ('../view/login.vue')
const Layout =()=> import ('../view/layout/layout.vue')
import userRouter from "./user/user.js"
//定义路由映射
const routers=[
    userRouter,
    {
        path: '/login',
        component: Login,
        name: "login"
    },
    {
        path: '/index',
        component: Layout,
    },

]
//创建路由实例
const router=createRouter({
    history: createWebHashHistory(),
    routes: routers,
})
router.beforeEach(
    (to,from,next)=>{
        //1、如果访问是login,但是没有token,next()
        //2、如果访问的是login,但是有token,next('/index')
        //3、如果访问的不是login,但是没有token,next('/login')
        //4、如果访问的不是login,但是有token,next()
        const path=to.path
        const tokenValue=window.localStorage.getItem(TOKEN_CONFIG.TOKEN_NAME)
        if(path.indexOf("/login")==0&&!tokenValue){
            next()
        }else if(path.indexOf("/login")==0&&tokenValue){
            next('/index')
        }else if(path.indexOf("/login")!=0&&!tokenValue){
            console.log("路由: ",path,tokenValue)
            next('/login')
        }else{
            next()
        }

    }
)

export default router

