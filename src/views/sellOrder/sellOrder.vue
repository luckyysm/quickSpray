<template>
  <div>
    <!--搜索-->
    <div class="search">
      <filterContainer>
        <form-item name='下单时间'>
          <el-date-picker
            v-model="listQuery.time_start"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          至
          <el-date-picker
            v-model="listQuery.time_end"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </form-item>
        <form-item name='客户姓名'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="订单号" v-model="listQuery.cpOrderId"></el-input>
        </form-item>
        <form-item name='客户手机'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="注册手机号" v-model="listQuery.phone"></el-input>
        </form-item>
        <form-item name="选择渠道">
          <el-select v-model="listQuery.region" placeholder="选择渠道">
            <el-option label="渠道" value="shanghai"></el-option>
            <el-option label="京东旗舰店" value="beijing"></el-option>
          </el-select>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入渠道单号" v-model="listQuery.code"></el-input>
        </form-item>
        <form-item name="预约门店">
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入渠道单号" v-model="listQuery.code"></el-input>
        </form-item>
        <form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <router-link to="/sellOrder/orderInfo">
            <el-button class="filter-item" type="primary" @click="handleFilter">新增</el-button>
          </router-link>
        </form-item>
      </filterContainer>
    </div>
    <!--选项卡-->
    <el-tabs v-model="activeName2" type="card"  style="width: 97%; background-color: #fff;margin: 10px 0 0 15px; border-top-left-radius: 6px;  border-top-right-radius: 6px; " @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="未消费" name="second"></el-tab-pane>
      <el-tab-pane label="已消费" name="third"></el-tab-pane>
    </el-tabs>
    <!--列表-->
    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit
              highlight-current-row
              style="width: 97%; margin: 0 15px; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;">
      <el-table-column min-width="80px" align="center" label="序号">
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="操作">
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="门店ID">
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="门店名称">
      </el-table-column>
      <el-table-column min-width="120px" align="center" label="平台佣金计提">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="门店电话">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="门店联系人">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="联系人电话">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="平台负责人">
      </el-table-column>

      <el-table-column min-width="100px" align="center" label="负责人电话">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="状态">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="创建人">
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="创建时间">
      </el-table-column>
      <el-table-column class-name="status-col" align="center" label="最后修改人" min-width="100px">
      </el-table-column>
      <el-table-column min-width="160px" align="center" label="最后修改时间">
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      style="width: 300px; margin-left: 15px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  import {filterContainer, formItem} from '@/components/ContentMain'
  export default{
    data () {
      return {
        shopInfo: {},
        listQuery: {},
        list: [],
        form: {},
        activeName2: 'first'
      }
    },
    components: {
      formItem,
      filterContainer
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleFilter(){
        console.log(this.enterpriseInfo)
      }
    }
  }
</script>
<style scoped>
  .table {
    width: 99%;
    height: 548px;
    background-color: #fff;
    border-radius: 6px;
    margin: 10px 15px;
  }

</style>
