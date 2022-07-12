import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apollo/ApolloClient";

Vue.config.productionTip = false;

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
