import { createStore } from "vuex";
import { IToDo } from "@/typings/index";
import { FINISH, DELETE, SWITCH, ADD } from "./mutationTypes";

export default createStore({
  state: {
    currentPage: "home",
    todoList: [
      { id: 1, name: "吃饭", status: false },
      { id: 2, name: "打游戏", status: false },
      { id: 3, name: "健身💪", status: false },
    ] as IToDo[],
  },
  getters: {},
  mutations: {
    [FINISH](state, payload) {
      const temp = state.todoList.find((item) => item.id == payload.id);
      console.log(temp);
      if (temp) {
        temp.status = temp.status ? false : true;
      }
    },
    [DELETE](state, payload) {
      const index = state.todoList.findIndex((item) => item.id == payload.id);
      index > -1 && state.todoList.splice(index, 1);
    },
    [SWITCH](state, payload) {
      state.currentPage = payload.currentPage;
    },
    [ADD](state, payload) {
      state.todoList.push({
        id: state.todoList.length + 1,
        name: payload.todo,
        status: false,
      });
    },
  },
  actions: {},
  modules: {},
});
