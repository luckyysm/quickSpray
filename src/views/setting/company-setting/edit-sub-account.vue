<template>
  <div v-if="maskShow" class="edit-box">
    <div class="container posCent">
      <div class="maskTitle">
        <span>添加子账号</span>
        <!--<span>重置子帐号</span>-->
        <a class="close" href="javascript:;" @click="maskHide"></a>
      </div>
      <form @submit.prevent="maskHide">
        <div class="form-group">
          <div class="left">
            *手机
          </div>
          <div class="row right">
            <input class="text" type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="left">
            *姓名
          </div>
          <div class="right">
            <input class="text" type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="left">
            *密码
          </div>
          <div class="right">
            <input class="text" type="text">
          </div>
        </div>
        <div class="bot">
          <button class="submit" type="submit">保存</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .edit-box {
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
      height: 343px;
      background-color: #fff;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .14), 0 4px 5px 0 rgba(0, 0, 0, .098), 0 1px 10px 0 rgba(0, 0, 0, .084);
    }
    .maskTitle{
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px ;
      border-bottom: 1px solid #e5e5e5;
      a{
        display: block;
        height: 28px;
        width: 28px;
        background: url("../../../assets/images/icon/close_icon.png") no-repeat;
        background-size: cover;

      }
    }
    form{
      padding-top: 20px;
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
        width: 312px;
      }
      input {
        width: 290px;
        height: 34px;
        padding-left: 20px;
        border: 1px solid #e5e5e5;
        font-size: 12px;
      }
      input:focus,textarea:focus {
        border-color: #0064FF;
      }
      textarea{
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        outline: none;
        border-color: #e5e5e5;
        resize: none;
      }
    }
    .bot{
      width: 100%;
      text-align: center;
      .submit{
        margin: 40px 0;
        width: 80px;
        border-radius: 3px;
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
  select:focus , select:focus option{
    border-color: #0064FF;
  }

</style>

<script>
  export default {
    name: "edit-sub-account",
    props:["maskShow"],
    data() {
      return {

      };
    },
    methods: {
      maskHide(){
        this.$emit("maskHide")
      }
    }
  };
</script>
