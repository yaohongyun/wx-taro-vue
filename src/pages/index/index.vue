<template>
  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit
  },
  mounted(){
    this.login()
  },
  onLaunch(){},
  onShow(){},
  onHide(){},
  methods: {
    login(){
      this.$taro.login({
        success: function (res) {
          console.log(res, 'res===')
          if (res.code) {
            //发起网络请求
            // this.$taro.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
