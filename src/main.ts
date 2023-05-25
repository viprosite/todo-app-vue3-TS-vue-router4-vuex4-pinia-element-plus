import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 引入elementUI plus 和 图标
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 引入所有的图标，按需引入看官网

// 引入全局自定义样式
import "@/styles/index.scss";

const app = createApp(App);

//创建pinia实例 并 use
const pinia = createPinia();
app.use(pinia);

// 注册所有element plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(ElementPlus).mount("#app");
