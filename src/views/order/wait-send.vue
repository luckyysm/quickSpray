<template>
  <div class="wait-pay bg_f9">
    <div class="section-inner">
      <section class="orderInfo">
        <div>
          <p class="blue">等待发货</p>
          <p class="order">订单号：A12344444444444
            <a class="primary" href="javascript:;">订单详情</a>
          </p>
        </div>
        <div class="payable">
          应收金额 12000
        </div>
      </section>
      <section class="uploadFile">
      <form >
          <div class="item">
          <h3 class="title"> 上传物流单据
            <span></span>
          </h3>
          <div class="line"></div>
          <div class="content imgCon clearfix">
            <!--<div class="column left fl_left">-->

            <!--</div>-->
            <!--<div class="column right fl_left">-->
                <!--<i></i>-->
              <!--<p>本地上传</p>-->
              <!--<input type="file">-->
            <!---->
            <!--</div>-->
            <nt-upload></nt-upload>
          </div>
        </div>
        <div class="item">
          <h3 class="title">填写快递单号
            <span></span>
          </h3>
          <div class="line"></div>
          <div class="content">
            <div>
              <label>快递/物流公司</label><input placeholder="请输入物流公司" type="text">
            </div>
            <div>
              <label>快递/物流单号</label><input placeholder="请输入物流单号" type="text">
            </div>
          </div>
        </div>
        <div class="item">
          <button class="submit" type="submit" >发货</button>
        </div>
      </form>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: "wait-send"
}
</script>

<style lang="scss" scoped>
.wait-pay {
  padding: 80px 0 10px 0;
  section {
    margin-top: 10px;
    background-color: #fff;
    padding: 25px 15px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }
  .orderInfo {
    display: flex;
    align-items: center;
    text-align: left;
    .order {
      margin-top: 15px;
      font-size: 12px;
    }
    a.primary {
      margin-left: 30px;
    }
    .payable {
      margin-left: 700px;
    }
  }
  .uploadFile {
    line-height: 42px;
    text-align: left;
    padding: 0 15px;
    .content {
      font-size: 12px;
      padding: 25px 0 50px;
      &>div:first-child {
        margin-bottom: 5px;
      }
      .column {
        border-radius: 3px;
      }
      .left {
        margin-right: 35px;
        background-color: #efefef;
        width: 140px;
        height: 140px;
      }
      .right {
        width: 138px;
        height: 138px;
        border: 1px solid #0064FF;
        position: relative;
        text-align: center;
        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 140px;
          height: 140px;
          opacity: 0;
          cursor: pointer;
        }
        i{
          display: block;
          margin: 50px auto 10px;
          height: 20px;
          width: 20px;
          background-color: red
        }
        p{
          height: 20px;
          line-height: 20px;
        }
      }
      label {
        margin-right: 22px;
      }
      input[type=text] {
        height: 34px;
        width: 200px;
        border: 1px solid #e5e5e5;
        padding-left: 20px;
      }
    }
    .imgCon /deep/ {
      .el-upload--picture-card {
        background-color: #f2f2f2;
        border: 1px solid #e5e5e5;
      }
    }
    .submit{
      width: 80px;
      height: 34px;
      border-radius: 3px;
      margin: 0 0 50px 116px;
    }
  }
}
</style>
