<template>
  <div class="item-wrap">
    <span :style="{width: nameWidth+'px'}" class="item-name">
      {{name}}
    </span>
    <span class="item-main">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'formItem',
  props: {
    name: String,
    nameWidth: {
      type: String,
      default: '60'
    }
  }
}
</script>
<style scoped>
.item-wrap {
  /*padding: 10px;*/
  float: left;
  margin-right: 5px
}
.item-name {
  display: inline-block;
  width: 30px;
}
.item-main {
  width: 50%
}
.el-input {
  width: 200px
}
</style>


