<template>
  <div v-if="maskShow" class="select-box">
    <div class="container posCent">
      <div class="maskTitle">
        <span>请选择退款类型</span>
        <a class="close" href="javascript:;" @click="maskHide"></a>
      </div>
      <div class="content">
        <div class="item">
          <!--<div :class=" selectedFlag==0?'active':''" @click="refundMethod($event,0,'/order/refund-money')">-->
          <a href="/order/refund-money" target="_blank">
            <div>
              <i class="refund_icon1"></i>
              <span>仅退款</span>
            </div>
          </a>

          <p>未收到货（包含未签收），或卖家协商同意前提下</p>
        </div>
        <div class="item">
          <!--<div :class=" selectedFlag==1?'active':''" @click="refundMethod($event,1,'/order/refund-good-money')">-->
          <a href="/order/refund-good-money" target="_blank">
            <div>
              <i class="refund_icon2"></i>
              <span>退货退款</span>
            </div>
          </a>
          <p>已收到货，需要退换已收到的货物</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .select-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 9999;
    .container {
      width: 480px;
      height: 376px;
      background-color: #fff;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .14), 0 4px 5px 0 rgba(0, 0, 0, .098), 0 1px 10px 0 rgba(0, 0, 0, .084);
    }
    .maskTitle {
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      border-bottom: 1px solid #e5e5e5;
      a {
        display: block;
        height: 28px;
        width: 28px;
        background: url("../../assets/images/icon/close_icon.png") no-repeat;
        background-size: cover;
      }
    }
    .content {
      padding: 50px 0;
      .item {
        display: inline-block;
        &:first-child {
          margin-bottom: 30px;
        }
        div {
          height: 75px;
          width: 230px;
          padding-left: 100px;
          border: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: 3px;
          margin-bottom: 5px;
        }
        .refund_icon1 {
          background: url("../../assets/images/icon/refund_icon1.png") no-repeat;
          background-size: cover;
        }
        .refund_icon2 {
          background: url("../../assets/images/icon/refund_icon2.png") no-repeat;
          background-size: cover;
        }
        div.active,div:hover {
          background-color: #F1E9E0;
          border-color: #0064FF;
          .refund_icon1 {
            background: url("../../assets/images/icon/refund_icon1_active.png") no-repeat;
            background-size: cover;
          }
          .refund_icon2 {
            background: url("../../assets/images/icon/refund_icon2_active.png") no-repeat;
            background-size: cover;
          }
        }
        i {
          display: inline-block;
          height: 35px;
          width: 35px;
          margin-right: 25px;
        }

        p {
          font-size: 12px;
          color: #787979;
        }
      }
    }

  }

  .area-box.show {
    transition: all .33s cubic-bezier(.25, .8, .25, 1);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .col {
    /*flex-grow: 1;*/
  }

  select {
    width: 90px;
    height: 34px;
    border: 1px solid #e5e5e5;
    outline: none;
    cursor: pointer;
  }

  select:focus, select:focus option {
    border-color: #0064FF;
  }

</style>

<script>
  export default {
    name: "refund-application",
    props: ["maskShow"],
    data() {
      return {
        selectedFlag: 0
      };
    },
    methods: {
      maskHide() {
        this.$emit("maskHide")
      },
      // refundMethod(e,index,path){
      //   e.preventDefault();
      //   this.selectedFlag=index;
      //   this.$router.push(path);
      //   console.log(index)
      //   console.log(this.selectedFlag)
      // }

    }
  };
</script>
