<template>
  <div class="setting">

      <ul>
        <li @click="tabShow=0" :class="tabShow==0?'active':''">
          主账号设置
        </li>
        <li @click="tabShow=1" :class="tabShow==1?'active':''">
          收发货地址管理
        </li>
        <li @click="tabShow=2" :class="tabShow==2?'active':''">
          发票信息设置
        </li>
        <li @click="tabShow=3" :class="tabShow==3?'active':''">
          子账户管理
        </li>
      </ul>
      <div>
        <main-account v-if="tabShow==0"></main-account>
        <address-manage v-else-if="tabShow==1"></address-manage>
        <company-bill v-else-if="tabShow==2"></company-bill>
        <company-sub-account v-else></company-sub-account>
      </div>
  </div>
</template>
<script>
  import mainAccount from './main-account';
  import addressManage from './address-manage.vue'
  import companyBill from './company-bill.vue'
  import companySubAccount from './company-sub-account.vue'

  export default {
    name: "company-setting",
    components: {
      mainAccount,
      addressManage,
      companyBill,
      companySubAccount
    },
    data() {
      return {
        tabShow: 0
      }
    },
    computed: {
      path() {
        return this.$route.path;
      }
    }
  }
</script>


<style lang="scss" scoped>
  .setting {
    border: 1px solid #e5e5e5;
    margin: 0 10px;
    box-sizing: border-box;
    background-color: #fff;



    ul {
      height: 34px;
      line-height: 34px;
      padding: 16px 0 0 50px;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      li {
        padding: 0 20px;
        border: 1px solid transparent;
        border-bottom-color: #e5e5e5;
        margin-bottom: -1px;
        cursor: pointer;
        &.active {
          color: #0064FF;
          border-color: #e5e5e5;
          border-bottom-color: #fff;
        }
      }
    }
  }
</style>
