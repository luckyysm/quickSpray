<template>
	<div class="address_wrap">
		<div class="clearfix">
			<h2 class="title">收发货地址管理</h2>
			<div class="accountInfo">
				<div>
					<h3>马晓静 13864965132</h3>
					<p class="fs12 c666">北京市 北京市 朝阳区</p>
					<p class="fs12 c666 detail-address">王四营乡368号广本4s店(王四营桥西南角)</p>
					<div class="clearfix bot">
						<div class="fl_left">
							<label class="checkBox"> <input type="checkbox"><span></span>设为默认地址</label>
						</div>
						<div class="fr_right">
							<a class="primary" href="javascript:;" @click="del">删除</a>
							<a class="primary" href="javascript:;" @click="maskShow">修改</a>
						</div>
					</div>
				</div>
			</div>
			<div class="accountInfo">
				<div>
					<h3>马晓静 13864965132</h3>
					<p class="fs12 c666">北京市 北京市 朝阳区</p>
					<p class="fs12 c666 detail-address">王四营乡368号广</p>
					<div class="clearfix bot">
						<div class="fl_left">
							<label class="checkbox"> <input type="checkbox"><span></span>设为默认地址</label>
						</div>
						<div class="fr_right">
							<a class="primary" href="javascript:;" @click="del">删除</a>
							<a class="primary" href="javascript:;" @click="maskShow">修改</a>
						</div>
					</div>
				</div>
			</div>
			<div class="accountInfo">
				<div class="addAddress" @click="maskShow">
					<i></i>
					<p>添加收货地址</p>
				</div>
			</div>
		</div>

		<!--<areasel @select="(v)=> item.area = JSON.stringify(v)" :area="item.area" :maskShow="maskShow" @maskHide="maskHide"></areasel>-->

		<transition name="fade">
			<nt-area @select="(v)=> item.area = JSON.stringify(v)" :area="item.area"></nt-area>

		</transition>
	</div>

</template>

<script>
	// import areasel from '../../../components/area'
	import AppUtils from "../../../utils";

	export default {
		name: "address-manage",
		components: {
			// areasel
		},
		data() {
			return {
				item: {
					area: null,

				},
			};
		},
		computed: {

		},
		methods: {
			maskShow() {
			 this.$store.dispatch("showMaskLayer")
			},
			del() {
				AppUtils.confirm("是否确认删除收货地址");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address_wrap {
		padding: 0 20px;
		text-align: left;
		.title {
			margin: 20px 0;
		}
		.accountInfo {
			margin: 0 10px 10px 0;
			float: left;
			&> div {
				border: 1px solid #e5e5e5;
				width: 195px;
				height: 158px;
				display: inline-block;
				padding: 0 20px;
			}
			.addAddress {
				cursor: pointer;
				i {
					display: block;
					margin: 50px auto 10px;
					width: 37px;
					height: 37px;
					background: url("../../../assets/images/icon/add_address_icon.png") no-repeat;
					background-size: cover;
				}
				p {
					text-align: center;
					color: #666767;
				}
			}
			h3 {
				padding: 10px 0;
			}
			p {
				padding: 7px 0;
				span {
					color: #666;
				}
			}
			.detail-address {
				height: 32px;
			}
			.bot {
				margin-top: 15px;
			}
			a {
				vertical-align: bottom;
				margin-left: 10px;
			}
		}
	}
</style>
