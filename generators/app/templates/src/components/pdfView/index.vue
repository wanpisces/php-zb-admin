<template>
  <div style="height:670px;width:954px;overflow:hidden">
    <iframe :src="pdfUrl+'#zoom=127&scrollbars=0&toolbar=0&statusbar=0'" class="iframe" ref="iframe"></iframe>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getFileBlob } from "@/api/common";
export default {
  name: "AvueIframe",
  data() {
    return {
    };
  },
  created() {
    NProgress.configure({ showSpinner: false });
  },
  mounted() {},
  props: ["pdfUrl"],
  components: {
    ...mapGetters(["screen"])
  },
  methods: {
    init(pdfUrl) {
      pdfUrl = "/" + pdfUrl+'#zoom=127&scrollbars=0&toolbar=0&statusbar=0';
      this.pdfUrl =pdfUrl;
    },
    // 将返回的流数据转换为url
    getObjectURL(file) {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        try {
          url = window.webkitURL.createObjectURL(file);
        } catch (error) {}
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        try {
          url = window.URL.createObjectURL(file);
        } catch (error) {}
      }
      url = window.URL.createObjectURL(file);
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.iframe {
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
  width: 1080px;
  margin-left: -40px;
  margin-top: -70px;
  height: 748px;
}
</style>
