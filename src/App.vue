<template>
	<div id="app">
		<!--<header class="head">
			<div class="section-inner wrap">
				<aside class="login-wrap">
					<span >
						<router-link to="/auth/login" class="link">登录</router-link>
						<router-link to="/auth/register"  class="link">注册</router-link>
					</span>
					<span >
						forever
					</span>
					<span >
						<router-link to="/auth/login" class="link">退出登录</router-link>
					</span>
				</aside>
			</div>
		</header>
    <aside></aside>-->
		<transition name="fade">
			<router-view/>
		</transition>

	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		text-align: center;
    color: #000;
		/*color: #2c3e50;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;*/
	}
</style>
