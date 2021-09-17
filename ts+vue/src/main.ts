import { createApp } from "vue";
import App from "./App.vue";
import store, { key } from "./store";
import router from './router/index'

createApp(App).use(store, key).use(router).mount("#app");
