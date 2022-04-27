var App = new Vue({
  el: "#app",
  data: {
    bannerimg: ["./media/banner-deco.jpg", "./media/banner-deco-phone.jpg"],
    mediawidth: 0,
    // test:'測試'
  },
  created() {
    this.initialize();
    window.addEventListener("resize", this.detectWindowWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.detectWindowWidth);
  },
  methods: {
    initialize() {
      this.detectWindowWidth();
    },
    detectWindowWidth() {
      this.mediawidth = window.innerWidth;
      //   console.log(window.innerWidth);
      //   this.setWindowWidth(window.innerWidth);
    },
  },
});
