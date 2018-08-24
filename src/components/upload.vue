
<template>
  <div>
    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
    <!--:show-file-list="false"-->
    <!--:on-success="handleAvatarSuccess"-->
    <!--:before-upload="beforeAvatarUpload">-->
    <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
    <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      list-type="picture-card"
      :limit="limit"
      :accept="'image/gif,image/jpg,image/png,image/jpeg,image/bmp'">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name:'upload',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit:10,
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      // handlePictureCardPreview(file) {
      //   this.dialogImageUrl = file.url;
      //   this.dialogVisible = true;
      // }
    }
  }
</script>
