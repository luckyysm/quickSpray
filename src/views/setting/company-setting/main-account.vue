<!--主账号设置-->
<template>
  <div class="account_wrap">
    <div>
      <!--<h2 class="title">当前账户</h2>-->
      <div class="accountInfo">
        <div>
          <p>姓名：<span>张三</span></p>
          <p>手机：<span >13996086425</span></p>
        </div>
        <a class="primary" href="javascript:;" @click="maskShow=true">修改密码</a>
      </div>
    </div>
    <password-edit :maskShow="maskShow" @maskHide="maskHide"></password-edit>
  </div>
</template>

<script>
  import passwordEdit from './password-edit'
  export default {
    name: "main-account",
    data(){
      return{
        maskShow:false
      }
    },
    components:{
      passwordEdit
    },
    methods:{
      maskHide(){
        this.maskShow=false;
      }
    }

  }
</script>

<style lang="scss" scoped>
  .account_wrap{
    padding: 20px;
    text-align: left;
    .title{
      margin: 10px 0;
    }
    .accountInfo{
      &>div{
        border: 1px solid #e5e5e5;
        width: 200px;
        height: 100px;
        display: inline-block;
        padding: 20px;
      }
      p{
        padding: 7px 0;
        span{
          color: #666;
        }
      }
      a{
        vertical-align: bottom;
        margin-left: 10px;
      }

    }
  }


</style>

