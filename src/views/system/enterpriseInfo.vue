<template>
  <div>
    <!--搜索-->
    <div class="search">
      <filterContainer>
        <form-item name='企业名称'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入企业名称"
                    v-model="enterpriseInfo.qyName"></el-input>
        </form-item>
        <form-item name='销售单号'>
          <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="请输入销售单号"
                    v-model="enterpriseInfo.Code"></el-input>
        </form-item>
        <form-item>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
          <el-button class="filter-item" type="primary" @click="dialogFormVisible = true">新增</el-button>
        </form-item>
      </filterContainer>

      <el-dialog :visible.sync="dialogFormVisible" :show-close="false" width="40%" center>
        <div class="dialog_header_warp">
          <div class="dialog_header">
            <div class="_title">新增企业</div>
            <div class="icon" @click="dialogFormVisible=false">X</div>
          </div>
        </div>
        <el-form :model="addEnterpriseInfo" class="addForm" style="margin: 20px 0 0 50px">
          <el-form-item label="企业名称" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.qyName" placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业联系人" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.qyPerson" placeholder="企业联系人"></el-input>
          </el-form-item>
          <el-form-item label="企业联系电话" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.qyPhone" placeholder="企业联系电话"></el-input>
          </el-form-item>
          <el-form-item label="平台负责人" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.ptPerson" placeholder="平台负责人"></el-input>
          </el-form-item>
          <el-form-item label="平台联系电话" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.ptPhone" placeholder="平台联系电话"></el-input>
          </el-form-item>
          <!--还差个所在地区的组件-->
          <el-form-item label="详细地址" labelWidth="100px">
            <el-input v-model="addEnterpriseInfo.addressInfo" placeholder="详细地址"></el-input>
          </el-form-item>
          <el-form-item label="备注" labelWidth="100px">
            <el-input
              type="textarea"
              :rows="2"
              maxlength="120"
              style="width: 288px; height: 94px;"
              placeholder="请输入内容"
              v-model="addEnterpriseInfo.remark">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addSubmit">保存</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </div>
      </el-dialog>

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

      <!--企业ID-->
      <el-table-column prop="qyId" min-width="80px" align="center" label="企业ID">
      </el-table-column>
      <!--企业名称-->
      <el-table-column prop="qyName" min-width="80px" align="center" label="企业名称">
      </el-table-column>
      <!--企业联系人-->
      <el-table-column prop="qyPerson" min-width="100px" align="center" label="企业联系人">
      </el-table-column>
      <!--企业联系人电话-->
      <el-table-column prop="qyPhone" min-width="110px" align="center" label="联系人电话">
      </el-table-column>
      <!--平台负责人-->
      <el-table-column prop="ptPerson" min-width="100px" align="center" label="平台负责人">
      </el-table-column>
      <!--负责人电话-->
      <el-table-column prop="ptPhone" min-width="110px" align="center" label="负责人电话">
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
        dialogFormVisible: false,
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
        ],
        currentPage1: '',
        addEnterpriseInfo: {},
//        formLabelWidth: '80px'
      }
    },
    components: {
      formItem,
      filterContainer
    },
    methods: {
      handleFilter(){
        console.log(this.enterpriseInfo)
      },
      // 编辑
      handleClick(row){
        console.log(row)
        this.dialogFormVisible = true
        this.addEnterpriseInfo = row
      },
      addSubmit(){
        console.log(this.addEnterpriseInfo)
        this.dialogFormVisible = false
      },
      // 新增表单  取消
      cancelAdd() {
        this.addEnterpriseInfo = {}
        this.dialogFormVisible = false
      },
      // 分页
      handleSizeChange(){

      },
      handleCurrentChange(){

      }

    }
  }
</script>
<style scoped>
  .table {
    width: 97%;
    height: 548px;
    background-color: #fff;
    border-radius: 6px;
    margin: 10px 15px;
  }

  .dialog_header_warp {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .dialog_header {
    width: 100%;
    height: 47px;
    display: flex;;
    justify-content: space-between;
    border-bottom: 1px solid #ECF1F4;
  }

  ._title {
    height: 47px;
    line-height: 47px;
    font-size: 14px;
    color: #0056FF;
    margin-left: 22px;
  }

  .filter-item {

  }

  .icon {
    height: 47px;
    line-height: 47px;
    margin-right: 14px;
    cursor: pointer;
  }
</style>
