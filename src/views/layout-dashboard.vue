<template>
  <div>
    <div class="side_menu">
      <div class="logo_bg">快喷先生</div>
      <div class="menu_wrap">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="item1" title="系统管理" name="1">
            <router-link to="/system/enterpriseInfo">企业信息</router-link>
            <router-link to="/system/shopInfo">门店信息</router-link>
            <router-link to="/system/carBrand">车辆品牌</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="权限管理" name="2">
            <router-link to="/permission/userAccount">用户账号</router-link>
            <router-link to="/permission/character">用户角色</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="客户信息" name="3">
            <router-link to="/customerInfo/customerInfo">客户信息</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="车辆信息" name="4">
            <router-link to="/carInfo/carInfo">车辆信息</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="销售订单" name="5">
            <router-link to="/sellOrder/sellOrder">销售订单</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="消费码信息" name="6">
            <router-link to="/consumerCode/consumerCode">消费码信息</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="快喷工单" name="7">
            <router-link to="/workOrder/workOrder">快喷工单</router-link>
          </el-collapse-item>
          <el-collapse-item class="item2" title="取送车订单" name="8">
            <router-link to="/connectCarOrder/connectCarOrder">取送车订单</router-link>
          </el-collapse-item>
          <!--<el-collapse-item class="item2" title="数据统计" name="9">-->
            <!--<router-link to="/dataStatistics/dataStatistics">数据统计</router-link>-->
          <!--</el-collapse-item>-->

          <!--<el-collapse-item class="item3" title="基础设置" name="10">-->
            <!--<router-link to="/setting/search-accessories">配件价格修改</router-link>-->
            <!--<router-link to="/setting/check-account">客户账号审核</router-link>-->
            <!--<router-link to="/setting/white-list-setting">挂账白名单设置</router-link>-->
            <!--<router-link to="/setting/company-setting">牛咖斯账号设置</router-link>-->
          <!--</el-collapse-item>-->
          <!--<el-collapse-item class="item4" title="商城" name="11">-->
            <!--<router-link to="/1">特价商品列表</router-link>-->
            <!--<router-link to="/1">添加特价商品</router-link>-->
          <!--</el-collapse-item>-->

        </el-collapse>

      </div>
    </div>
    <div class="wrap">
      <header>
        <div class="header_right">
          <div class="userInfo"><img src="../assets/images/icon/user_icon.png" alt="">赵辉</div>
          <div class="loginOut"><img src="../assets/images/icon/loginOut.png" alt="">退出</div>
        </div>
      </header>
      <div class="crumb">
        <span class="crumb_item active"><a href="javascript:;">首页</a><i class="icon_arrow_r01"></i></span>
        <span class="crumb_item active"><a href="javascript:;">维修保养招揽</a><i class="icon_arrow_r01"></i></span>
        <span class="crumb_item"><a href="javascript:;">客诉单详情</a><i class="icon_arrow_r01"></i></span>
      </div>
      <div class="body">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<
<script>
  export default {
    data() {
      return {activeName: '1'};
    }
  }
</script>
<style lang="scss" socped>
  .header {
    height: 50px;
  }

  #sidebar_left {
    position: fixed;
  }

  .el-collapse {
    width: 200px;
    border: 0;
    text-align: left;
  }

  .el-collapse-item__header {
    border-bottom: 0;
    color: #666767;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-left: 2px solid transparent;
    box-sizing: border-box;
    padding-left: 45px;
    font-size: 14px;
  }

  .el-collapse-item__header.is-active {
    color: #0064FF;
    border-left-color: #0064FF;
  }

  .el-collapse-item__header i {
    line-height: 40px;
  }

  .el-collapse-item__header:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: block;
  }

  .item1 .el-collapse-item__header:before {
    background: url(../assets/images/icon/sales_icon.png) no-repeat;
    width: 14px;
    height: 14px;
    background-size: cover;
  }

  .item1 .el-collapse-item__header.is-active:before {
    background: url(../assets/images/icon/sales_active_icon.png) no-repeat;
    background-size: cover
  }

  .item2 .el-collapse-item__header:before {
    background: url(../assets/images/icon/sales_icon.png) no-repeat;
    width: 14px;
    height: 14px;
    background-size: cover;
  }

  .item2 .el-collapse-item__header.is-active:before {
    background: url(../assets/images/icon/sales_active_icon.png) no-repeat;
    background-size: cover
  }

  .item3 .el-collapse-item__header:before {
    background: url(../assets/images/icon/sales_icon.png) no-repeat;
    width: 14px;
    height: 14px;
    background-size: cover;
  }

  .item3 .el-collapse-item__header.is-active:before {
    background: url(../assets/images/icon/sales_active_icon.png) no-repeat;
    background-size: cover
  }

  .item4 .el-collapse-item__header:before {
    background: url(../assets/images/icon/sales_icon.png) no-repeat;
    width: 14px;
    height: 14px;
    background-size: cover;
  }

  .item4 .el-collapse-item__header.is-active:before {
    background: url(../assets/images/icon/sales_active_icon.png) no-repeat;
    background-size: cover
  }

  .el-collapse-item__content {
    background-color: #fff;
    color: #0064FF;
    padding-bottom: 18px;
    a {
      display: block;
      padding: 10px 0 0 60px;
      font-size: 12px;
    }
  }

  .el-collapse-item__wrap {
    border-bottom: 0;
  }

  .el-collapse-item__arrow {
    margin-right: 10px;
  }
</style>
