<template>
  <view>
    <text class="title">{{ getNumber }}</text>
  </view>
</template>

<script>
export default {
  name: 'NumberDisplay',
  computed: {
    getNumber() {
      return this.$store.getters.getNumber
    }
  }
}
</script>

<style>
.title {
  font-size: 40px;
}
</style>
