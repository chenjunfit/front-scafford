<template>
    <el-aside width="240px" style="border-right: 1px solid #cccccc;">
        <div class="el-button">
            <router-link to="/index">
                <el-button text class="el-button_el-button" style="font-size: 25px">
                    <el-icon :size="24" style="margin-right: 10px"><MoonNight /></el-icon>
                    Admin
                </el-button>
            </router-link>

        </div>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                router
            >
                <el-sub-menu v-for="item in MEMU_CONFIG" :key="item.index" :index="item.index">
                    <template #title>
                        <el-icon><span :class="item.icon"></span></el-icon>
                        <span >{{item.title}}</span>
                    </template>
                    <template v-if="item.subMenu">
                        <el-sub-menu v-for="subMenu in item.subMenu" :key="subMenu.index" :index="subMenu.index">
                                <template #title>
                                    <el-icon><span :class="subMenu.icon"></span></el-icon>
                                    <span>{{subMenu.title}}</span>
                                </template>
                                    <el-menu-item v-for="subItem in subMenu.items" :key="subItem.index"  :index="subItem.index">
                                        <template #title>
                                            <el-icon><span :class="subItem.icon"></span></el-icon>
                                            <span>{{ subItem.title }}</span>
                                        </template>
                                    </el-menu-item>
                            </el-sub-menu>
                        </template>
                    <template v-else>
                            <el-menu-item v-for="subItem in item.items" :key="subItem.index" :index="subItem.index">
                                <template #title>
                                    <el-icon><span :class="subItem.icon"></span></el-icon>
                                    <span>{{ subItem.title }}</span>
                                </template>
                            </el-menu-item>
                    </template>
                </el-sub-menu>
            </el-menu>

    </el-aside>
</template>

<script  setup>
import {MoonNight,Menu as IconMenu,Setting,Location} from '@element-plus/icons-vue'
import {MEMU_CONFIG} from "../../../config/menu.js";
import '../../../assets/iconfont/iconfont.css'

</script>

<style lang="less" scoped>
.el-button{
height: 50px;
    width: 100%;
}
.el-button_el-button{
    width: 100%;
    height: 100%;
}
</style>