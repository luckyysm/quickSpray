<template>
  <section class="container-wrapper">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'filterContainer'
}
</script>

<style scoped>
.container-wrapper {
  padding: 10px;
  overflow: hidden;
  width: 97%;
  height: auto;
  background: #fff;
  border-radius: 6px;
  margin: 0 15px;
  line-height: 100px;
}
.el-row {
  margin: 20px
}
.filter-item {
  float: right;
}
.filter-item.left {
  float: left;
}
</style>


