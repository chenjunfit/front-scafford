
import {createRouter, createWebHashHistory} from "vue-router";
const Login =()=> import ('../view/login.vue')
//定义路由映射
const routers=[
    {
        path: '/login',
        component: Login,
        name: "login"
    },
]
//创建路由实例
const router=createRouter({
    history: createWebHashHistory(),
    routes: routers,
})

export default router