<!--客户账户审核-->
<!--挂账白名单设置-->
<!--售后处理-->

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
              <th>序号</th>
              <th>提交时间</th>
              <th>企业名称</th>
              <th>企业地址</th>
              <th>仓库地址</th>
              <th>营业执照</th>
              <th>联系人</th>
              <th>联系电话</th>
              <th>状态</th>
              <th>操作</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>2018-5-23</td>
              <td>牛咖斯</td>
              <td>北京市</td>
              <td></td>
              <td></td>
              <td>张三</td>
              <td>13697457824</td>
              <td>未审核</td>
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
    name:'check-account',
    data(){
      return{
        tabShow:0,
        tabLists:['全部','已通过','未审核','未通过']
      }
    }
  }
</script>

<style>


</style>


