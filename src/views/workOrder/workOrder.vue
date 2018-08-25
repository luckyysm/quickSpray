<template>
  <div class="app-container calendar-list-container">
    <filterContainer >
      <div class="aside aside_one">
        <div class="aside_wrap_one">
          <img src="../../icons/workmessage.png" alt="">
          <p>工单信息</p>
        </div>
      </div>
      <!-- 工单信息 -->
      <!-- 第一行 -->
      <div class="onewrap">
        <el-container>
     
        <form-item name='客户名称'>
          <el-input @keyup.enter.native="handleFilter" style="width: 190px;" class="filter-item" placeholder="请输入客户名称" v-model="listQuery.cpOrderId"></el-input>
        </form-item>
        <form-item name='客户手机'>
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入客户手机号" v-model="listQuery.phone"></el-input>
        </form-item>
        <form-item name='客户性别'>
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入客户性别" v-model="listQuery.sex"></el-input>
        </form-item>
        <form-item name="客户来源">
          <el-select v-model="formInline.region" placeholder="客户来源">
            <el-option label="全部" value="shanghai"></el-option>
            <el-option label="京东旗舰店 " value="beijing"></el-option>
          </el-select>
        </form-item>
      </el-container>
      <el-container>

        <form-item name="车牌号码">
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入车牌号码" v-model="listQuery.sex"></el-input>
        </form-item>
        <form-item name="车型信息" class="nomust">
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入车型信息" v-model="listQuery.sex"></el-input>
        </form-item>
        <form-item name="车身颜色">
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入车身颜色" v-model="listQuery.sex"></el-input>
        </form-item>
        <form-item name="备注" class="nomust">
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="请输入备注" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-container>
      <el-container>
        <form-item name="到店时间" class="nomust">
          <el-date-picker
            v-model="listQuery.time_start"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </form-item>
        <form-item name="交车时间" class="nomust">
          <el-date-picker
            v-model="listQuery.time_start"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </form-item>
        <form-item name="消费门店">
          <el-input @keyup.enter.native="handleFilter" style="width: 190px" class="filter-item" placeholder="" v-model="listQuery.sex"></el-input>
        </form-item>
      </el-container>
      </div>
    </filterContainer>
    <!-- 验证码信息 -->
    <filterContainer>
        <div class="aside aside_two">
          <div class="aside_wrap_two">
            <img src="../../icons/vertify.png" alt="">
            <p>验证码信息</p>
          </div>
        </div>
        <div class="twowrap">
          <div>
            <el-row class="fontColor">
              <el-col :span = "6" style="margin-left: -46px;">
                <!-- <form-item> -->
                  <el-input placeholder="请输入消费验证码"></el-input>
                <!-- </form-item> -->
              </el-col>
              <el-col :span = "2" class="addButton ownButton pointer">添加</el-col>
              <el-col :span = "2" class="deleteButton ownButton pointer">删除</el-col>
              <el-col :span = "3" class="pointer" >>>查看未消费商品</el-col>

              <el-col :span = "2" :offset = "4"><span>喷漆：0.00</span></el-col>
              <el-col :span = "2"><span>钣金：0.00</span></el-col>
              <el-col :span = "2"><span>取送车：0.00</span></el-col>

            </el-row>
          </div>
          <!--表格-->
          <div>
          
              <el-table
                  stripe
                  border
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="border:1px solid #ECF1F4 ;width: 97%; margin: 10px 15px; border-radius: 6px;font-size:12px;"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    align="center"
                    label="消费验证码"
                    width="100">
                    <template slot-scope="scope">{{ scope.row.code }}</template>
                  </el-table-column>
                  <!--操作-->
                  <el-table-column
                    prop="name"
                    align="center"
                    label="商品名称"
                    width="320">
                    <template slot-scope="scope">
                      {{ scope.row.name}}
                    </template>
                  </el-table-column>


                  <el-table-column
                    prop="brandId"
                    label="商品价格"
                    align="center"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                      {{ scope.row.price}}
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="brandName"
                    label="服务类型"
                    align="center"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                      {{ scope.row.service}}
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    align="center"
                    label="销售单号"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                      {{ scope.row.salenumber}}
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    label="消费状态"
                    align="center"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                      {{ scope.row.status}}
                    </template>
                  </el-table-column>
                </el-table>

          </div>
        </div>

    </filterContainer>
    <!-- 取车订单 -->
    <filterContainer>
      <div class="aside aside_three">
        <div class="aside_wrap_three">
          <img src="../../icons/getcar.png" alt="">
          <p>取车订单</p>
        </div>
      </div>
      <div class="threewrap">
        <div class="threecon">
          <div class="button-getcar ownButton pointer bluecolor font12" style="width:100px;">提交取车订单</div>
          <div class="three_inner">
            <div class="three_top">
              <div class="three_left" >
                <el-container>
                  <form-item name="取车时间">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>

                <el-container>
                  <div class="linkage">
                    
                    <form-item name="取车地点">
                      <el-select
                    v-model="sheng"
                    @click="choseProvince"
                    placeholder="省级地区">
                    <el-option
                      v-for="item in province"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="shi"
                    @change="choseCity"
                    placeholder="市级地区">
                    <el-option
                      v-for="item in shi1"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="qu"
                    @change="choseBlock"
                    placeholder="区级地区">
                    <el-option
                      v-for="item in qu1"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                    </form-item>
                  </div>

        
                </el-container>
                <el-container> 
                  <form-item name="" class="nomust">
                    <el-input placeholder="请输入详细地址" ></el-input>
                  </form-item>
        
                </el-container>
              </div>
              <div class="three_right">
                <el-container>
                  <form-item name="送达时间">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>

                <el-container>
                  <form-item name="送达地点">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>
                <el-container>
                  <form-item name="" class="nomust">
                    <el-input placeholder="请输入详细地址"></el-input>
                  </form-item>
        
                </el-container>

              </div>
            </div>
            <div class="three_bottom">
              <el-container>
                <form-item name="备注" class="nomust">
                  <el-input @keyup.enter.native="handleFilter" class="filter-item" placeholder=""></el-input>
                </form-item>
              </el-container>

            </div>


          </div>
        </div>
      </div>

    </filterContainer>

      <!--送车订单 -->
    <filterContainer>
      <div class="aside aside_three">
        <div class="aside_wrap_three">
          <img src="../../icons/getcar.png" alt="">
          <p>送车订单</p>
        </div>
      </div>
      <div class="threewrap">
        <div class="threecon">
          <div class="button-getcar ownButton pointer bluecolor font12" style="width:100px;">提交送车订单</div>
          <div class="three_inner">
            <div class="three_top">
              <div class="three_left" >
                <el-container>
                  <form-item name="送车时间">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>

                <el-container>
                  <div class="linkage">
                    
                    <form-item name="送车地点">
                      <el-select
                    v-model="sheng"
                    @click="choseProvince"
                    placeholder="省级地区">
                    <el-option
                      v-for="item in province"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="shi"
                    @change="choseCity"
                    placeholder="市级地区">
                    <el-option
                      v-for="item in shi1"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="qu"
                    @change="choseBlock"
                    placeholder="区级地区">
                    <el-option
                      v-for="item in qu1"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                    </form-item>
                  </div>

        
                </el-container>
                <el-container> 
                  <form-item name="" class="nomust">
                    <el-input placeholder="请输入详细地址" ></el-input>
                  </form-item>
        
                </el-container>
              </div>
              <div class="three_right">
                <el-container>
                  <form-item name="送达时间">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>

                <el-container>
                  <form-item name="送达地点">
                    <el-date-picker
                      v-model="listQuery.time_start"
                      type="date"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </form-item>
        
                </el-container>
                <el-container>
                  <form-item name="" class="nomust">
                    <el-input placeholder="请输入详细地址"></el-input>
                  </form-item>
        
                </el-container>

              </div>
            </div>
            <div class="three_bottom">
              <el-container>
                <form-item name="备注" class="nomust">
                  <el-input @keyup.enter.native="handleFilter" class="filter-item" placeholder=""></el-input>
                </form-item>
              </el-container>

            </div>


          </div>
        </div>
      </div>

    </filterContainer>
    <filterContainer>
      <el-container>
        <div style="width: 170px;margin: 0 auto;">
          <el-button type="primary">保存</el-button>
          <el-button type="cancek">取消</el-button>
        </div>
      </el-container>
    </filterContainer>

  </div>
