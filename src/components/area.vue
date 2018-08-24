<template>
  <div v-if="showMaskFlag" class="area-box">
    <div class="container posCent">
      <div class="mask-title">
        <span>新增收货人地址</span>
        <a class="close" href="javascript:;" @click="maskHide"></a>
      </div>
      <form @submit.prevent="maskHide">
        <div class="form-group">
          <div class="left">
            *所在地区
          </div>
          <div class="row right">
            <div class="col">
              <select v-model="f.p" @change="selpro">
                <option :value="i" v-for="(v,i) in pro" :key="i">{{v.name}}</option>
              </select>
            </div>
            <div class="col">
              <select v-model="f.c" @change="selcity">
                <option :value="i" v-for="(v,i) in city" :key="i">{{v.name}}</option>
              </select>
            </div>
            <div class="col">
              <select v-model="f.cc" v-show="county.length>0" @change="result">
                <option :value="i" v-for="(v,i) in county" :key="i">{{v.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="left">
            *收货人
          </div>
          <div class="right">
            <input class="text" type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="left">
            *详细地址
          </div>
          <div class="right text-box">
            <textarea class="text"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="left">
            *手机号码
          </div>
          <div class="right">
            <input class="text" type="text">
          </div>
        </div>
        <div class="bot">
          <button class="submit" type="submit">保存</button>
        </div>
      </form>


    </div>
  </div>

</template>

<style lang="scss" scoped>
  .area-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 9999;
    .container {
      width: 480px;
      height: 400px;
      background-color: #fff;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .14), 0 4px 5px 0 rgba(0, 0, 0, .098), 0 1px 10px 0 rgba(0, 0, 0, .084);
    }
    .mask-title{
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px ;
      border-bottom: 1px solid #e5e5e5;
      a{
        display: block;
        height: 28px;
        width: 28px;
        background: url("../assets/images/icon/close_icon.png") no-repeat;
        background-size: cover;

      }
    }
    .form-group {
      display: flex;
      margin-top: 15px;
      line-height: 36px;
      font-size: 12px;
      .left {
        width: 90px;
        text-align: right;
        margin-right: 16px;
      }

      .right {
        width: 312px;
      }
      .text-box{
        height: 62px;
      }
      input {
        width: 290px;
        height: 34px;
        padding-left: 20px;
        border: 1px solid #e5e5e5;
        font-size: 12px;
      }
      input:focus,textarea:focus {
        border-color: #0064FF;
      }
      textarea{
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        outline: none;
        border-color: #e5e5e5;
        resize: none;
      }
    }
    .bot{
      width: 100%;
      text-align: center;
      .submit{
        margin: 40px 0;
        width: 80px;
        border-radius: 3px;
      }
    }
  }

  .area-box.show {
    transition: all .33s cubic-bezier(.25, .8, .25, 1);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .col {
    /*flex-grow: 1;*/
  }

  select {
    width: 90px;
    height: 34px;
    border: 1px solid #e5e5e5;
    outline: none;
    cursor: pointer;
  }
  select:focus , select:focus option{
    border-color: #0064FF;
  }

</style>

<script>
  export default {
    props: ["area"],
    data() {
      return {
        pro: "",
        city: "",
        county: "",
        f: {
          p: 0,
          c: 0,
          cc: 0
        }
      };
    },
    async created() {
      this.data = (await import("./data")).default;
      console.log(this.data)
      this.pro = this.data;
      const area = JSON.parse(this.area);
      if (!area) {
        this.city = this.pro[0]["child"];
        this.county = this.city[0]["child"];
        this.result();
      } else {
        this.city = this.pro.find(r => r.id == area.pro.id)["child"];
        this.county = this.city.find(r => r.id == area.city.id)["child"];
        this.pro.find((r, i) => {
          if (r.id == area.pro.id) {
            this.f.p = i;
          }
        });
        this.city.find((r, i) => {
          if (r.id == area.city.id) {
            this.f.c = i;
          }
        });
        this.county.find((r, i) => {
          if (r.id == area.county.id) {
            this.f.cc = i;
          }
        });
      }
    },
    computed:{
      showMaskFlag() {
        return this.$store.state.showMaskFlag;
      },
    },
    methods: {
      selpro() {
        this.city = this.pro[this.f.p]["child"];
        this.county = this.city[0]["child"];
        this.f.c = 0;
        this.f.cc = 0;
        this.result();
      },
      selcity() {
        this.county = this.city[this.f.c]["child"];
        this.f.cc = 0;
        this.result();
      },
      result() {
        let re = {
          pro: {
            id: this.pro[this.f.p].id,
            name: this.pro[this.f.p].name
          },
          city: {
            id: this.city[this.f.c].id,
            name: this.city[this.f.c].name
          },
          county: {
            id: this.county[this.f.cc].id,
            name: this.county[this.f.cc].name
          }
        };
        this.$emit("select", re);
      },
      maskHide(){
        this.$store.dispatch("hideMaskLayer")
      }
    }
  };
</script>
