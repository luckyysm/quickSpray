<template>
  <div class="app-container calendar-list-container">
    <filterContainer>
      <!--下单日期-->
      <form-item name='消费日期:'>
        <el-date-picker
          v-model="listQuery.time_start"
          type="date"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        -
        <el-date-picker
          v-model="listQuery.time_end"
          type="date"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </form-item>
      <form-item name='消费门店:'>
        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="客户名称" v-model="listQuery.cpOrderId"></el-input>
      </form-item>
      <form-item name='核销人:'>
        <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="核销人姓名" v-model="listQuery.cpOrderId"></el-input>
      </form-item>
      <!--渠道单号-->
      <form-item>
        <el-select v-model="formInline.region" placeholder="单号选择" style="width: 120px">
          <el-option label="销售单号" value="shanghai"></el-option>
          <el-option label="渠道单号" value="beijing"></el-option>
        </el-select>
        <el-input style="width: 200px; margin-left: 20px"></el-input>
      </form-item>
      <!--渠道来源-->
      <form-item name="渠道来源:">
        <el-select v-model="formInline.region" placeholder="渠道来源">
          <el-option label="全部" value="shanghai"></el-option>
          <el-option label="京东旗舰店 " value="beijing"></el-option>
        </el-select>
      </form-item>
      <!--预约门店-->
      <form-item>
        <el-select v-model="formInline.region" placeholder="消费码">
          <el-option label="全部" value="shanghai"></el-option>
          <el-option label="京东旗舰店 " value="beijing"></el-option>
        </el-select>
      </form-item>
      <form-item>
        <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter" >搜索</el-button>
      </form-item>
      <!--<el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>-->
    </filterContainer>
    <!--选项卡-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="未消费" name="second"></el-tab-pane>
      <el-tab-pane label="已消费" name="third"></el-tab-pane>
      <el-tab-pane label="已过期" name="four"></el-tab-pane>
      <el-tab-pane label="退款锁定" name="five"></el-tab-pane>
      <el-tab-pane label="已退款" name="six"></el-tab-pane>
    </el-tabs>
    <!--表格-->
    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              style="width: 100%">
      <el-table-column min-width="160px" align="center" label="序号">
        <template slot-scope="scope">
          <span>{{scope.row.cpOrderId}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="买家姓名">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="110px" align="center" label="买家手机号">
        <template slot-scope="scope">
          <span>{{scope.row.userPhone}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="110px" align="center" label="注册手机号">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column min-width="160px" align="center" label="买家注册时间">
        <template slot-scope="scope">
          <span>{{scope.row.user_created_at}}</span>
        </template>
      </el-table-column> -->
      <el-table-column min-width="80px" align="center" label="商品数量">
        <template slot-scope="scope">
          <span>{{scope.row.productCount}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="品牌">
        <template slot-scope="scope">
          <span>{{scope.row.modelName}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="容量">
        <template slot-scope="scope">
          <span>{{scope.row.rongliang}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="成色">
        <template slot-scope="scope">
          <span>{{scope.row.chengse}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="颜色">
        <template slot-scope="scope">
          <span>{{scope.row.yanse}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="80px" align="center" label="商品总额">
        <template slot-scope="scope">
          <span>{{scope.row.payPrice}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100px" align="center" label="钱包使用金额">
        <template slot-scope="scope">
          <span>{{scope.row.coinValue}}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" align="center" label="状态" min-width="80px">
        <template slot-scope="scope">
          <!-- <el-tag :type="scope.row.status | statusFilter">{{scope.row.status | statusFilter}}</el-tag> -->
          <span>{{scope.row.status | statusFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="160px" align="center" label="取消概况">
        <template slot-scope="scope">
          <span>{{cancelStatus(scope.row.overtime_or_cancel, scope.row.status)}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column min-width="160px" align="center" label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.updated_at }}</span>
        </template>
      </el-table-column> -->
      <el-table-column min-width="160px" align="center" label="下单时间">
        <template slot-scope="scope">
          <span>{{scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="160px" align="center" label="签收时间">
        <template slot-scope="scope">
          <span>{{scope.row.overTime | overTimeFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="280" class-name="small-padding">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row.orderId)">查看详情</el-button>
          <el-button type="warning" v-if="scope.row.status > 0" size="mini" @click="clearOrder(scope.row.orderId)">取消订单</el-button>
          <el-button type="success" size="mini" @click="handleReport(scope.row.orderId)">导出</el-button>
          <!-- <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">发布
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">草稿
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="类型" prop="type">
          <el-select class="filter-item" v-model="temp.type" placeholder="请选择">
            <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.val" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item label="点评">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确 定</el-button>
        <el-button v-else type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import { filterContainer, formItem } from '@/components/ContentMain'
export default{
  mixins: [global],
  name: 'consumerCode',

  data() {
    return {
      listQuery: {
        page: 1,
        pageSize: 20,
        listSn: undefined,
        sellerPhone: undefined,
        status: undefined,
        imei: '',
        sort: '+id'
      },
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
      calendarTypeOptions: [],
      reportStatus: '',
      CAN_CHANGE: 7,
      IDENT_FINISH: 22,
      HAS_CANCEL: 6,
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
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
    handleClick(tab, event) {
      console.log(tab, event)
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
</style>
