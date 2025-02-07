import Layout from "../../view/layout/layout.vue";
export const userRouters={

    path: '/user',
    component: Layout,
    name: "user",
    redirect: "/user/list",
    children: [
        {
            path: 'add',
            component: ()=> import('../../view/user/Add.vue'),
        },
        {
            path: 'list',
            component: ()=> import('../../view/user/List.vue'),
            name: "List",
        },
    ]
}
export default userRouters