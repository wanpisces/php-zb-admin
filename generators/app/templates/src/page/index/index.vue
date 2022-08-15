<template>
  <div class="avue-contail" :class="{ 'avue--collapse': isCollapse }">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top />
    </div>

    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <tags />
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view class="avue-view" v-if="$route.meta.$keepAlive" />
          </keep-alive>
          <router-view class="avue-view" v-if="!$route.meta.$keepAlive" />
        </el-scrollbar>
      </div>
    </div>
    <div class="avue-shade" @click="showCollapse"></div>
  </div>
</template>

<script>
import { getEnum, getFileConfig } from "@/api/common";
import { mapGetters } from "vuex";
import tags from "./tags";
import top from "./top/";
import sidebar from "./sidebar/";
import admin from "@/util/admin";
import { validatenull } from "@/util/validate";
import { calcDate } from "@/util/date.js";
import { getStore } from "@/util/store.js";
import { mqUrl } from "@/config/env";
import Stomp from "stompjs";
export default {
  components: {
    top,
    tags,
    sidebar
  },
  name: "index",
  data() {
    return {
      mqUrl,
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: ""
    };
  },
  created() {
    //实时检测刷新token
    this.refreshToken();
    //获取状态翻译
    getEnum().then(res => {
      if (res.data.code == 0) {
        this.$store.commit("SET_ENUM", res.data.data);
      }
    });
    getFileConfig().then(res => {
      if (res.data.code == 0) {
        this.$store.commit("SET_FILE_HOST", res.data.data);
      }
    });
  },
  destroyed() {
    clearInterval(this.refreshTime);
  },
  mounted() {
    this.wsConnect();
    this.init();
  },
  computed: mapGetters([
    "userInfo",
    "isLock",
    "isCollapse",
    "website",
    "expires_in",
    "uuid"
  ]),
  props: [],
  methods: {
    wsConnect() {
      var url = this.mqUrl;
      // var url = 'ws://'+window.location.host+'/message/stomp';
      this.stompClient = Stomp.client(url);
      var _this = this;

      this.stompClient.connect({}, function(frame) {
        _this.stompClient.subscribe("/topic/topic.export.house", function(greeting) {
          var json = JSON.parse(greeting.body);
          const uuid = _this.uuid;
          if (json.uuid === uuid) {
            _this.$store.commit('SET_UUID','')
            _this
              .$confirm(json.content, json.title, {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              })
              .then(() => {
                let oA = document.createElement("a");
                oA.style.display = "none";
                oA.download = "房源信息管理.xlsx";
                oA.href = json.url;
                oA.click();
                if (document.body.contains(oA)) {
                  document.body.removeChild(oA);
                }
              })
              .catch(() => {});
          }
        });
      });
    },
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    // 屏幕检测
    init() {
      this.$store.commit("SET_SCREEN", admin.getScreen());
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit("SET_SCREEN", admin.getScreen());
        }, 0);
      };
    },
    // 实时检测刷新token
    refreshToken() {
      this.refreshTime = setInterval(() => {
        const token = getStore({
          name: "access_token",
          debug: true
        });

        if (validatenull(token)) {
          return;
        }

        if (this.expires_in <= 1000 && !this.refreshLock) {
          this.refreshLock = true;
          this.$store.dispatch("RefreshToken").catch(() => {
            clearInterval(this.refreshTime);
          });
          this.refreshLock = false;
        }
        this.$store.commit("SET_EXPIRES_IN", this.expires_in - 10);
      }, 10000);
    }
  }
};
</script>
