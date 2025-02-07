export const MEMU_CONFIG=[
    {
        "title":"用户管理",
        "index":"/user",
        "icon":"iconfont icon-yonghu",
        items:
            [
                {"title":"添加用户", "index":"/user/add"},
                {"title":"查看用户", "index":"/user/list"},
            ]


    },
    {
        "title":"产品管理",
        "index":"/product",
        "icon":"iconfont icon-chanpinguanli",
        subMenu:[
            {
                "title":"水产品",
                "index":"/product/water",
                "icon":"iconfont icon-chanpinguanli",
                items:[
                    {
                    "title":"添加水产品",
                    "index":"/product/water/add"
                    },
                    {
                        "title":"查看水产品",
                        "index":"/product/water/list"
                    },
                ]
            },
            {
                "title":"电子产品",
                "index":"/product/electric",
                "icon":"iconfont icon-chanpinguanli",
                items:[
                    {
                        "title":"添加电子产品",
                        "index":"/product/electric/add"
                    },
                    {
                        "title":"查看电子产品",
                        "index":"/product/electric/list"
                    },
                ]
            }
        ]
    }
]