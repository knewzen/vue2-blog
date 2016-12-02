import Vue from 'vue'
import App from './components/layouts/App.vue'
import Bootstrap from './config/bootstrap'
import Vendors from './config/vendors'

new Vue({
    ...Bootstrap,
    ...Vendors,
    ...App,
}).$mount('#app');
