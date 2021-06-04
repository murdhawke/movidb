import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import JwPagination from 'jw-vue-pagination'

Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
