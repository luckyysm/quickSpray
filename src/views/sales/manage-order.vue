<!--订单处理-->
<template>
  <div class="main_wrap">
    <div class="search-box bg_fff">
      <nt-search-order></nt-search-order>
    </div>
    <div class="table_wrap  ">
      <div class="table_nav">
        <ul>
          <li v-for="(tabList,index) in tabLists" :class="tabShow==index?'active':''" :key="index" @click="tabShow=index">{{tabList}}</li>

        </ul>
      </div>
      <div class="table_layout bg_fff border">
        <div class="table_scroll  ">
          <table class="table">
            <thead>
            <tr>
              <th>销售单号</th>
              <th>时间</th>
              <th>配件编号</th>
              <th>配件名称</th>
              <th>品牌</th>
              <th>VIN码</th>
              <th>配件品质</th>
              <th>配件种类</th>
              <th>数量</th>
              <th>总计</th>
              <th>库存</th>
              <th>销售人员</th>
              <th>交付方式</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><router-link :to="'/order/detail'" class="primary">B18050903349</router-link></td>
              <td>2018-5-23</td>
              <td>LB1WA7B39</td>
              <td>倒车雷达</td>
              <td>宝马520</td>
              <td>LFV3A28K493017576</td>
              <td>原厂</td>
              <td>1</td>
              <td>3</td>
              <td>¥1920.12</td>
              <td>3763</td>
              <td>forever</td>
              <td>快递/物流</td>
              <td>已付款</td>
              <td>
                <span class="btn">去调整</span>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'manage-order',
  data(){
    return{
      tabShow:0,
      tabLists:['全部','待付款','已付款','待发货','已发货']
    }
  }
}
</script>

<style>


</style>
