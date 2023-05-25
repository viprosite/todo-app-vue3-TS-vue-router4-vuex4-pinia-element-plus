<template>
    <el-card>
        <span class="title">Add todo:</span>
        <el-input type="text" placeholder="press Enter to add" v-model="todo" @keyup.enter="handleAdd"></el-input>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/store';
import { useRouter } from 'vue-router'
import { FINISH, DELETE, SWITCH, ADD } from "@/store/mutationTypes";


const store = useAppStore()
let todo = ref('')

const router = useRouter()
const handleAdd = (): void => {
    if (todo.value.trim().length > 0) {
        store[ADD]({
            type: 'ADD',
            todo
        })
        store[SWITCH]({
            type: 'SWITCH',
            currentPage: 'home'
        })
        router.push('/')
    }
}
</script>

<style lang="scss" scoped>
.el-card {
    padding: 30px 0;

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .el-input {
        margin-top: 20px;
    }

}
</style>