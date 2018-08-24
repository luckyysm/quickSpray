// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import 'babel-polyfill'
import axios from 'axios';
import './assets/css/initialize.css'
import './assets/css/index.css'
// import './assets/sass/element-variables.scss'
import Alertify from 'alertify.js'
// import DateFormat from 'dateformat'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import AppConfig   from './config'
// import AppAuth     from './auth'
// import AppUtils from './utils'
import VeeValidate, {Validator} from 'vee-validate'
import store from './store/index'

window.jQuery = window.$ = require('jquery')
require('owl.carousel')
import 'owl.carousel/dist/assets/owl.carousel.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VeeValidate, {
  errorBagName: 'vaerrors',
  inject: true,
  enableAutoClasses: true,
  events: 'blur',
  classNames: {
    invalid: 'invalid', // model is invalid
  },
})

Vue.component('nt-date-selector', require('./components/date-selector'))
Vue.component('nt-pulse-loader', require('./components/pulse-loader'))
Vue.component('nt-search', require('./components/search'))
Vue.component('nt-search-order', require('./components/search-order'))
Vue.component('nt-no-data', require('./components/no-data'))
Vue.component('nt-area', require('./components/area'))
Vue.component('nt-upload', require('./components/upload'))
Alertify.logPosition('bottom right')
Alertify.maxLogItems(6)
Alertify.okBtn('确认')
Alertify.cancelBtn('取消')
// Vue.prototype.$loginRedirect = AppUtils.loginRedirect

axios.interceptors.request.use(
  function (config) {
    // 这里的config包含每次请求的内容
    if (store.state.localInfo.sessionId) {
      // config.headers.session = `Token ${store.getters.getToken}`;
      config.headers.sessionId = store.state.sessionId;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);
// axios 统一处理网络错误
axios.interceptors.response.use(
  response => {
    if (response.data.status == '200') {
      return response;
    } else if (response.data.status == '505') {
      store.dispatch('showToast', response.data.exceptionTip);
      store.dispatch('hideLoading');
      return Promise.reject(response);
    } else if (response.data.status == '300') {
      store.dispatch('showToast', response.data.compareMsg);
      store.dispatch('hideLoading');
      return Promise.reject(response);
    } else {
      store.dispatch('hideLoading');
      store.dispatch('showToast', statusError(response.data.status));
      // store.dispatch('showToast',response.data.status);
      return Promise.reject(response);
    }
  },
  error => {
    store.dispatch('hideLoading');
    store.dispatch('showToast', '网络请求失败');
    // store.dispatch('showToast',error.status);
    return Promise.reject(error);
  },
);

Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue()
Vue.mixin({
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    // imgAvatar: AppUtils.avatar
  }
})

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})

//
//new Vue({
//
//	router,
//	render,
//	created() {
//		AppConfig.appInit(this)
//		.then(() => AppAuth.authInit(this))
//		.then(() => AppConfig.pageInit(this))
//		.then(() => this.$mount('#app'))
//		// .catch((err) => AppUtils.alert(err))
//	},
//})
//
