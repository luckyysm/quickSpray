<template>
  <form @submit.prevent="submit">
    <div :class="['searchBox',showFlag==1?'searchBrand':'']">
      <div class="brandLists" v-if="showFlag==1" @click="selectOptShow=!selectOptShow">
        <span>{{brandName?brandName:'品牌'}}</span>
        <i></i>
        <ul v-if="selectOptShow">
          <li v-for="(brand,index) in brands" :key="index" @click="brandId=brand.id;brandName=brand.name">{{ brand.name}}</li>
        </ul>
      </div>
      <input :placeholder="placeholder" type="text" v-model="searchCon">
      <!--<a href="javascript:;"></a>-->
      <button type="submit"></button>
    </div>
  </form>
</template>
<style lang="scss" scoped>
  .searchBox {
    display: flex;
  }

  .searchBrand {
    position: relative;
    & > input {
      padding-left: 120px !important;
    }
    .brandLists {
      position: absolute;
      width: 88px;
      height: 50px;
      line-height: 50px;
      left: 0;
      top: 0;
      cursor: pointer;
      user-select: none;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -15px;
        height: 30px;
        width: 1px;
        background-color: #e5e5e5;
      }
      span {

      }
      i {

        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #e5e2e5;
        display: inline-block;
        margin-left: 20px;
      }
      ul {
        position: absolute;
        top: 51px;
        left: 0;
        width: 100%;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        li {
          text-align: left;
          text-indent: 13px;
          line-height: 30px;

          &:hover {
            background-color: #f2f2f2;
          }
        }
      }
    }
  }

  .searchBox input {
    width: 460px;
    height: 50px;
    border: 1px solid #e5e5e5;
    padding-left: 20px;
    box-sizing: border-box;
  }

  .searchBox button {
    display: block;
    width: 70px;
    background: #0064FF url(../assets/images/icon/search_icon.png) no-repeat center;
    background-size: 24px 24px;
    /*height: 50px;*/
    margin-left: 20px;
  }
</style>
<script>
  export default {
    props: ["placeholder", "showFlag"],
    data() {
      return {
        brands: [{name:'奔驰',id:1}, {name:'宝马',id:2},{name:'奥迪',id:3}],
        brandId: '',
        brandName:'',
        selectOptShow: false,
        searchCon: ''
      };
    },
    mounted() {

    },
    methods: {
      submit() {
        if (!this.searchCon) {
          this.$message.warning(this.placeholder)
          return;
        }
        if (!this.brandId&&this.showFlag == 1) {
          this.$message.warning("请选择品牌");
          return;
        }
        this.$router.push({ path: '/accessories/search', query: { brandId:this.brandId,searchCon:this.searchCon }})
      }
    }
  };
</script>
