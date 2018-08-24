<template>
  <div class="bill_wrap">
    <div>
      <h3 class="title">企业名称</h3>

      <div v-if="isEdit" class="content">
        <form>
          <div class="bill-box">
            <div class="form-group">
              <div class="left">公司名称</div>
              <div class="right">
                <input class="text" placeholder="请输入公司名称" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="left">纳税人识别码</div>
              <div class="right">
                <input class="text" placeholder="请输入纳税人识别码" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="left">地址</div>
              <div class="right">
                <input class="text" placeholder="请输入地址" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="left">电话</div>
              <div class="right">
                <input class="text" placeholder="请输入电话" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="left">开户行</div>
              <div class="right">
                <input class="text" placeholder="请输入开户行" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="left">开户行账户</div>
              <div class="right">
                <input class="text" placeholder="请输入开户行账户" type="text">
              </div>
            </div>

          </div>
          <div class="bot">
            <button class="submit" type="" @click.prevent="isEdit=false">保存</button>
          </div>
        </form>
      </div>
      <div v-else class="content">
        <div class="bill-box">
          <div class="form-group">
            <div class="left">公司名称</div>
            <div class="right">
              <div class="text">牛咖斯</div>
            </div>
          </div>
          <div class="form-group">
            <div class="left">纳税人识别码</div>
            <div class="right">
              <div class="text">666666666</div>
            </div>
          </div>
          <div class="form-group">
            <div class="left">地址</div>
            <div class="right">
              <div class="text">北京市长岩区</div>
            </div>
          </div>
          <div class="form-group">
            <div class="left">电话</div>
            <div class="right">
              <div class="text">13698746512</div>
            </div>
          </div>
          <div class="form-group">
            <div class="left">开户行</div>
            <div class="right">
              <div class="text">北京银行北京支行</div>
            </div>
          </div>
          <div class="form-group">
            <div class="left">开户行账户</div>
            <div class="right">
              <div class="text">6288645869201234</div>
            </div>
          </div>

        </div>

        <div class="bot">
          <button class="submit" @click="isEdit=true">修改</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    name: "company-bill",
    data() {
      return {
        isEdit: false
      }
    },
    methods: {}
  };


</script>

<style lang="scss" scoped>
  .bill_wrap {
    text-align: left;
    padding: 0 20px;
    .title {
      margin: 20px 0;
    }
    .bill-box {
      width: 448px;
      height: 314px;
      border: 1px solid #e5e5e5;
      padding-bottom: 15px;
    }
    .form-group {
      display: flex;
      margin-top: 15px;
      line-height: 36px;
      font-size: 12px;
      .left {
        width: 90px;
        text-align: right;
        margin-right: 16px;
      }

      .right {
        flex: 1;
      }
      input {
        width: 218px;
        height: 34px;
        padding-left: 20px;
        border: 1px solid #e5e5e5;
        font-size: 12px;
        box-sizing: border-box;
      }
      input:focus {
        border-color: #0064FF;
      }
    }
    .bot {
      text-align: center;
      width: 450px;
      padding: 50px 0;
      .submit {
        width: 80px;
        height: 34px;
        border-radius: 3px;
        margin: 0;
      }
    }
  }
</style>
