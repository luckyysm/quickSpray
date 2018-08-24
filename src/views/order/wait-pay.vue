<template>
  <div class="wait-pay bg_f9">
      <div class="section-inner">
        <section class="orderInfo">
          <div>
            <p>订单提交成功，请尽快付款</p>
            <p class="order">订单号：A12344444444444 <a class="primary" href="javascript:;">订单详情</a></p>
          </div>
          <div class="payable">
            应付金额
          </div>
        </section>
        <section class="payMethod">
          <div class="pay">
            <i></i>
         <span> 微信</span>
          </div>
        </section>
      </div>

    </div>


</template>

<script>
  export default {
    name: "wait-pay"
  }
</script>

<style lang="scss" scoped>
  .wait-pay {
   padding: 80px 0 10px 0;
    section {
      margin-top: 10px;
      background-color: #fff;
      padding: 25px 15px;
      box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
    }
    .orderInfo{
      display: flex;
      align-items: center;
      text-align: left;
      .order{
        margin-top: 15px;
        font-size: 12px;
      }
      a.primary{
        margin-left: 30px;
      }
      .payable{
        margin-left: 700px;
      }
    }
  .payMethod{
    line-height: 42px;
    text-align: left;
    .pay{
      cursor: pointer;
    }
    i{
      display: inline-block;
      width: 48px;
      height: 42px;
      background: url("../../assets/images/icon/wx_icon.png") no-repeat;
      vertical-align: middle;
    }
    span{
      vertical-align: top;
      margin-left: 5px;
    }
  }

  }
</style>
