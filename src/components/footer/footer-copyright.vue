<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.footer-copyright {
  box-sizing: border-box;
  padding: 26px 20px 14px 20px;
  line-height: 1;
  font-size: 12px;
  background: #f0f0f0;
.legal-links{
  margin-bottom: 18px;
}
 .footer-copyright-info{
   margin-bottom: 14px;
 }
  p{
    margin-bottom: 4px;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.footer-copyright
  .footer-copyright-inner
    ul.legal-links.horizontal
      li: a 法律条款　|
      li: a 　隐私　|
      li: a 　安全性　|
      li: a 　联系我们


    .footer-copyright-info
      p 版权所有 2017 Evernote Corporation.
      p 保留一切权利.

    .footer-company-info
      p 北京印象笔记科技有限公司
      p: a 京ICP备12019321号
      p 京公网安备11010802011736号
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'footer-copyright',
  data() {
    return {
      msg: 'this is from footer-copyright.vue'
    }
  },
  methods: {

  }
}
</script>
