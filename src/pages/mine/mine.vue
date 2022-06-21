<template>
  <!-- 我的页面 -->
  <view class="mine">
    <AtButton loading type='primary'>按钮文案</AtButton>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue'

export default {
  name: 'mine',
  data(){
    return {

    }
  },
  components: {
    AtButton
  },
  mounted(){},
  onLaunch(){},
  onShow(){},
  onHide(){},
  methods: {}
}
</script>

<style>

</style>