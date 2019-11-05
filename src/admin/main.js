import Vue from 'vue';
import App from './App.vue'
import router from './router';
import axios from './request'

new Vue({
  el: "#app-root",
  router,
  autorization,
  axios,
  render: h => h(App)
});