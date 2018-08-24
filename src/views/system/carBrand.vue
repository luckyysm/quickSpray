<template>
  <div>
    <!--搜索-->
    <div class="search">
      <filterContainer>
        <form-item name='品牌名称'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入企业名称" v-model="enterpriseInfo.qyName"></el-input>
        </form-item>
        <form-item>
          <el-button class="filter-item" type="primary"  icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <el-button class="filter-item" type="primary"   @click="handleFilter">新增</el-button>
          <el-button class="filter-item" type="danger"   @click="handleFilter">删除</el-button>
        </form-item>
      </filterContainer>
    </div>
    <!--列表-->
    <el-table
      border
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 97%; margin: 10px 15px; border-radius: 6px"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        label="序号"
        width="80">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <!--操作-->
      <el-table-column
        prop="name"
        align="center"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">下属分类</el-button>
        </template>
      </el-table-column>


      <el-table-column
        prop="brandId"
        label="品牌ID"
        align="center"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="brandName"
        label="品牌名称"
        align="center"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="time"
        align="center"
        label="创建时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        align="center"
        show-overflow-tooltip>
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
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        enterpriseInfo: {}
      }
    },
    components: {
      formItem,
      filterContainer
    },
    methods: {
      handleFilter(){
        console.log(this.enterpriseInfo)
      }
    }
  }
</script>
<style scoped>
  .table{
    width: 97%;
    height: 548px;
    background-color: #fff;
    border-radius: 6px;
    margin: 10px 15px;
  }

</style>
