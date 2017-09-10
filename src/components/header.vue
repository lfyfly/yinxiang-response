<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-header {
  position: relative;
  padding: 20px 15px;

  &>.nav-btn {
    right: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
header#my-header
  a.header-logo.yinxiang-logo
    .hide-text 印象笔记Evernote
  a.list-icon.nav-btn(@click="openNavFn")
    .hide-text 更多
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import BUS from 'src/bus/bus.js'
export default {
  name: 'my-header',
  data() {
    return {
      msg: 'this is from header.vue'
    }
  },

  methods: {
    openNavFn() {
      BUS.navShow = true
    }
  }
}
</script>
