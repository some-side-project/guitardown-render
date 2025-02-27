import "./assets/css/main.scss";
import App from "./runtime-views/App.js";
import { resolveVue } from "./common/vue.js";

export default async function render(rootEl) {
  const vueRes = await resolveVue();
  console.log("vueRes", vueRes);
  const { createApp } = vueRes;
  // 开始初始化 vue 根组件
  const app = createApp(App);
  app.mount(rootEl);
}
