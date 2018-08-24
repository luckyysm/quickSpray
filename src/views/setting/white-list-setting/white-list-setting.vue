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
        <div class="addWhiteName" @click="addWhite">添加白名单</div>
      </div>
      <div class="table_layout bg_fff border">
        <div class="table_scroll  ">
          <table class="table">
            <thead>
            <tr>
              <th>序号</th>
              <th>创建时间</th>
              <th>公司名称</th>
              <th>联系方式</th>
              <th>联系人</th>
              <th>操作人员</th>
              <th>状态</th>
              <th>操作</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in arrData" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.createTime}}</td>
              <td>{{item.company}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.people}}</td>
              <td>{{item.operatePeople}}</td>
              <td>{{item.status}}</td>
              <td>
                <span class="btn">{{item.operateStatus}}</span>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
      <white-add v-show="addShow" :addShow="addShow" @changeShow="changeShow"></white-add>
    </div>
  </div>
</template>

<script>
  import whiteAdd from './white-add'
  export default {
    name:'white-list-setting',
    components: {
      whiteAdd
    },
    data(){
      return{
        tabShow:0,
        addShow: false,
        tabLists:['全部','已启用','已禁止'],
        arrData: [
          {
            isTrue: false,
            createTime: '2018-05-23',
            company: 'nks',
            phone: '1837281983',
            people: 'aaa',
            operatePeople: 'aa',
            status: '未审核',
            operateStatus: '启用'
          },
          {
            isTrue: false,
            createTime: '2018-05-23',
            company: 'nks',
            phone: '1837281983',
            people: 'aaa',
            operatePeople: 'aa',
            status: '未审核',
            operateStatus: '启用'
          },
          {
            isTrue: false,
            createTime: '2018-05-23',
            company: 'nks',
            phone: '1837281983',
            people: 'aaa',
            operatePeople: 'aa',
            status: '未审核',
            operateStatus: '启用'
          }
        ]
      }
    },
    methods: {
      // 打开弹窗
      addWhite: function () {
        this.addShow = true
      },
      // 关闭弹窗
      changeShow: function () {
        this.addShow = false
      }
    },

  }
</script>

<style scoped>
  .table_nav{
    position:relative;
  }
  .addWhiteName{
    position:absolute;
    right:20px;
    top:5px;
    width:100px;
    height:30px;
    color:#fff;
    font-size:14px;
    background: #0064FF;
    /*border:1px solid #BBBBBB;*/
    line-height: 30px;
    border-radius: 4px;
  }
</style>

