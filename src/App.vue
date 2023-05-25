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
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const currentPage = computed(() => store.state.currentPage)


const router = useRouter()

const handleSwitchOp = (): void => {
  router.push({ path: currentPage.value == 'home' ? '/add' : '/' })
  store.commit({
    type: 'SWITCH',
    currentPage: currentPage.value == 'home' ? 'add' : 'home'
  })
}

</script>

<style lang="scss"></style>
