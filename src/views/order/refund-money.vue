<template>
  <div class="mt80 section-inner refund">
    <h2>售后申请</h2>
    <div class="schedule">
      <div class="text active">买家申请退货</div>
      <div class="triangle"></div>
      <div class="text">供销商处理退款申请</div>
      <div class="triangle"></div>
      <div class="text">退款完成</div>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="order-info">
        <p>配件品牌：宝马520</p>
        <p>配件种类：3种</p>
        <p>配件数量：30件</p>
        <p>合计：¥1290.99</p>
        <div class="line"></div>
        <p class="mtb">订单号：177267701518739287</p>
        <a class="primary" href="javascript:;">查看订单详情</a>
      </div>
      <div class="refund-reason">
        <form>
          <div class="row">
            <label>退款金额</label>
            <input type="text" value="￥255" readonly>
          </div>
          <div class="row">
            <div class="clearfix">
              <label>退款说明</label>
              <select>
                <option value="1">质量不好</option>
                <option value="2">七天无理由退款</option>
                <option value="3">七天无理由退款</option>
                <option value="4">七天无理由退款</option>
              </select>
            </div>
            <div class="tips">请您描述问题并上传收到商品照片</div>
          </div>
          <div class="row flex ">
            <div class="clearfix">
              <label>上传凭证</label>
              <div class="imgWrap clearfix">
                <nt-upload :limit="5"></nt-upload>
                <!--<div class="imgBox fl_left"></div>-->
                <!--<div class="upload">-->
                  <!--<input type="file">-->
                  <!--<i></i>-->
                  <!--<p>本地上传图片</p>-->
                <!--</div>-->
              </div>
            </div>
            <div class="tips">最多可上传5张图片，每张图片大小不超过5M，支持bmp,gif,jpg,png,jpeg格式文件</div>

          </div>
          <div class="row" style="text-align:center;">
            <button class="submit" type="submit">提交</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "refund-money",
  }
</script>

<style lang="scss" scoped>
  .refund {
    text-align: left;
    h2 {
      padding-left: 40px;
      color: #000;
      padding-top: 20px;
    }
    .schedule {
      display: flex;
      padding: 20px 0 20px 40px;
      .text {
        height: 34px;
        line-height: 34px;
        padding: 0 20px;
        background-color: #F1E9E0;
        color: #8F9090;
      }
      .text.active {
        background-color: #0064FF;
        color: #fff;
      }
    }
    .content {
      padding: 40px;
      display: flex;
      .order-info {
        padding: 10px;
        border: 1px solid #e5e5e5;
        width: 250px;
        height: 249px;
        p {
          margin-bottom: 20px;
        }
        .mtb {
          margin: 20px 0 35px 0;
        }
      }
      .refund-reason {
        margin-left: 50px;
        select,
        input[type='text'],
        .imgWrap {
          width: 450px;
          height: 40px;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          margin-left: 5px;
          padding-left: 20px;
        }

        .row {
          margin-bottom: 50px;
          .tips{
            color:#787979;
            font-size: 12px;
            padding: 5px 0 0 65px;
          }
        }
        .imgWrap {
          float: right;
          padding: 14px;
          height: 91px;
        }
        /*.imgBox {*/
          /*width: 60px;*/
          /*height: 60px;*/
          /*background-color: #D8D8D8;*/
        /*}*/
        /*.upload {*/
          /*float: right;*/
          /*position: relative;*/
          /*font-size: 12px;*/
          /*input[type="file"] {*/
            /*position: absolute;*/
            /*opacity: 0;*/
            /*height: 100%;*/
            /*width: 100%;*/
            /*cursor: pointer;*/
            /*left: 0;*/
            /*top: 0;*/
          /*}*/
          /*i {*/
            /*width: 23px;*/
            /*height: 20px;*/
            /*display: block;*/
            /*margin: 10px auto;*/
            /*background: url(../../assets/images/icon/upload_icon.png) no-repeat;*/
            /*background-size: cover;*/
          /*}*/
        /*}*/
      }
    }
  }
</style>
