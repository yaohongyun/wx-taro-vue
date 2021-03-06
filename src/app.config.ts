export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/mine'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#546fc6",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "้ฆ้กต",
        iconPath: "./assets/images/tabbar/home.png",
        selectedIconPath: "./assets/images/tabbar/home_in.png"
      },
      {
        pagePath: "pages/mine/mine",
        text: "ๆ็",
        iconPath: "./assets/images/tabbar/mine.png",
        selectedIconPath: "./assets/images/tabbar/mine_in.png"
      }
    ]
  }
})
