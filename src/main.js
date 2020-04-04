import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import {ValidationObserver, ValidationProvider} from 'vee-validate';
import './scss/index.scss';
import router from './router';
Vue.config.productionTip = false;
import {required} from "vee-validate/dist/rules";
import {extend} from "vee-validate";

extend('required', {
  ...required,
  message: 'This {_field_} is required'
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
