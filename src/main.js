import Vue from 'vue'
import App from './App.vue'

import router from './router';

import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000';
// axios.defaults.withCredentials = false;

import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate, {
  useInputDecorators: true
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
