import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { connect as connectSocket } from "./plugins/vue-socket-io-extended";

connectSocket(store);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
