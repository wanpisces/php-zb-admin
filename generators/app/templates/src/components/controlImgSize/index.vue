<template>
  <div
    class="imgwrap"
    :style="'width:' + this.initWidth + 'px;height:' + this.initHeight + 'px'"
    @mousewheel.prevent="rollImg"
  >
    <img :src="imgUrl" alt="" class="img" ref="imgDiv" @mousedown="move" />
  </div>
</template>
<script>
export default {
  props: {
    //图片路径
    imgUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      initWidth: 0,
      initHeight: 0,
      curWidth: 0,
      curHeight: 0,
      realZoom: 100
    };
  },
  mounted() {
    this.initFn();
  },
  methods: {
    initFn() {
      var img = document.querySelector(".img");
      this.initWidth = img.clientWidth;
      this.initHeight = img.clientHeight;
      this.realZoom = 100;
      this.$refs.imgDiv.style.transform = "scale(" + this.realZoom / 100 + ")";
      var img = document.querySelector(".img");
      img.style.left =  "0px";
      img.style.top = "0px";
    },
    // 拖动图片
    move(e) {
      e.preventDefault();
      const _this = this;
      // 获取元素
      var imgwrap = document.querySelector(".imgwrap");
      var img = document.querySelector(".img");
      var x = e.pageX - img.offsetLeft;
      var y = e.pageY - img.offsetTop;
      // console.log(img.getBoundingClientRect(),'asdasds')
      // 添加鼠标移动事件
      imgwrap.addEventListener("mousemove", move);
      function move(e) {
        let leftDis = e.pageX - x,
          topDis = e.pageY - y;
        _this.countPos(leftDis, topDis);
      }
      // 添加鼠标抬起事件，鼠标抬起，将事件移除
      img.addEventListener("mouseup", function() {
        imgwrap.removeEventListener("mousemove", move);
      });
      // 鼠标离开父级元素，把事件移除
      imgwrap.addEventListener("mouseout", function() {
        imgwrap.removeEventListener("mousemove", move);
      });
    },
    // 缩放图片
    rollImg() {
      const _this = this;
      /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */

      var zoom = this.realZoom;
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
      zoom += event.wheelDelta / 12;
      /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 100 && zoom < 500) {
        this.realZoom = zoom;
        this.$refs.imgDiv.style.transform = "scale(" + zoom / 100 + ")";
      }
      var img = document.querySelector(".img");
      let leftDis = parseInt(img.style.left),
        topDis = parseInt(img.style.top);
      this.countPos(leftDis, topDis);
      return false;
    },
    countPos(leftDis, topDis) {
      const _this = this;
      var img = document.querySelector(".img");
      var curWidth = img.clientWidth;
      var curHeight = img.clientHeight;
      const curZoom = _this.realZoom / 100;

      let leftDis1 = (curWidth * curZoom) / 2 - _this.initWidth / 2,
        leftDis2 = _this.initWidth / 2 - (curWidth * curZoom) / 2,
        topDis1 = (curHeight * curZoom) / 2 - _this.initHeight / 2,
        topDis2 = _this.initHeight / 2 - (curHeight * curZoom) / 2;
      leftDis = leftDis > leftDis1 ? leftDis1 : leftDis;
      leftDis = leftDis < leftDis2 ? leftDis2 : leftDis;
      topDis = topDis > topDis1 ? topDis1 : topDis;
      topDis = topDis < topDis2 ? topDis2 : topDis;
      img.style.left = leftDis + "px";
      img.style.top = topDis + "px";
    }
  }
};
</script>
<style scoped>
.imgwrap {
  position: relative;
  background-color: #fff;
  border: 1px solid #eee;
  overflow: hidden;
}
.img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  cursor: move;
}
</style>
