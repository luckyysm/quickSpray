<!--挂账处理-->

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
              <th>挂账金额</th>
              <th>挂账公司</th>
              <th>挂账人</th>
              <th>销售人员</th>
              <th>状态</th>
              <th>操作</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td><router-link :to="'/order/detail'" class="primary">B18050903349</router-link></td>
              <td>2018-5-23</td>
              <td>￥2000</td>
              <td>牛咖斯</td>
              <td>李四</td>
              <td>张三</td>
              <td>已完成</td>

              <td>
                <span class="btn">确认收款</span>
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
    name:'manage-credit',
    data(){
      return{
        tabShow:0,
        tabLists:['全部','已完成','待确认','已过期','已取消']
      }
    }
  }
</script>

<style>


</style>
