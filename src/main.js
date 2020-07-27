import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icon/index.js'

//引入完整的elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//或者按需引入，详情见饿了么文档

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
