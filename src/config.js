import Vue from 'vue'
import Cookies from 'js-cookie'
import Alertify from 'alertify.js'

import AppAuth from './auth'
import AppUtils from './utils'

export default {

  appInit(app) {
    return new Promise((resolve, reject) => {
      app.$router.beforeEach((to, from, next) => {
        AppUtils.scrollTop()
        return next()
      })
      Vue.http.interceptors.push(function(request, next) {
        const self = this
        self.isLoading = true
        next(function(response) {
          self.isLoading = false
          return response
        })
      })
      Vue.http.interceptors.push((request, next) => {
        const token = Cookies.get('auth_token')
        // const token = app.$store.state.auth.token
        if (token) {
          request.headers.set('X-Access-Token', token)
        }
        next()
      })
      Vue.http.interceptors.push((request, next) => {
        next(function(response) {
          if ([403, 404].indexOf(response.status) > -1) {
            this.$router.replace('/404')
          }
        })
      })
      // Vue.http.interceptors.push((request, next) => {
      // 	next((response) => {
      // 		if (response.data.err_code === 1) {
      // 			if (process.env.NODE_ENV === 'production') {
      // 				console.log(response.data.err_msg)
      // 			}
      // 			else {
      // 				AppUtils.alert(response.data.err_msg)
      // 			}
      // 			return Promise.reject(response.data)
      // 		}
      // 		return response
      // 	})
      // })
      Vue.http.interceptors.push((request, next) => {
        next(function(response) {
          switch (response.data.err_code) {
            case 90001:
            case 90002:
            case 90003:
              AppAuth.authSignOut(app)
              if (this.$route.path !== '/simplelogin') {
                this.$router.push('/login')
              }
              return Promise.reject()
          }
          return response
        })
      })
      resolve()
    })
  },

  pageInit(vm) {
    return new Promise((resolve, reject) => {
      vm.$http.get('/api/settings').then(
        response => {
          if (AppUtils.checkResponse(response.data)) {
            vm.$store.commit('settingsLoad', { items: response.data.rows })
            resolve()
          } else {
            reject('加载网站失败，请重试。')
          }
        },
        response => {
          reject('加载网站失败，请检查网络后刷新页面重试。')
        }
      )
    })
  }
}
