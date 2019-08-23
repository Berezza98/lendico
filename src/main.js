import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';

const base = axios.create({
  baseURL: 'http://localhost:3300'
})

Vue.config.productionTip = false;
Vue.prototype.$http = base;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