</template>

<script>
  import { filterContainer, formItem } from '@/components/ContentMain';
  
  import axios from 'axios'

  export default {
    mixins: [global],
    // name: 'sellerIndex',
    name: 'workOrder',
    // directives: {
    //   waves
    // },
    data() {
      return {
        mapJson:'../../../static/json/map.json',
        province:'',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city:'',
        block:'',

        formInline: {
          user: '',
          phone: '',
          source: ''
        },
        activeName: 'first',
        tableData: [{
          code: '123456789',
          name: '汽车喷漆划痕修复汽车划痕车漆修复奔驰/宝马/奥迪汽车喷漆 1块（限新用户1车限购1块',
          price: '699.00',
          service: '取送车',
          salenumber: '20180920123456',
          status: '未消费'
        },{
          code: '123456789',
          name: '汽车喷漆划痕修复汽车划痕车漆修复奔驰/宝马/奥迪汽车喷漆 1块（限新用户1车限购1块',
          price: '699.00',
          service: '取送车',
          salenumber: '20180920123456',
          status: '已消费'
        },{
          code: '123456789',
          name: '汽车喷漆划痕修复汽车划痕车漆修复奔驰/宝马/奥迪汽车喷漆 1块（限新用户1车限购1块',
          price: '699.00',
          service: '取送车',
          salenumber: '20180920123456',
          status: '未消费'
        },{
          code: '123456789',
          name: '汽车喷漆划痕修复汽车划痕车漆修复奔驰/宝马/奥迪汽车喷漆 1块（限新用户1车限购1块',
          price: '699.00',
          service: '取送车',
          salenumber: '20180920123456',
          status: '未消费'
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
    // async created() {
    //   await this.getCityData()
    //   await this.getSellerOrderList()
    //   await this.fillBrandList()
    //   await this.getReportStatus()
    // },
    methods: {
      //省市联动
      // 加载china地点数据，三级
      getCityData(){
        var that = this
        console.log(0);
        axios.get(this.mapJson).then(function(response){
          console.log(response);
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince(e) {
        console.log(1)
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.E)
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.E=e;
        // console.log(this.E)
      },
      created:function(){
        this.getCityData()
      },


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
    line-height: 55px!important;
    margin-bottom: 10px!important;
    display:flex;
    -webkit-display:flex;
    padding: 30px 0!important;
  }
  .bluecolor{
    color: #0056FF;
  }
  .font12{
    font-size: 12px;

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
    margin-top: 13px;
    background-color: #E0EAFF;
    border-radius: 3px;
  }
  .addButton{
    margin-right: 6px;
  }
  .pointer{
    cursor: pointer;
  }
  .onewrap{
    border: 1px solid #ECF1F4;
    border-radius: 3px;
    font-size: 12px;
  }
  .aside{
    width: 100px;
    height: 100%;
  }
  .aside img{
    width: 42px;
    height: 42px;
  }
  .aside_wrap_one{
    line-height: 25px;
    margin-top: 45%;
  }
  .aside_wrap_two{
    line-height: 25px;
    margin-top: 190px;
  }
  .aside_wrap_three{
    line-height: 25px;
    margin-top: 126px;
  }
  .aside p{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #444444;
    letter-spacing: 0;
  }
  .aside_two{
    float: left;
  }
  .twowrap{
    flex: 1;
    margin-left: -16px;
  }
  .threewrap{
    display: flex;
    flex: 1;
    padding-right: 20px;
  }
  .three_inner{
    background: #FFFFFF;
    border: 1px solid #ECF1F4;
    border-radius: 3px;
    font-size: 12px;
    color: #000;
    opacity: 1!important;

  }
  .three_top{
    display: flex;
    border-bottom: 1px solid #ECF1F4;
  }
.three_top > div{
  flex:1;
}
.three_top .three_left{
  border-right: 1px solid #ECF1F4;
  padding: 10px 0 10px 18px;
}
.three_top .three_right{
  padding: 10px 0 10px 22px;

}
.three_bottom{
  padding: 10px 9px;
}

.threecon{
  width: 100%;
}
.button-getcar,.button-sendcar{
  display:inherit;
  margin-bottom:16px;

}
 .el-input .el-input__inner{
   width: 300px!important;
 }
 .item-wrap{
   position:relative;
 }
.item-wrap::after{
  content:"*";
  display: block;
  color:#0056FF;
  position: absolute;
  top: 3px;
  left: -3px;

}
.item-wrap.nomust::after{
  content:"";
}
</style>

