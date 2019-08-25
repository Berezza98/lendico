import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import ElementUI from 'element-ui';
import axios from "./config/axios";
import vueCustomElement from 'vue-custom-element';

import 'document-register-element/build/document-register-element'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(vueCustomElement)

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

App.store = store;

Vue.customElement('vue-calculator', App);

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app');
