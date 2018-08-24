<template>
  <div>
    <!--搜索-->
    <div class="search">
      <filterContainer>
        <form-item name='门店名称'>
          <el-input @keyup.enter.native="handleFilter" class="filter-item" placeholder="请输入门店名称"
                    v-model="shopInfo.qyName"></el-input>
        </form-item>
        <form-item name="所属门店">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </form-item>
        <!--状态-->
        <form-item name="状态">
          <el-select>
            <el-option label="启用" value="shanghai"></el-option>
            <el-option label="停用" value="beijing"></el-option>
          </el-select>
        </form-item>
        <form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <!--<el-button class="filter-item" type="primary">新增</el-button>-->
          <router-link to="/system/newShopInfo">
            <el-button class="filter-item" type="primary">新增</el-button>
          </router-link>
        </form-item>
      </filterContainer>
    </div>
    <!--列表-->
    <el-table element-loading-text="给我一点时间" border fit
              highlight-current-row
              :data="enterpriseInfo"
              style="width: 97%; margin: 10px 15px; border-radius: 6px">
      <el-table-column prop="number" min-width="80px" align="center" label="序号">
      </el-table-column>
      <!--操作-->
      <el-table-column
        label="操作"
        align="center"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>

      <!--门店ID-->
      <el-table-column prop="qyId" min-width="80px" align="center" label="门店ID">
      </el-table-column>
      <!--门店名称-->
      <el-table-column prop="qyName" min-width="80px" align="center" label="门店名称">
      </el-table-column>
      <!--平台佣金-->
      <el-table-column prop="qyPerson" min-width="120px" align="center" label="平台佣金计提">
      </el-table-column>
      <!--门店电话-->
      <el-table-column prop="qyPhone" min-width="110px" align="center" label="门店电话">
      </el-table-column>
      <!--门店联系人-->
      <el-table-column prop="ptPerson" min-width="100px" align="center" label="门店联系人">
      </el-table-column>
      <!--联系人电话-->
      <el-table-column prop="ptPhone" min-width="110px" align="center" label="联系人电话">
      </el-table-column>
      <!--平台负责人-->
      <el-table-column prop="ptPhone" min-width="110px" align="center" label="联系人电话">
      </el-table-column>
      <!--负责人电话-->
      <el-table-column prop="ptPhone" min-width="110px" align="center" label="联系人电话">
      </el-table-column>
      <!--状态-->
      <el-table-column prop="stauts" min-width="80px" align="center" label="状态">
      </el-table-column>
      <!--创建人-->
      <el-table-column prop="founder" min-width="80px" align="center" label="创建人">
      </el-table-column>
      <!--创建时间-->
      <el-table-column prop="createTime" min-width="100px" align="center" label="创建时间">

      </el-table-column>
      <!--最后修改人-->
      <el-table-column prop="lastPerson" align="center" label="最后修改人" min-width="100px">
      </el-table-column>
      <!--最后修改时间 -->
      <el-table-column prop="lastTime" min-width="160px" align="center" label="最后修改时间">
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
        enterpriseInfo: [
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          },
          {
            number: '1',
            qyId: '2081',
            qyName: 'alibaba',
            qyPerson: '外星人',
            qyPhone: '1302203330',
            ptPerson: 'akja'
          }
        ]
      }
    },
    components: {
      formItem,
      filterContainer
    },
    methods: {
      handleClick(row){

        this.$router.push({path: '/newShopInfo', query: row })
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
