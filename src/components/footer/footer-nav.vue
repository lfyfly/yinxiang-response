<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.footer-nav {
  padding: 0 20px;
  line-height: 1;
  box-sizing: border-box;
  max-width: 500px;
  font-size: 13px;
  .footer-nav-item {
    box-sizing: border-box;
    display: inline-block;
    width: 50%;
    vertical-align: top;
    margin-bottom: 30px;
    &:nth-child(even) {
      padding-left: 10px;
    }
    .footer-nav-item-title {
      font-weight: bold;
      margin-bottom: 14px;
    }
    .footer-nav-item-item {
      margin-bottom: 12px;
      a {
        color: #636b6d;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.footer-nav
  .footer-nav-item(v-for="(v1,i1) in footerNavData")
    .footer-nav-item-title {{v1.title}}
    ul
      li.footer-nav-item-item(v-for="(v2,i2) in v1.list")
        a {{v2.text}}


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'footer-nav',
  data() {
    return {
      msg: 'this is from footer-nav.vue',
      footerNavData: [
        {
          title: '印象笔记',
          list: [
            { text: '价格' },
            { text: '企业版' },
            { text: '下载' },
            { text: '产品' }
          ]
        },
        {
          title: '公司',
          list: [
            { text: '博客' },
            { text: '加入我们' },
            { text: 'Market' },
          ]
        },
        {
          title: '帮助中心',
          list: [
            { text: '帮助&教程' },
            { text: '论坛' },
          ]
        },
        {
          title: '社区',
          list: [
            { text: '印象笔记认证咨询师' },
            { text: '印象大使' },
            { text: '开发者(API)' },
            { text: '百宝箱' },
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>
