<template>
    <div class="tabbar">
        <el-button class="tabbar" plain>{{ btn }}</el-button>
    </div>
</template>

<script setup>
defineProps(['btn'])
</script>

<style lang="scss">
.tabbar {
    position: fixed;
    bottom: 30px;
    width: calc(100% - 40px);
    display: flex;
    justify-content: center;

    .el-button {
        height: 45px;
        width: 60%;

        span {
            font-size: 16px;
        }
    }

}
</style>