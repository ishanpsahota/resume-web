import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';
import vueHeadful from 'vue-headful';
import VueTouch from 'vue-touch/dist/vue-touch';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

Vue.use(VueTouch), {name: 'v-touch'};

Vue.config.productionTip = false

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
