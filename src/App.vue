<template>
  <appTitle :title="currentPage == 'home' ? 'ToDo App' : 'Add ToDo'"></appTitle>
  <transition name="el-fade-in-linear">
    <router-view />
  </transition>
  <appTabBar :btn="currentPage == 'home' ? 'To Add' : 'To List'" @click="handleSwitchOp"></appTabBar>
</template>



<script setup lang="ts">
import appTitle from '@/components/appTitle.vue'
import appTabBar from '@/components/appTabBar.vue'
import { FINISH, DELETE, SWITCH, ADD } from "@/store/mutationTypes";
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store';
const store = useAppStore()
const router = useRouter()

// 当前页面 （也可通过url判断）
let currentPage = computed(() => store.currentPage)

// 切换页面
const handleSwitchOp = (): void => {
  router.push({ path: currentPage.value == 'home' ? '/add' : '/' })
  store[SWITCH]({
    type: 'SWITCH',
    currentPage: currentPage.value == 'home' ? 'add' : 'home'
  })
}

</script>

<style lang="scss"></style>
