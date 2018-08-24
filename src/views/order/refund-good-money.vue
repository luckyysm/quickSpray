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

        <form>
          <table class="table">
            <thead>
            <tr>
              <th>选择</th>
              <th>序号</th>
              <th>配件编号</th>
              <th>配件名称</th>
              <th>品牌</th>
              <th>VIN码</th>
              <th>配件品质</th>
              <th>4S店建销售单价</th>
              <th>成本价</th>
              <th>牛咖斯销售单价</th>
              <th>数量</th>
              <th>总计</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <label >
                  <input type="checkbox">
                  <span></span>
                </label>
              </td>
              <td>1</td>
              <td>LBIWA7B39</td>
              <td>倒车雷达</td>
              <td>宝马520</td>
              <td>LFV3A28K493017576</td>
              <td>原厂</td>
              <td>192.35</td>
              <td>192.35</td>
              <td>192.35</td>
              <td>10</td>
              <td>￥10000</td>
            </tr>
            </tbody>
          </table>
          <div class="refund-reason">
            <div class="row">
              <div><label>退款金额</label>
                <input type="text" value="￥255" readonly></div>
            </div>
            <div class="row ">
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
              <div class="clearfix w515">
                <label>上传凭证</label>
                <div class="imgWrap clearfix">
                  <!--<div class="imgBox fl_left"></div>-->
                  <!--<div class="upload">-->
                    <!--<input type="file">-->
                    <!--<i></i>-->
                    <!--<p>本地上传图片</p>-->
                  <!--</div>-->
                  <nt-upload :limit="5"></nt-upload>
                </div>
              </div>
              <div class="tips">最多可上传5张图片，每张图片大小不超过5M，支持bmp,gif,jpg,png,jpeg格式文件</div>
            </div>
            <div class="row" >
             <div style="text-align:center; width: 100%">
               <button class="submit" type="submit">提交</button>
             </div>
            </div>
          </div>

        </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "refund-good-money"
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
      form{
        width: 100%;
      }
      .table{
        margin-bottom: 40px;
        label{
          cursor: pointer;
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
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          .tips{
            color:#787979;
            font-size: 12px;
            padding: 5px 0 0 15px;
          }
        }

        .imgWrap {
          float: right;
          padding: 14px;
          height: 91px;
          /*width: 515px;*/
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
        .w515{
          width: 515px;
        }
      }
    }
  }
</style>
