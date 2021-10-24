import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ag-grid-enterprise";
import "../src/assets/style.css";
import VueApexCharts from "vue3-apexcharts";

const app = createApp({
  render: () => h(App),
})
  .use(store)
  .use(router);
app.use(VueApexCharts);
app.mount("#app");
