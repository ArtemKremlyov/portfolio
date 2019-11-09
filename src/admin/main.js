import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './request';

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  axios,
  store,
  render: h => h(App)
});