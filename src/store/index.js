import Vue from 'vue';
import Vuex from 'vuex';
import axios from "../config/axios";

import calendar from "./modules/calendar";

Vue.use(Vuex);

const store =  new Vuex.Store({
  modules: {
    calendar
  }
});

store.$http = axios;

export default store;
