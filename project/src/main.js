import { createApp } from "vue";
import App from "./App.vue";
// main.ts
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import "./index.css";

const app = createApp(App);

app.mount("#app");
