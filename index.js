var App = new Vue({
  el: "#app",
  data: {
    bannerimg: ["./media/banner-deco.jpg", "./media/banner-deco-phone.jpg"],
    mediawidth: 0,
    feturelist:[{
      icon:'./media/01.svg',
      title:'提高社區品牌形象',
      content:'將協會的形象與價值傳遞出去，讓多領域的人進入社區做到進一步的合作或捐助。'
    },{
      icon:'./media/02.svg',
      title:'減輕協會人力負擔',
      content:'輕鬆做到活動報名、名單管理、消息公告、成果發佈，大大減少行政人員的人力支出'
    },{
      icon:'./media/03.svg',
      title:'數位轉型第一步',
      content:'建立自有官方網站，創造多管道曝光，活躍於數位媒體時代'
    }],
    currentindex:0,
     transitionname:'right-in',
    // test:'測試'
  },
  mounted() {
    setInterval(() => {
      this.currentindex++;
      if(this.currentindex==this.feturelist.length){
        this.currentindex=0;
      }
  }, 5000);
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
