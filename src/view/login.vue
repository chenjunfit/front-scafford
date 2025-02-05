<template>
    <el-card style="width: 480px">
        <h2>后台管理系统</h2>
        <el-form
            ref="ruleFormRef"
            style="max-width: 600px"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"

        >
            <el-form-item  prop="username">
                <el-input :prefix-icon="User" v-model.number="loginInfo.username" />
            </el-form-item>
            <el-form-item prop="pass">
                <el-input :prefix-icon="Lock" v-model="loginInfo.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
import {reactive} from "vue";
import { User,Lock} from '@element-plus/icons-vue'
const loginInfo =reactive({
    username: "",
    password: "",
})
</script>

<style scoped>

</style>