<template>
  <div class="bg_f9 layout">
    <div class="section-inner">
      <div class="wrap">
        <div class="">
          <div class="item">
            <h2 class="title title1">支付方式</h2>
            <div class="content">
              <a :class="['btn',payMethod==1?'active':'']" href="javascript:;" @click="payMethod=1">在线支付</a>
              <a :class="['btn',payMethod==2?'active':'']" href="javascript:;" @click="payMethod=2">转账汇款</a>
            </div>
          </div>
          <div class="line"></div>
          <div class="item">
            <h2 class="title title2">发票信息</h2>
            <div class="content">
              <div>
                <label class="checkbox">
                  <input type="checkbox">
                  <span></span>
                  需要发票
                </label>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="item">
            <h2 class="title title3">交付方式</h2>
            <div class="content">
              <div>
                <a :class="['btn',deliveryMethod==1?'active':'']" href="javascript:;" @click="deliveryMethod=1">快递</a>
                <div class="address">
                  <span>北京市朝阳区，王四营乡328号，广汽本田4S店（王四营桥西南角） xxx 13567383020</span>
                  <a class="primary" href="javascript:;" @click="maskShow=!maskShow">修改</a>
                </div>
              </div>
              <div class="mt20">
                <a :class="['btn',deliveryMethod==2?'active':'']" href="javascript:;" @click="deliveryMethod=2">自提</a>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="item">
            <h2 class="title title4">配件信息</h2>
            <div class="content">
              <div>
                <table class="table">
                  <thead>
                  <tr>
                    <th>配件编号</th>
                    <th>配件名称</th>
                    <th>配件品质</th>
                    <th>数量</th>
                    <th>牛咖斯单价</th>
                    <th>小计</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>nks283839393</td>
                    <td>后轴差速器</td>
                    <td>原厂件</td>
                    <td>20</td>
                    <td>¥43199.90</td>
                    <td>¥43199.90.90</td>
                  </tr>
                  <tr>
                    <td>nks283839393</td>
                    <td>后轴差速器</td>
                    <td>原厂件</td>
                    <td>20</td>
                    <td>¥43199.90</td>
                    <td>¥43199.90.90</td>
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
              </div>
            </div>
          </div>
          <div class="item">
            <button class="submit" type="submit">提交订单</button>
          </div>
        </div>
      </div>
    </div>
    <nt-area @select="(v)=> item.area = JSON.stringify(v)" :area="item.area" :maskShow="maskShow"
             @maskHide="maskHide"></nt-area>
  </div>
</template>

<script>
  export default {
    name: "submit-order",
    data() {
      return {
        payMethod: 1,
        deliveryMethod: 1,
        maskShow: false,
        item: {
          area: null,

        },
      }
    },
    methods: {
      maskHide() {
        this.maskShow = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    padding: 90px 0 20px;
  }

  .wrap {
    border: 1px solid #e5e5e5;
    background-color: #fff;
    padding: 0 10px;
    .item {
      padding: 20px 0 20px;
      .title {
        position: relative;
        text-align: left;
        margin-bottom: 20px;
        padding-left: 50px;
      }
      .title:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        left: 14px;
      }
      .content {
        padding-left: 50px;
        text-align: left;
        .btn {
          display: inline-block;
          width: 198px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          border: 1px solid #e5e5e5;
          margin-right: 40px;
        }
        .btn.active {
          border-color: #0064FF;
        }
        .address {
          display: inline-block;
          span {
            display: inline-block;
            max-width: 760px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 40px;
            vertical-align: middle;
          }
        }
        .prouductInfo {
          text-align: right;
          margin-top: 10px;
          & > span {
            margin-left: 20px;
          }
        }
      }

      .title1:before {
        background: url("../../assets/images/icon/pay_icon.png") no-repeat;
        width: 25px;
        height: 25px;
      }

      .title2:before {
        background: url("../../assets/images/icon/bill_icon.png") no-repeat;
        width: 24px;
        height: 19px;
      }
      .title3:before {
        background: url("../../assets/images/icon/delivery_icon.png") no-repeat;
        width: 24px;
        height: 25px;
      }
      .title4:before {
        background: url("../../assets/images/icon/accessories_icon.png") no-repeat;
        width: 20px;
        height: 24px;
      }
    }
  }

  .mt20 {
    margin-top: 20px;
  }

  .table tbody td,
  .table thead th {
    padding-left: 50px;
  }
</style>
