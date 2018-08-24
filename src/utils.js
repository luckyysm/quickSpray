
import Alertify from 'alertify.js'
// import scriptjs from 'scriptjs'

const utils = {
	loginRedirect(cb, redirect = true) {
		if (this.$store.state.auth.token !== '') {
			cb()
		}
		else {
			const str = redirect ? ('?returnUrl=' + this.$route.path) : ''
			this.$router.push('/login'+ str)
		}
	},
	autoSizeImage(w, h, slim = false) {
		// return `?imageMogr2/thumbnail/${w}x${h}/blur/1x0/quality/100${slim ? '|imageslim': ''}`
		return `?imageMogr2/auto-orient/thumbnail/!${w}x${h}r/gravity/Center/crop/${w}x${h}/blur/1x0/quality/100${slim ? '|imageslim': ''}`
	},
	avatar(url, w, h) {
		return url + utils.autoSizeImage(w, h)
	},
	scrollTop() {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	},
	'alert': function () {
		Alertify.alert(...arguments)
	},

	'log': function () {
		Alertify.log(...arguments)
	},

	'confirm': function () {
		Alertify.confirm(...arguments)
	},

	'error': function () {
		Alertify.error(...arguments)
	},

	'checkResponse': function (data, showError = true) {
		const err_msg = this.retrieve_err_msg(data)
		if (err_msg && showError) {
			this.alert(err_msg)
		}
		if (0 === data.err_code) {
			return true
		} else {
			return false
		}
	},

	'retrieve_err_msg': function (data) {
		if ('object' === typeof data && 'string' === typeof data.err_msg && data.err_msg.length > 0) {
			return data.err_msg
		}
	}
}

export default utils
