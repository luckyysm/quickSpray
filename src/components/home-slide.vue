<template>
	<section class="section-home-slider">
		<div class="owl-carousel" ref="slider">
			<a v-for="(item, index) in items" :key="index">
				<img :src="item.url" alt="" />
			</a>
		</div>
	</section>
</template>
<style scoped>
	section-home-slider{
		width: 100%;
		overflow: hidden;
	}
</style>
<script>
	export default {
		props: ["items"],
		data() {
			return {

			};
		},
		mounted() {
			$(this.$refs.slider).owlCarousel({
				items: 1,
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				autoplayTimeout: 7000
			});
		},
		methods: {

		}
	};
</script>
