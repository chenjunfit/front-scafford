<template>
    <el-card style="width: 480px">
        <h2>后台管理系统</h2>
        <el-form
            ref="loginRef"
            style="max-width: 600px"
            :model="loginInfo"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"

        >
            <el-form-item  prop="username">
                <el-input :prefix-icon="User" clearable placeholder="请输入用户名" v-model="loginInfo.username" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input :prefix-icon="Lock" placeholder="请输入密码" show-password v-model="loginInfo.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button :disabled="loginDisabled" type="primary" @click="submitForm(ruleFormRef)">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script setup>
import {reactive, ref,watch} from "vue";
import { User,Lock} from '@element-plus/icons-vue'
const loginRef = ref()

const loginInfo =reactive({
    username: "",
    password: "",
})
const rules=reactive({
    username:[
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password:[
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})
let loginDisabled=ref(true)
watch([()=>loginInfo.username,()=>loginInfo.password],()=>{
    loginRef.value.validate((valid)=>{
        if(valid){
            loginDisabled.value=false
        }
    })
})
</script>

<style scoped>

</style>