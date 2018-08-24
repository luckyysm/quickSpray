<template>
  <div>
    <div class="top">
      <div class="left">
        <div class="top_img">
          <img src="../../icons/shopInfo.png" alt="">
        </div>
        <div class="title">销售单信息</div>
      </div>
      <div class="top_right">
        <el-form :model="shopInfo" ref="shopInfo" style="display: flex; flex-wrap:wrap">

          <el-form-item label="渠道来源" prop="name" style="width: 280px; display: flex">
            <el-input v-model="shopInfo.name"></el-input>
          </el-form-item>

          <el-form-item label="渠道电话" prop="phone" style="width: 280px; display: flex">
            <el-input v-model="shopInfo.phone"></el-input>
          </el-form-item>

          <el-form-item label="客户名称" prop="commission" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.commission"></el-input>
          </el-form-item>

          <el-form-item label="客户手机" prop="enterprise" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.enterprise"></el-input>
          </el-form-item>

          <el-form-item label="商品编号" prop="server" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.server"></el-input>
          </el-form-item>

          <el-form-item label="商品名称" prop="paintBrand" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.paintBrand"></el-input>
          </el-form-item>

          <el-form-item label="服务类型" prop="paintClassify" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.paintClassify"></el-input>
          </el-form-item>

          <el-form-item label="预约门店" prop="personPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.personPhone"></el-input>
          </el-form-item>

          <el-form-item label="商品数量" prop="principal" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principal"></el-input>
          </el-form-item>

          <el-form-item label="商品价格" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="订单金额" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="下单时间" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="付款金额" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="付款时间" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="退款数量" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>

          <el-form-item label="退款金额" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="bottom_img">
          <img src="../../icons/shopInfo.png" alt="">
        </div>
        <div class="title">验证码信息</div>
      </div>
      <div class="bottom_right">
        <el-form :model="shopInfo" ref="shopInfo" style="display: flex; flex-wrap:wrap">

        </el-form>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    data () {
      return {
        company: {},
        shopInfo: {}
      }
    },
    mounted: function () {
      this.getParams()
    },
    components: {},
    methods: {
      getParams(){
        console.log(this.$route.query)
        this.company = this.$route.query
      },
      onSubmit() {
        console.log(this.formInline);
      },
      submitForm(){

      },
      cancelForm(){

      }
    }

  }
</script>
<style scoped>
  .top {
    display: flex;
    background-color: #fff;
    width: 97%;
    height: 300px;
    margin: 0 0 15px 15px;
    border-radius: 6px;
  }
  .bottom{
    display: flex;
    background-color: #fff;
    width: 97%;
    /*height: 300px;*/
    margin: 0 0 15px 15px;
    border-radius: 6px;
  }

  .left {
    width: 119px;
    margin: 0 auto;
  }
  .top_img {
    width: 30px;
    height: 30px;
    margin: 122px auto 0;
  }
  .top_img img {
    width: 100%;
    height: 100%;
  }

  .bottom_img img {
    width: 30px;
    margin: 50px auto 0;
    height: 30px;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #444;

  }

  .top_right {
    border: 1px solid #ECF1F4;
    border-radius: 6px;
    width: 1578px;
    height: 230px;
    margin: 10px 42px 20px 0;
    padding: 24px 0 24px 10px;
  }
  .bottom_right {
    border: 1px solid #ECF1F4;
    border-radius: 6px;
    width: 1578px;
    height: 100px;
    margin: 10px 42px 20px 0;
    padding: 24px 0 24px 10px;
  }
  /*.btn {*/
    /*width: 97%;*/
    /*height: 62px;*/
    /*background-color: #ffffff;*/
    /*border-radius: 6px;*/
    /*margin: 10px 0 0 15px;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/

  /*}*/
</style>
