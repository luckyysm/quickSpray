<template>
  <div>
    <div class="top">
      <div class="top_left">
        <div class="img">
          <img src="../../icons/shopInfo.png" alt="">
        </div>
        <div class="title">门店信息</div>
      </div>
      <div class="top_right">
        <el-form :model="shopInfo" :rules="rules" ref="shopInfo" style="display: flex; flex-wrap:wrap">

          <el-form-item label="门店名称" prop="name" style="width: 280px; display: flex">
            <el-input v-model="shopInfo.name"></el-input>
          </el-form-item>

          <el-form-item label="门店电话" prop="phone" style="width: 280px; display: flex">
            <el-input v-model="shopInfo.phone"></el-input>
          </el-form-item>

          <el-form-item label="平台佣金计提" prop="commission" style="width: 300px;display: flex">
            <el-input v-model="shopInfo.commission"></el-input>
          </el-form-item>

          <el-form-item label="所属企业" prop="enterprise" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.enterprise"></el-input>
          </el-form-item>

          <el-form-item label="服务范围" prop="server" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.server"></el-input>
          </el-form-item>

          <el-form-item label="油漆品牌" prop="paintBrand" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.paintBrand"></el-input>
          </el-form-item>

          <el-form-item label="油漆分类" prop="paintClassify" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.paintClassify"></el-input>
          </el-form-item>

          <el-form-item label="联系人电话" prop="personPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.personPhone"></el-input>
          </el-form-item>

          <el-form-item label="平台负责人" prop="principal" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principal"></el-input>
          </el-form-item>

          <el-form-item label="负责人电话" prop="principalPhone" style="width: 280px;display: flex">
            <el-input v-model="shopInfo.principalPhone"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom_left">
        <div class="bottom_img">
          <img src="../../icons/invoiceInfo.png" alt="">
        </div>
        <div class="title">发票信息</div>
      </div>
      <div class="bottom_right">
        <el-form :model="shopInfo" :rules="rules" ref="shopInfo" style="display: flex; flex-wrap:wrap">

          <el-form-item label="公司名称" prop="name" style="width: 280px; display: flex">
            <el-input v-model="company.name"></el-input>
          </el-form-item>

          <el-form-item label="公司地址" prop="phone" style="width: 280px; display: flex">
            <el-input v-model="company.address"></el-input>
          </el-form-item>

          <el-form-item label="公司电话" prop="commission" style="width: 300px;display: flex">
            <el-input v-model="company.phone"></el-input>
          </el-form-item>
          <el-form-item label="纳税人识别号" prop="identification" style="width: 320px;display: flex">
            <el-input v-model="company.identification"></el-input>
          </el-form-item>

          <el-form-item label="开户银行" prop="brank" style="width: 280px;display: flex">
            <el-input v-model="company.brank"></el-input>
          </el-form-item>

          <el-form-item label="银行账号" prop="brankCode" style="width: 280px;display: flex">
            <el-input v-model="company.brankCode"></el-input>
          </el-form-item>
        </el-form>
      </div>

    </div>

    <div class="btn">
      <el-button type="primary" @click="submitForm">保存</el-button>
      <el-button @click="cancelForm">取消</el-button>
    </div>
  </div>

</template>
<script>
  export default{
    data () {
      return {
        company: {},
        rules: {
          name: [
            {required: true, message: '请输入门店名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入门店电话', trigger: 'blur'}
          ],
          commission: [
            {required: true, trigger: 'blur'}
          ],
          enterprise: [
            {required: true, trigger: 'blur'}
          ]

        },
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

  .top_left {
    width: 119px;
    margin: 0 auto;
  }

  .bottom_left {
    width: 150px;
    margin: 0 auto;
  }

  .img {
    width: 30px;
    height: 30px;
    margin: 122px auto 0;
  }

  .img img {
    width: 100%;
    height: 100%;
  }

  .bottom_img {
    width: 30px;
    height: 30px;
    margin: 60px auto 0;
  }

  .bottom_img img {
    width: 100%;
    height: 100%;
  }

  .title {
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
    margin: 20px 42px 20px 0;
    padding: 12px 0 12px 15px;
  }

  .bottom {
    display: flex;
    background-color: #fff;
    width: 97%;
    height: 170px;
    margin-left: 15px;
    border-radius: 6px;
  }

  .btn {
    width: 97%;
    height: 62px;
    background-color: #ffffff;
    border-radius: 6px;
    margin: 10px 0 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
