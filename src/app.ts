import Vue from 'vue'
import store from './store'
import Taro from '@tarojs/taro'

import './app.scss'
import 'taro-ui-vue/dist/style/index.scss'

// Vue.config.productionTip = false
Vue.prototype.$taro = Taro

const App = {
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
