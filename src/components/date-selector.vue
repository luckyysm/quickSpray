<template>

<div class="inlineBlock">
  <el-date-picker
    v-model="dateRange.from"
    type="date"
    format="yyyy-MM-dd"
    placeholder="请输入起始时间"
    :picker-options="pickerOptions"
    class="activity-edit-date">
  </el-date-picker>

  <el-date-picker
    v-model="dateRange.to"
    type="date"
    format="yyyy-MM-dd"
    placeholder="请输入截止时间"
    :picker-options="pickerOptions"
    class="activity-edit-date right">
  </el-date-picker>
</div>



</template>

<style lang="scss" scoped>

</style>

<script>
import dateFormat from "dateformat";

export default {
  props: {
    inline: {
      type: Boolean,
      default: () => true
    },
    value: {
      type: String,
      default: () => "day"
    }
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      activeName: null,
      dateRange: {
        from: "",
        to: ""
      },
      // selectedIndex: -1,
      // selectors: [
      //   { value: "day", text: "日" },
      //   { value: "week", text: "周" },
      //   { value: "month", text: "月" }
      // ],
      pickerOptions: {
        disabledDate(time) {
          // 今天之后的日子都不可选择
          return time.getTime() > Date.now();
        }
      }
    };
  },
  mounted() {
    // this.mapValueToSelect();
    const a = dateFormat(Date.now(), "yyyy-mm-dd");
  },
  watch: {
    // selectedIndex(value) {
    //   if (value === -1) {
    //     return;
    //   }
    //   const v = this.selectors[value].value;
    //   // const {from, to} = this.calculateDate(v)
    //   // this.$emit('change', v)
    //   // this.dateRange = {
    //   //   from: new Date(from),
    //   //   to: new Date(to)
    //   // }
    //   // this.$emit("dateChange", {
    //   //   type: v,
    //   //   to: dateFormat(Date.now(), "yyyy-mm-dd")
    //   // });
    // },
    // value(v) {
    //   // this.mapValueToSelect();
    // }
  },
  methods: {
    // mapValueToSelect() {
    //   const index = this.selectors.findIndex(i => i.value === this.value);
    //   if (index > -1) {
    //     this.selectedIndex = index;
    //   }
    // },
    calculateDate(rangeName) {
      const to = Date.now();
      const daySpan = 3600000 * 24;
      let span = 0;
      switch (rangeName) {
        case "day":
          span = daySpan;
          break;
        case "week":
          span = daySpan * 7;
          break;
        case "month":
          span = daySpan * 30;
          break;
      }
      const from = to - span;
      return {
        from,
        to
      };
    },
    customPick() {
      // this.selectedIndex = -1;
      if (this.dateRange.from && this.dateRange.to) {
        this.$emit("dateChange", {
          type: "custom",
          from: dateFormat(this.dateRange.from, "yyyy-mm-dd"),
          to: dateFormat(this.dateRange.to, "yyyy-mm-dd")
        });
      }
    }
  }
};
</script>
