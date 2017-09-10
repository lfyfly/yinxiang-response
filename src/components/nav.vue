<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-nav {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .85);


  box-sizing: border-box;
  padding-top: 30px;
  width: 100%;

  color: #fff;
  a {
    color: #fff;
  }

  .my-nav-inner {
    padding: 0 30px;

    .close-btn {

      text-align: right;

      margin-bottom: 50px;
      line-height: 20px;
      &>* {
        vertical-align: middle;
      }
      a.close-text {
        padding-right: 10px;
      }
    }
    ul {
      border-bottom: 1px solid #606060;
    }
    ul li {
      margin: 20px 0;
    }
    .list5 {
      border: none;
      a {
        line-height: 38px;
        border: 1px solid #fff;
        padding: 0 40px;
        border-radius: 4px;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#my-nav(:style="{height:isMobile?'100%':''}")
  .my-nav-inner
    .close-btn
      a.close-text(@click="closeNavFn") 关闭
      a.close-icon(@click="closeNavFn")

    ul.list1
      li(v-if="!isMobile"): a 登录
      li: a 注册

    ul.list2
      li: a 价格

    ul.list3
      li: a 标准用户
      li: a 高级用户
      li: a 企业版

    ul.list4
      li: a 帮助中心
      li: a 博客

    ul.list5
      li: a 下载印象笔记
      li(v-if="!isMobile"): a 下载印象笔记·剪藏

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import BUS from 'src/bus/bus.js'

export default {
  name: 'my-nav',
  data() {
    return {
      msg: 'this is from nav.vue',
    }
  },
  methods: {
    isMobile() {
      return BUS.isMobile
    },
    closeNavFn() {
      BUS.navShow = false
    }
  },
  created() {
    console.log(BUS.navShow)
  }
}
</script>
