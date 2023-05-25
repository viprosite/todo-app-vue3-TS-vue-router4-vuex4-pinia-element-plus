<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts"  setup>
defineProps(['title'])
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 30px;
}
</style>