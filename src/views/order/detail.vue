<template>
  <div class="bg_f9 order-detail">
    <div >
      <section class="pt0" >
        <div class="title clearfix">
          <div class="fl_left"><i></i>已发货</div>
          <div class="fr_right">
            <span>物流公司：顺丰物流</span>
            <span>物流单号：12222222224621565</span>
          </div>
        </div>
        <table class="table">
          <thead>
          <tr>
            <th>序号</th>
            <th>配件编号</th>
            <th>配件名称</th>
            <th>品牌</th>
            <th>VIN码</th>
            <th>配件品质</th>
            <th>4S店建议零售单价</th>
            <th>成本价</th>
            <th>牛咖斯单价</th>
            <th>数量</th>
            <th>合计</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>nks283839393</td>
            <td>倒车雷达</td>
            <td>宝马汽车</td>
            <td>nks283839393</td>
            <td>原厂</td>
            <td>41000</td>
            <td>41000</td>
            <td>41000</td>
            <td>10</td>
            <td>410000</td>
          </tr>
          </tbody>
        </table>
        <div class="prouductInfo">
          <span>已选商品
            <span>10</span>件</span>
          <span>共计
            <span>1000</span>
          </span>
        </div>
        <div class="bot">
          <a href="javascript:;">取消订单</a>
          <a class="btn" href="javascript:;">确认订单</a>
        </div>
      </section>
      <section class="mt10">
        <div class="order-info">
          <div class="column">
            <h3>订单信息</h3>
            <p>支付方式：在线支付</p>
            <p>支付时间：2018-08-23</p>
            <p>取消时间：2018-08-23</p>
            <p>取消原因：过期未付款</p>
          </div>
          <div class="column">
            <h3>收货信息</h3>
            <p>收货人：code</p>
            <p>支付方式：13606066666</p>
            <p>支付方式：北京市朝阳区日坛国际贸易中心</p>
          </div>
          <div class="column">
            <h3>配送信息</h3>
            <p>发货时间：2018-06-23</p>

          </div>
          <div class="column">
            <h3>发票信息</h3>
            <p>发票类型：不开发票</p>

          </div>
        </div>
      </section>
    </div>
    <refund-application :maskShow="maskShow" @maskHide="maskHide"></refund-application>
  </div>
</template>

<script>
  import refundApplication from './refund-application'

  export default {
    name: "detail",
    components: {
      refundApplication
    },
    data() {
      return {
        maskShow: true,
      }
    },
    methods: {
      maskHide() {
        this.maskShow = false;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .order-detail {
    padding:0 10px 10px;
    .mt10{
      margin-top: 10px;
    }

    section {
      padding: 10px;
      background-color: #fff;
      /*border: 1px solid #e5e5e5;*/
      .title {
        padding:10px 0;
        i {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url("../../assets/images/icon/state_icon.png") no-repeat;
          background-size: cover;
          vertical-align: middle;
          margin: 0 5px;
        }
        span {
          margin-left: 50px;
        }
      }
      .bot {
        height: 36px;
        line-height: 36px;
        text-align: right;
        padding: 20px 0;
        a {
          margin-left: 10px;
        }
      }
      .btn {
        height: 36px;
        width: 70px;
        color: #fff;
        background-color: #0064FF;
        display: inline-block;
        text-align: center;
      }
    }
    .p20 {
      padding: 20px;
    }
    .order-info {
      display: flex;
      .column {
        width: 170px;
        height: 137px;
        background-color: #fff;
        text-align: left;
        padding: 15px;
        border-right: 1px solid #e5e5e5;
        font-size: 12px;
        overflow: hidden;
        h3 {
          font-size: 14px;
        }
        p {
          margin-top: 10px;
          color: #666767;
        }
      }
    }
  }
</style>
