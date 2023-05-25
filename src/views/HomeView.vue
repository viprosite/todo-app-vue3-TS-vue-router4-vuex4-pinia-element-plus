<template>
  <div class="todo-container">
    <template v-if="todoList.length > 0">
      <div v-for="item in todoList" :key="item.id" class="todo__item"
        :style="{ 'text-decoration': item.status ? 'line-through' : '' }">
        <el-checkbox @click="handleFinish(item.id)" disabled v-model="item.status">{{ item.name }}</el-checkbox>
        <el-icon @click="handleDelete(item.id)" color="var(--el-color-primary)">
          <Delete />
        </el-icon>
      </div>
    </template>
    <el-empty v-else description="没有待办，休息会~"></el-empty>
  </div>
</template>

<script lang="ts" setup>
import { FINISH, DELETE, SWITCH, ADD } from "@/store/mutationTypes";
import { useAppStore } from '@/store';
import { storeToRefs } from 'pinia';
const store = useAppStore()

const { todoList } = storeToRefs(store)

const handleFinish: (id: number) => void = (id: number): void => {
  store[FINISH]({
    type: 'FINISH',
    id
  });
}
const handleDelete: (id: number) => void = (id: number): void => {
  store[DELETE]({
    type: 'DELETE',
    id
  })
}


</script>

<style lang="scss" scoped>
.todo-container {
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  // max-height: calc(100vh -);

  .todo__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    &:not(:last-child) {
      border-bottom: 1px solid var(--el-menu-active-color);
    }

    ::v-deep .el-checkbox {
      cursor: pointer;

      .el-checkbox__label {
        font-size: 15px;
        color: #333;
      }
    }

    .el-icon {
      cursor: pointer;
    }

    ::v-deep .el-checkbox__input.is-disabled+span.el-checkbox__label,
    ::v-deep .el-checkbox__input.is-disabled .el-checkbox__inner {
      cursor: pointer !important;
      background-color: var(--el-checkbox-bg-color);
      border-color: var(--el-border-color);
    }
  }
}
</style>
