<template>
  <div>
    <div class="clearfix">
      <div
        class="avatar-wrap lf"
        v-for="(item, index) in imageList"
        :key="index"
        :style="limit==1?'margin-right:0':'margin-right:32px'"
      >
        <img
          class="img-wrap"
          :src="isObj ? fileUrl + item.path : fileUrl + item"
        />
        <img
          class="ic_image_delete"
          v-if="deleteBtn"
          @click="handleRemove(item)"
          src="/img/ic_image_delete.png"
          alt=""
        />
      </div>
      <el-upload
        v-if="limit > imageList.length"
        class="avatar-uploader"
        action="..."
        :show-file-list="false"
        :http-request="httpUpload"
        :before-upload="beforeAvatarUpload"
        name="commonFileImage"
        list-type="picture-card"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <el-dialog
      :modal="false"
      :visible.sync="dialogVisible"
    >
      <img
        width="100%"
        :src="fileUrl + imageUrl"
        alt=""
      />
    </el-dialog>
  </div>
</template>

<script>
import { uploadImage } from "@/api/common";
import { fileUrl } from "@/config/env";
import "./index.scss";
export default {
  props: {
    limit: {
      type: Number,
      default: 1,
    }, //显示上传几张
    imageList: {
      type: Array,
      default() {
        return [];
      },
    },
    isObj: {
      type: Boolean,
      default: false,
    },
    textTip: {
      default: "请上传", //提示语
    },
    deleteBtn: {
      type: Boolean,
      default: true,
    },
    fileSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      fileUrl: fileUrl,
      imageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file) {
      let _index = this.imageList.indexOf(file);
      this.imageList.splice(_index, 1);
      this.$emit("uploadSuccess", this.imageList);
    },
    handlePreview(file) {
      this.imageUrl = file;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt10M = file.size / 1024 / 1024 < this.fileSize;
      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG或png 格式!");
        return isJPG;
      }
      if (!isLt10M) {
        this.$message.error("上传图片大小不能超过 " + this.fileSize + "MB!");
        return isLt10M;
      }
    },

    httpUpload(fileObj) {
      var formData = new FormData();
      formData.append("multipartFile", fileObj.file);
      formData.append("category", "COMMON_FILE");
      uploadImage(formData).then((res) => {
        let resData = res.data.data;
        resData.path = resData.fullPath;
        if (this.isObj) {
          this.imageList.push(resData);
        } else {
          this.imageList.push(resData.path);
        }
        this.$emit("uploadSuccess", this.imageList);
      });
    },
  },
};
</script>

<style scoped>
.img-wrap {
  border: 1px solid #eee;
  width: 100%;
  height: 100%;
}
</style>
