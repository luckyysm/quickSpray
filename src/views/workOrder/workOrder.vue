<template>
  <div class="app-container calendar-list-container">
    <filterContainer>
      <!-- 工单信息 -->
      <!-- 第一行 -->
      <el-row>
        <el-col :span = "6">
          <form-item name='客户名称'>
            <el-input @keyup.enter.native="handleFilter" style="width: 210px;" class="filter-item" placeholder="请输入客户名称" v-model="listQuery.cpOrderId"></el-input>
          </form-item>
        </el-col>
        <el-col :span = "6">
          <form-item name='客户手机'>
            <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户手机号" v-model="listQuery.phone"></el-input>
          </form-item>
        </el-col>
        <el-col :span = "6">
          <form-item name='客户性别'>
            <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
          </form-item>
        </el-col>
        <el-col :span = "6">
          <form-item name="客户来源">
            <el-select v-model="formInline.region" placeholder="客户来源">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="京东旗舰店 " value="beijing"></el-option>
            </el-select>
          </form-item>
        </el-col>
        
        
      </el-row>
      <!--第二行-->
      <el-row>
        <el-col :span="6">
        <form-item name="车牌号码">
        <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-col>
      <el-col :span="6">
        <form-item name="车型信息">
        <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-col>
      <el-col :span="6">
        <form-item name="车身颜色">
        <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-col>
      <el-col :span="6">
        <form-item name="备注">
        <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-col>
      </el-row>

      <!-- 第三行 -->
      <el-row>
        <el-col :span="6">
          <form-item name="到店时间">
            <el-date-picker
              v-model="listQuery.time_start"
              type="date"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </form-item>
        </el-col>
        <el-col :span="6">
          <form-item name="交车时间">
            <el-date-picker
              v-model="listQuery.time_start"
              type="date"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </form-item>
        </el-col>
        <el-col :span="6">
          <form-item name="消费门店">
            <el-input @keyup.enter.native="handleFilter" style="width: 210px" class="filter-item" placeholder="" v-model="listQuery.sex"></el-input>
          </form-item>
        </el-col>
      </el-row>
      <!--<el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>-->
    </filterContainer>
    <!-- 验证码信息 -->
    <filterContainer>
      <div class="codemessage">
      <div class="left"></div>
      <div class="right">
        <el-row class="fontColor">
          <el-col :span="12">
            <form-item>
              <el-input placeholder="请输入消费验证码"></el-input>
            </form-item>
            <span class="addButton ownButton pointer">添加</span>
            <span class="deleteButton ownButton pointer">删除</span>
            <span class="pointer" style="margin-left:15px">>>查看未消费商品</span>

          </el-col>
          <el-col :span="6" :offset="4" class="elColor">
            <span>喷漆：0.00</span>
            <span>钣金：0.00</span>
            <span>取送车：0.00</span>
          </el-col>
        </el-row>
         <!--表格-->
        <el-table>
          <el-table-column min-width="160px" align="center" label="消费验证码">
            <template slot-scope="scope">
              <span>{{scope.row.cpOrderId}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="80px" align="center" label="商品名称">
            <template slot-scope="scope">
              <span>{{scope.row.userName}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="110px" align="center" label="商品价格">
            <template slot-scope="scope">
              <span>{{scope.row.userPhone}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="110px" align="center" label="服务类型">
            <template slot-scope="scope">
              <span>{{scope.row.phone}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="80px" align="center" label="销售单号">
            <template slot-scope="scope">
              <span>{{scope.row.productCount}}</span>
            </template>
          </el-table-column>
          <el-table-column min-width="80px" align="center" label="消费状态">
            <template slot-scope="scope">
              <span>{{scope.row.modelName}}</span>
            </template>
          </el-table-column>
        
        </el-table>
        
      </div>
    </div>

    </filterContainer>


  </div>
</template>

<script>
  import { filterContainer, formItem } from '@/components/ContentMain'

  export default {
    mixins: [global],
    // name: 'sellerIndex',
    name: 'workOrder',
    // directives: {
    //   waves
    // },
    data() {
      return {
        formInline: {
          user: '',
          phone: '',
          source: ''
        },
        activeName: 'first',
        tableData: [{
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
        multipleSelection: [],
        reportStatusConfig: [],
        reportStatus: '',
        CAN_CHANGE: 7,
        IDENT_FINISH: 22,
        HAS_CANCEL: 6,
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          pageSize: 20,
          listSn: undefined,
          sellerPhone: undefined,
          status: undefined,
          imei: '',
          sort: '+id',
          sex: ''
        },
        sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
        showAuditor: false,
        temp: {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          type: '',
          status: 'published'
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: '编辑',
          create: '创建'
        },
        brandList: [], // 品牌列表
        modelList: [], // 型号列表
        rules: {
          type: [{ required: true, message: 'type is required', trigger: 'change' }],
          timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
          title: [{ required: true, message: 'title is required', trigger: 'blur' }]
        }
      }
    },
    async created() {
      await this.getSellerOrderList()
      await this.fillBrandList()
      await this.getReportStatus()
    },
    methods: {
      // 新增
      add() {
        console.log('add!')
      },
      // 删除按钮
      dele() {
        console.log('dele!')
      },
      // 查询按钮
      onSubmit() {
        console.log('submit!')
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      getReportStatus() {
        canExportStatue().then(res => {
          this.reportStatusConfig = res.data
        })
      },
      updateIdentStatusToHaveAccept(listId) {
        this.$confirm('确认要更改为已收件？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          updateIdentStatusToHaveAccept({ listId }).then(res => {
            if (parseInt(res.code) === 0) {
              this.$message.success('操作成功')
              this.getSellerOrderList()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      cancelIdentLists(listId) {
        this.$confirm('确认取消当前卖单吗？, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          cancelIdentList({ listId }).then(res => {
            if (parseInt(res.code) === 0) {
              this.$message.success('取消成功')
              this.getSellerOrderList()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消失败'
          })
        })
      },
      // 动态加载品牌对应的机型
      loadQuoted(brandId) {
        return getIdentList({ brandId }).then(res => {
          this.modelList = res.data
        })
      },
      fillBrandList() {
        return getBrandList().then(res => {
          this.brandList = res.data
          console.log(res.data)
        })
      },
      getSellerOrderList() {
        this.listLoading = true
        getSellerOrderList(this.listQuery).then(response => {
          console.log(response.data)
          this.list = response.data.lists
          this.total = response.data.total
          this.listLoading = false
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getSellerOrderList()
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.getSellerOrderList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getSellerOrderList()
      },
      handleModifyStatus(row, status) {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
      },
      resetTemp() {
        this.temp = {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          status: 'published',
          type: ''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
            this.temp.author = '原创作者'
            // createArticle(this.temp).then(() => {
            //   this.list.unshift(this.temp)
            //   this.dialogFormVisible = false
            //   this.$notify({
            //     title: '成功',
            //     message: '创建成功',
            //     type: 'success',
            //     duration: 2000
            //   })
            // })
          }
        })
      },
      handleUpdate(row) {
        // this.temp = Object.assign({}, row) // copy obj
        // this.temp.timestamp = new Date(this.temp.timestamp)
        // this.dialogStatus = 'update'
        // this.dialogFormVisible = true
        // this.$nextTick(() => {
        //   this.$refs['dataForm'].clearValidate()
        // })
        this.$router.push({ path: '/order/seller-detail', query: { listId: row.listId }})
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)
            tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            // updateArticle(tempData).then(() => {
            //   for (const v of this.list) {
            //     if (v.id === this.temp.id) {
            //       const index = this.list.indexOf(v)
            //       this.list.splice(index, 1, this.temp)
            //       break
            //     }
            //   }
            //   this.dialogFormVisible = false
            //   this.$notify({
            //     title: '成功',
            //     message: '更新成功',
            //     type: 'success',
            //     duration: 2000
            //   })
            // })
          }
        })
      },
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
      },
      handleDownload() {

      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
      export_to_excel() {
        console.log(this.reportStatus)
        window.open('/admin/order/exportSellerPriceExcel?status=' + this.reportStatus)
      }
    },
    components: {
      filterContainer,
      formItem
    }
  }
</script>
<style scoped>
  .demo-form-inline{
    margin-top: 30px;
  }
  .container-wrapper{
    padding-left: 100px!important;
    line-height: 55px!important;
    margin-bottom: 10px!important;
  }
  .fontColor{
    color: #0056FF;
    font-size: 12px;
    
  }
  .elColor{
    color: #328CFD;
  }
  .ownButton{
    display: inline-block;
    width: 65px;
    line-height: 30px;
    background-color: #E0EAFF;
    border-radius: 3px;
  }
  .pointer{
    cursor: pointer;
  }


</style>

