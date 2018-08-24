<template>
  <div>
    <!--搜索-->
      <filterContainer>
        <form-item name='账号' nameWidth='50'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入企业名称" v-model="enterpriseInfo.qyName"></el-input>
        </form-item>
        <form-item name='姓名' nameWidth='50'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入企业名称" v-model="enterpriseInfo.qyName"></el-input>
        </form-item>
        <form-item name='手机' nameWidth='50'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入企业名称" v-model="enterpriseInfo.qyName"></el-input>
        </form-item>
        <form-item name='门店' nameWidth='50'>
          <el-select>
            <el-option label="望京南" value="shanghai"></el-option>
            <el-option label="王四营" value="beijing"></el-option>
          </el-select>
        </form-item>
        <form-item name='状态'>
          <el-select>
            <el-option label="启用" value="shanghai"></el-option>
            <el-option label="王四营" value="beijing"></el-option>
          </el-select>
        </form-item>
        <form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">新增</el-button>
        </form-item>
      </filterContainer>
    <!--列表-->
    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit
              highlight-current-row
              style="width: 97%; margin: 10px 15px; border-radius: 6px">
      <el-table-column min-width="80px" align="center" label="序号">
        <template slot-scope="scope">
          <span>{{scope.row.cpOrderId}}</span>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column
        prop="name"
        align="center"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">数据范围</el-button>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="账号">
        <template slot-scope="scope">
          <span>{{scope.row.userPhone}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="姓名">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="120px" align="center" label="手机">
        <template slot-scope="scope">
          <span>{{scope.row.productCount}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="岗位">
        <template slot-scope="scope">
          <span>{{scope.row.modelName}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="所属门店">
        <template slot-scope="scope">
          <span>{{scope.row.rongliang}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.chengse}}</span>
        </template>
      </el-table-column>
      <!--用户角色-->
      <el-table-column min-width="100px" align="center" label="用户角色">
        <template slot-scope="scope">
          <span>{{scope.row.chengse}}</span>
        </template>
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
        enterpriseInfo: {
          qyName: "ysm"

        }
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
