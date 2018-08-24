import Vue from 'vue'
import Cookies from 'js-cookie'
import Alertify from 'alertify.js'
import AppUtils from './utils'

export default {
	authInit (vm) {
		return new Promise((resolve, reject) => {
			// 这个地方应该是为了新打开一个页面的时候，把token放到store里面，可以考虑直接放到localstorage里面
			const token = Cookies.get('auth_token')
			if (token) {
				vm.$store.commit('authSignIn', {'token': token})
				resolve(this.authLoad(vm))
			}
			resolve()
		})
	},

	authLoad(vm) {
		return new Promise((resolve, reject) => {
			vm.$http.get('/api/auth/heartbeat').then((response) => {
				// @TODO 此处需要重构，太难理解了
				if(response.data.user) {
					vm.$store.commit('authLoad', {'user': response.data.user})
					if ('brandnew' === vm.$store.state.auth.user.password_status && window.top === window) {
						AppUtils.alert('首次登录请修改初始密码', () => {
							vm.$router.push('/my/account')
						})
					}
				}
				resolve()
			}, (response) => {
				resolve()
			})
		})
	},

	authSignIn(vm, token) {
		Cookies.set('auth_token', token, {'expires': 7, 'path': '/'})
		return this.authInit(vm)
	},

	authSignOut(vm, passive=true) {
		const clearLocal = () => {
			Cookies.remove('auth_token', {'path': '/'})
			vm.$store.commit('authSignOut')
		}
		if (!passive) {
			return vm.$http.post('/api/auth/signout').then((response) => clearLocal())	
		}
		else {
			return Promise.resolve().then(clearLocal)
		}
	},

}

