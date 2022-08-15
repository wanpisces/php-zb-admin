<template>
  <div>
    <basic-container>
      <div style="background:#fff;padding-bottom:40px;">
        <div style="text-align:center;padding-top:48px;">
          <img
            style="width:200px"
            src="/img/im_welcome.png"
          />
          <div style="color: #333333;font-size: 24px;font-weight: 400;margin:40px 0 56px;">
            欢迎使用北京市共有产权住房租赁服务后台管理
          </div>
        </div>
      </div>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wel",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["website"]),
  },
  methods: {},
};
</script>

<style scoped="scoped" lang="scss">
.wel-contailer {
  position: relative;
}

.banner-text {
  position: relative;
  padding: 0 20px;
  font-size: 20px;
  text-align: center;
  color: #333;
}

.banner-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  display: none;
}

.actor {
  height: 250px;
  overflow: hidden;
  font-size: 18px;
  color: #333;
}

.actor:after {
  content: "";
  width: 3px;
  height: 25px;
  vertical-align: -5px;
  margin-left: 5px;
  background-color: #333;
  display: inline-block;
  animation: blink 0.4s infinite alternate;
}

.typeing:after {
  animation: none;
}

@keyframes blink {
  to {
    opacity: 0;
  }
}
</style>
