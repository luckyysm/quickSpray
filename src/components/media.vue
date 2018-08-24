<template>
  <div class="img-upload">
    <div class="progress" v-if="showProgress && uploading">
      <div class="progress-bar progress-bar-striped progress-bar-success" :style="{width: progress + '%'}">
        {{progress}}%
      </div>
    </div>
    <img v-if="showImg && puri" ref="previewImg" :src="puri" />
    <div><input type="file" accept="image/*" @change="upload($event)" /></div>
		<!--<div v-if="showTip">{{tip}}</div> //todo 暂时隐藏-->
    <div><a v-if="editMode==='delete' && puri" href="javascript:;" @click.prevent="remove">删除</a></div>
  </div>
</template>

<style lang="scss" scoped>
.img-upload {
  display: inline-block;
  img {
    margin-bottom: 10px;
  }
  .progress {
    height: 14px;
    margin-bottom: 0;
    max-width: 200px;
  }
}
</style>

<script>
import AppUtils from "../utils.js";
export default {
  props: {
    showTip: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: ""
    },
    uri: {
      type: String,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: true
    },
    scaleShow: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 5
    },
    checkFileSize: {
      type: Boolean,
      default: true
    },
    previewScaleSize: {
      //实际缩放的比例
      type: Object,
      default: () => ({ w: 400, h: 300 })
    },
    previewSlim: {
      type: Boolean,
      default: true
    },
    attachment: {
      type: Object,
      default: null
    },
    editMode: {
      type: String,
      default: "direct" //direct|delete 直接上传替换|先删除再替换，后者可以设置一个图片资源为空
    }
  },
  watch: {
    attachment(val) {
      this.attachment = val;
      this.puri = val && val.uri ? val.uri + this.previewParams : "";
    }
  },
  data() {
    return {
      showImg: true,
      uploading: false,
      puri:
        this.attachment && this.attachment.uri
          ? this.attachment.uri + this.previewParams
          : "",
      progress: 0
    };
  },
  computed: {
    scaleStyle() {
      if (this.scaleShow) {
        return {
          maxWidth: this.previewScaleSize.w + "px",
          maxHeight: this.previewScaleSize.h + "px"
        };
      }
      return {};
    },
    previewParams() {
      return this.scaleShow
        ? `?imageMogr2/thumbnail/${this.previewScaleSize.w}x${this
            .previewScaleSize.h}/blur/1x0/quality/100${this.previewSlim
            ? "|imageslim"
            : ""}`
        : "";
    }
  },
  methods: {
    upload(e) {
      let file = e.target.files[0];
      if (!file) {
        return;
      } else if (this.checkFileSize && file.size > this.maxSize) {
        AppUtils.alert("文件最大尺寸不超过5M");
        return;
      }
      this.showImg = false;
      this.fetchToken().then(token => {
        if (token) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("token", token);
          this.uploading = true;
          const self = this;
          $.ajax({
            type: "post",
            url: QINIU_UPLOAD_URL,
            data: formData,
            xhr() {
              let myXhr = $.ajaxSettings.xhr();
              if (myXhr.upload) {
                myXhr.upload.addEventListener(
                  "progress",
                  self.setProgress,
                  false
                );
              }
              return myXhr;
            },
            cache: false,
            contentType: false,
            processData: false,
            success(data) {
              self.showImg = true;
              self.puri = data.link + self.previewParams;
              self.progress = 0;
              self.uploading = false;
              self.addAttachment({
                filename: file.name,
                uri: data.link,
                mimetype: file.type
              });
            },
            error(data) {}
          });
          // this.$http.post(QINIU_UPLOAD_URL, formData, {
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //     'Accept': '*/*'
          //   },
          //   onUploadProgress: (pe) => {
          //     console.log(pe) //todo 就是不触发，先用jquery顶着
          //     if(pe.lengthComputable && this.showProgress) {
          //       this.progress = Math.round(pe.loaded * 100 / pe.total)
          //     }
          //   }
          // }).then(response => {
          //   if(response.status === 200) {
          //     this.showImg = true
          //     const data = response.data
          //     this.$emit('mediaChanged', data.link)
          //     this.puri = data.link
          //   }
          //   this.progress = 0
          //   this.uploading = false
          // })
        }
      });
    },
    setProgress(pe) {
      if (pe.lengthComputable && this.showProgress) {
        this.progress = Math.round(pe.loaded * 100 / pe.total);
      }
    },
    remove() {
      this.showImg = false;
      this.puri = "";
      this.$emit("mediaChanged", null);
    },
    fetchToken() {
      return this.$http.get("/api/uploadToken").then(response => {
        if (AppUtils.checkResponse(response.data)) {
          return response.data.token;
        }
        return null;
      });
    },
    addAttachment(obj) {
      this.$http.post("/api/media/create", obj).then(response => {
        if (AppUtils.checkResponse(response.data)) {
          this.$emit("mediaChanged", response.data.item);
        }
      });
    }
  }
};
</script>
