import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios'
import { Popover } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Popover);
Vue.prototype.$axios  = Axios
Vue.prototype.HOST = '/api'
// Vue.prototype.$axios = Axios;
// Axios.defaults.HOST = '/baidu_music_api';
// Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
//Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  Axios,
  render: h => h(App)
}).$mount('#app')
