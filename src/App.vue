<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

export default Vue.extend({
  name: "AppShell",
  data() {
    return {
      apolloClient: undefined as unknown as any,
    };
  },
  created() {
    this.initializeApolloClient();
  },
  methods: {
    initializeApolloClient() {
      const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: "http://localhost:3020/graphql",
      });
      const cache = new InMemoryCache();
      this.apolloClient = new ApolloClient({
        link: httpLink,
        cache,
      });
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
