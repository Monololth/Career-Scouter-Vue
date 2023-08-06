import "./assets/main.css";
import i18n from "./i18n";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Edit ONLY if necessary!!!!! Breaks stuff really easily and fast

createApp(App).use(router).use(i18n).mount("#app");
