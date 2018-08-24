<template>
  <div class="edit-box">
    <div class="container posCent">
      <div class="maskTitle">
        <span>添加白名单</span>
        <!--<span>重置子帐号</span>-->
        <a class="close" href="javascript:;" @click="maskHide"></a>
      </div>
    <div class="content">
      <div class="table_wrap">
        <table class="table">
          <thead>
          <tr>
            <th><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></th>
            <th>序号</th>
            <th>公司名称</th>
            <th>联系方式</th>
            <th>联系人</th>
          </tr>
          </thead>
          <tbody>
          <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>
          <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>  <tr >
            <td><label class="checkBox">
              <input type="checkbox" v-model="rememberPassword">
              <span></span>
            </label></td>
            <td>1</td>
            <td>牛咖斯 </td>
            <td>151109641</td>
            <td>张三</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="bot">
        <button class="submit" type="submit">确定</button>
      </div>
    </div>

      </div>

  </div>
</template>

<script>
  export default {
    props: {
      addShow: {
        type: Boolean
      },
      // arrData: {
      //   type: Array
      // }
    },
    methods: {
      maskHide: function () {
        let isTrue = !this.addShow
        this.$emit('changeShow', isTrue)
      }
    }
  }
</script>

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
      width: 1000px;
      height: 450px;
      background-color: #fff;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .14), 0 4px 5px 0 rgba(0, 0, 0, .098), 0 1px 10px 0 rgba(0, 0, 0, .084);
    }
    .maskTitle {
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      border-bottom: 1px solid #e5e5e5;
      a {
        display: block;
        height: 28px;
        width: 28px;
        background: url("../../../assets/images/icon/close_icon.png") no-repeat;
        background-size: cover;
      }
    }
    .content{
      padding: 10px;

    }
    .table_wrap{
      height: 240px;
      overflow-y: auto;
      border-radius: 0;
      padding: 0 5px;
    }
    /*.bot {*/
      /*width: 100%;*/
      /*text-align: center;*/
      /*.submit {*/
        /*margin: 40px 0;*/
        /*width: 80px;*/
        /*border-radius: 3px;*/
      /*}*/
    /*}*/
  }


</style>
