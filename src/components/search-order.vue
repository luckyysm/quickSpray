<template>
	<form>
		<div class="selectWrap">
			<div class="column inlineBlock">
				<span>
                下单时间
              </span>
				<!--<date-selector v-model="filterType"></date-selector>-->
				<nt-date-selector v-model="filterType"></nt-date-selector>
			</div>
		</div>
		<div class="selectWrap mt20">
			<div class="column inlineBlock">
				<span>
                销售单号
                 </span>
				<input class="select" placeholder="请输入订单号" type="text">
			</div>

			<div class="column inlineBlock">

				<button class="serachBtn" type="submit">搜索</button>
			</div>
		</div>
	</form>
</template>
<style lang="scss" scoped>
	.selectWrap {
		text-align: left;
		height: 42px;
		line-height: 42px;
		span {
			vertical-align: top;
			display: inline-block;
			width: 60px;
			text-align: right;
		}
	}

	.column {
		margin-left: 10px;
	}

	div.select {
		cursor: pointer;
	}

	.select {
		height: 35px;
		width: 160px;
		border: 1px solid #e5e5e5;
		border-radius: 5px;
		padding-left: 20px;
		margin-left: 10px;
	}

	.select:focus {
		border-color: #0064FF;
	}

	.serachBtn {
		height: 30px;
		width: 65px;
		background-color: #000;
		border-radius: 3px;
		color: #fff;
		margin-left:20px;
	}
</style>
<script>
	// import  dateSelector from './date-selector'
	export default {
		name: 'search-order',
		components: {
			// dateSelector
		},
		data() {
			return {
				filterType: "day",
			};
		},
		mounted() {

		},
		methods: {}
	};
</script>
