<template>
  <div class="sub_wrap">
    <div>
      <h3 class="title">账号设置</h3>
      <div class="form-wrap">
          <table class="table">
            <thead>
            <tr>
              <th>子账号</th>
              <th>联系人</th>
              <th>电话</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                a1234
              </td>
              <td>
                张三
              </td>
              <td>
                13964516547
              </td>
              <td>
                <a href="javascript:;" class="primary" @click="maskShow=true">重置</a>
                <a v-if="!isForbidden" href="javascript:;" @click="isForbidden=true"  class="primary">禁用</a>
                <a  v-else href="javascript:;"  @click="isForbidden=false" class="primary">启用</a>
              </td>
            </tr>

            </tbody>
          </table>
          <div class="bot">
            <button class="submit" @click="maskShow=true" >添加子账号</button>
          </div>
      </div>
    </div>

    <edit-sub-account :maskShow="maskShow" @maskHide="maskHide"></edit-sub-account>
  </div>
</template>

<script>
  import editSubAccount from './edit-sub-account'

  export default {
    name: "company-sub-account",
    components: {
      editSubAccount
    },
    data() {
      return {
        maskShow:false,//是否显示弹框
        isForbidden:false//是否禁用子账户
      }
    },
    methods: {
      maskHide(){
        this.maskShow=false;
      }
    }
  };


</script>

<style lang="scss" scoped>
  .sub_wrap {
    text-align: left;
    padding: 0 20px;
    .title {
      margin: 20px 0;
    }

    .form-wrap {
      width: 498px;
      .bot{
        text-align: center;
      }
    }
  }
</style>
