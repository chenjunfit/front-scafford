<template>
    <el-card style="max-width: 480px">
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </el-card>
</template>
<script setup>
</script>

<style scoped>

</style>