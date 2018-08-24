<!--搜索配件-->
<template>
  <div class="search-accessories">
    <div>
      <div class="searchWrap posCent">
        <div class="tabs">
          <div :class="showFlag==0?'active':''" @click="showFlag=0">VIN码</div>
          <div :class="showFlag==1?'active':''" @click="showFlag=1">配件编号</div>
        </div>
        <nt-search v-if="showFlag==0" :showFlag="showFlag" :placeholder="'请输入商品名称'" key="0"></nt-search>
        <nt-search v-else :showFlag="showFlag" :placeholder="'请输入配件编号'" key="1"></nt-search>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "search-accessories",
      data() {
        return {
          showFlag: 0,
        };
      },
    }
</script>

<style lang="scss" scoped>
  .search-accessories{
    padding: 0 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    &>div{
      background-color: #fff;
      width: 100%;
      height: 100%;
    }
  }
  .searchWrap {
    width: 543px;
    height: 100px;
    z-index: 1;
  }

  .tabs {
    /*width: 543px;*/
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: flex-start;
    color: #000;
    margin-bottom: 20px;
  }

  .tabs>div:first-child {
    margin-right: 30px;
  }

  .tabs>div {
    cursor: pointer;
    border-bottom: 1px solid transparent;
    user-select: none;
  }

  .tabs>div.active {
    border-color: #0064FF;
  }

</style>
