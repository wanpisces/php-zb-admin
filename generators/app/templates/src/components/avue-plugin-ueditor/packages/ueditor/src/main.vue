<template>
  <div class="avue-ueditor">
    <quill-editor
      :style="{
        height: `${minRows * 40 + 100}px`,
        maxHeight: `${maxRows * 40 + 100}px`
      }"
      v-model="text"
      :disabled="disabled"
      @change="handleChange"
      @click.native="handleClick"
      @dblclick.native="handleDbClick"
      ref="myQuillEditor"
      :options="editorOption"
    >
    </quill-editor>
    <!-- 上传文件 -->
    <el-upload
      :show-upload-list="false"
      :http-request="httpUpload"
      :before-upload="beforefileUpload"
      type="drag"
      :multiple="false"
      action="..."
      class="uploadFile"
    >
    </el-upload>
    <transition name="fade">
      <div class="avue-ueditor__dialog" v-if="box">
        <div class="avue-ueditor__mask" @click.stop="box = false"></div>
        <div class="avue-ueditor__content">
          <p class="avue-ueditor__tip" v-if="loading">正在上传，请稍后</p>
          <div class="avue-ueditor__img">
            <div class="avue-ueditor__img-left">
              <p>
                <small>宽度</small>:<input
                  type="text"
                  class="avue-ueditor__img-input"
                  v-model="img.width"
                />
              </p>
              <p>
                <small>高度</small>:<input
                  type="text"
                  class="avue-ueditor__img-input"
                  v-model="img.height"
                />
              </p>
            </div>
            <div class="avue-ueditor__img-right">
              <img
                :src="img.url"
                class="avue-ueditor__img-img"
                ref="img"
                :style="styles"
                alt=""
              />
            </div>
          </div>
          <div class="avue-ueditor__menu">
            <div class="avue-ueditor__upload" v-if="!isImg">
              <button class="avue-ueditor__btn">上 传</button>
              <input
                type="file"
                id="file"
                @change="handleUpload"
                class="avue-ueditor__file"
              />
            </div>
            &nbsp;
            <button class="avue-ueditor__btn" @click="handleSubmit">
              确 定
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import quillEditor from "vue-quill-editor/src/editor";
import { getClient } from "./upload/ali";
import { getToken } from "./upload/qiniu";
import { getObjValue } from "./upload/util";
import { uploadFile } from "@/api/common";
import { Quill } from "vue-quill-editor";
// 自定义插入a链接
var Link = Quill.import("formats/link");
class FileBlot extends Link {
  // 继承Link Blot
  static create(value) {
    let node = undefined;
    if (value && !value.href) {
      // 适应原本的Link Blot
      node = super.create(value);
    } else {
      // 自定义Link Blot
      node = super.create(value.href);
      // node.setAttribute('download', value.innerText);  // 左键点击即下载
      node.innerText = value.innerText;
      node.download = value.innerText;
    }
    return node;
  }
}
FileBlot.blotName = "link";
FileBlot.tagName = "A";
Quill.register(FileBlot);
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "upload"],
  ["clean"] // remove formatting button
];
export default {
  name: "AvueUeditor",
  components: {
    quillEditor
  },
  computed: {
    isImg() {
      return this.img.obj.src;
    },
    props() {
      return this.options.props || this.upload.props;
    },
    oss() {
      return this.options.oss || this.upload.oss;
    },
    action() {
      return this.options.action || this.upload.action;
    },
    config() {
      return this.options.config || this.upload.config;
    },
    qiniu() {
      return this.options.qiniu || this.upload.qiniu;
    },
    ali() {
      return this.options.ali || this.upload.ali;
    },
    styles() {
      if (this.img.width === 0 || this.img.height === 0) {
        return {};
      }
      return {
        width: this.img.width + "px",
        height: this.img.height + "px"
      };
    },
    isQiniuOSS() {
      return this.oss === "qiniu";
    },
    isAliOSS() {
      return this.oss === "ali";
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    upload: {
      type: Object,
      default: () => {
        return {};
      }
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    height: {
      default: ""
    },
    minRows: {
      type: Number,
      default: 8
    },
    maxRows: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      fileSize: 20,
      myQuillEditor: {},
      loading: false,
      text: undefined,
      box: false,
      img: {
        obj: {},
        url: "",
        width: 0,
        height: 0,
        calc: ""
      },
      editorOption: {
        placeholder: "请输入内容",
        readonly: false,
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              upload: value => {
                if (value) {
                  document.querySelector(".uploadFile input").click();
                }
              }
            }
          }
        }
      }
    };
  },
  watch: {
    "img.width"(n, o) {
      if (n === 0 || o === 0) return;
      this.img.height = parseInt(n * this.img.calc);
    },
    value() {
      this.text = this.value;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.myQuillEditor = this.$refs.myQuillEditor.quill;
    this.myQuillEditor
      .getModule("toolbar")
      .addHandler("image", this.imgHandler);
  },
  methods: {
    httpUpload(file, fileList) {
      var file = file.file;
      var fd = new FormData();
      fd.append("multipartFile", file);
      fd.append("category", "COMMON_FILE");
      uploadFile(fd)
        .then(res => {
          if (res.data.code == 0) {
            const resData = res.data.data;
            const index = this.myQuillEditor.getSelection().index; //获取光标位置
            this.myQuillEditor.insertEmbed(
              index,
              "link",
              { href: resData.fullPath, innerText: resData.fileName },
              "api"
            );
          }
        })
        .catch(err => {});
    },
    beforefileUpload(file, fileList) {
      const isLt20M = file.size / 1024 / 1024 < this.fileSize;
      let fileNameArr = file.name.split(".");
      const fileType = fileNameArr[fileNameArr.length - 1];
      if (fileType == "png" || fileType == "jpeg" || fileType == "jpg") {
        this.$message.error("不能上传png、jpg、jpeg格式的文件");
        return false;
      }
      if (!isLt20M) {
        this.$message.error("上传附件大小不能超过 " + this.fileSize + "MB!");
        return false;
      }
    },
    handleSubmit() {
      const index =
        this.myQuillEditor.selection.savedRange.index || this.text.length;
      if (this.isImg) {
        this.img.obj.width = this.$refs.img.width;
        this.img.obj.height = this.$refs.img.height;
      } else {
        this.myQuillEditor.insertEmbed(index, "image", this.img.url);
        this.myQuillEditor.focus();
      }
      this.img.obj = {};
      this.img.url = "";
      this.img.width = 0;
      this.img.height = 0;
      this.box = false;
    },
    handleUpload(e) {
      this.loading = true;
      const file = e.target.files[0];
      this.handleFile(file).then(() => {
        this.setImgParam();
      });
    },
    handleFile(file) {
      const _self = this;
      return new Promise(resolve => {
        const headers = { "Content-Type": "multipart/form-data" };
        let oss_config = {};
        let client;
        let param = new FormData();
        let url = _self.action;
        // 指定后台接收文件参数，默认为file
        let fileName = _self.config.uploadFileName;
        param.append(fileName ? fileName : "file", file);
        if (this.isQiniuOSS) {
          oss_config = this.qiniu;
          const token = getToken(oss_config.AK, oss_config.SK, {
            scope: oss_config.scope,
            deadline: new Date().getTime() + oss_config.deadline * 3600
          });
          param.append("token", token);
          url = "http://up.qiniu.com/";
        } else if (this.isAliOSS) {
          oss_config = this.ali;
          client = getClient({
            region: oss_config.region,
            endpoint: oss_config.endpoint,
            accessKeyId: oss_config.accessKeyId,
            accessKeySecret: oss_config.accessKeySecret,
            bucket: oss_config.bucket
          });
        }
        (() => {
          if (this.isAliOSS) {
            return client.put(file.name, file);
          } else {
            return this.$httpajax.post(url, param, { headers });
          }
        })().then(res => {
          let list = {};
          if (this.isAliOSS) {
            list = res;
            this.img.url = list.url;
          } else if (this.isQiniuOSS) {
            list = res.data;
            list.key = oss_config.url + list.key;
            this.img.url = list.key;
          } else {
            list = getObjValue(res.data, this.props.res, "object");
            this.img.url = list[this.props.url];
          }
          this.loading = false;
          resolve();
        });
      });
    },
    setImgParam() {
      const img = this.$refs.img;
      img.onload = () => {
        this.img.width = img.width;
        this.img.height = img.height;
        this.img.calc = img.height / img.width;
      };
    },
    imgHandler() {
      this.box = true;
    },
    init() {
      this.text = this.value;
      this.editorOption.placeholder = this.placeholder || "请输入内容";
      this.editorOption.readonly = this.readonly;
      this.handlePaste();
    },
    handlePaste() {
      //粘贴键
      document.addEventListener("paste", e => {
        //获取剪切板文件
        const getFile = event => {
          if (event.clipboardData || event.originalEvent) {
            var clipboardData =
              event.clipboardData || event.originalEvent.clipboardData;
            if (clipboardData.items) {
              var items = clipboardData.items,
                len = items.length,
                blob = null;
              for (var i = 0; i < len; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                  blob = items[i].getAsFile();
                  return blob;
                }
              }
            }
          }
        };
        const file = getFile(e);
        if (file) {
          this.box = true;
          this.handleFile(file).then(() => {
            this.setImgParam();
          });
        }
      });
    },

    handleClick() {
      if (typeof this.click === "function")
        this.click({ value: this.text, column: this.column });
    },
    handleDbClick(e) {
      if (e.target.nodeName == "IMG") {
        const img = e.target;
        this.img.obj = e.target;
        this.img.url = img.src;
        this.img.width = img.width;
        this.img.height = img.height;
        this.img.calc = img.height / img.width;
        this.box = true;
      }
    },
    handleChange(value) {
      if (typeof this.change === "function")
        this.change({ value: value.html, column: this.column });
      this.$emit("input", value.html);
      this.$emit("change", value.html);
    }
  }
};
</script>
<style lang="scss">
@import "../../theme-chack/src/index.scss";
.ql-snow.ql-toolbar .ql-upload {
  background-image: url("../images/upload-icon.png");
  background-size: 22px 22px;
  background-position: center center;
  background-repeat: no-repeat;
}
.ql-snow.ql-toolbar .ql-upload:hover {
  background-image: url("../images/upload-hover.png");
}
</style>
