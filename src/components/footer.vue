<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-footer {
  position: relative;
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
footer#my-footer
  footer-nav
  footer-copyright
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import footerNav from './footer/footer-nav.vue'
import footerCopyright from './footer/footer-copyright.vue'

export default {
  name: 'my-footer',
  components: {
    footerNav,
    footerCopyright
  },
  data() {
    return {
      msg: 'this is from footer.vue'
    }
  },
  methods: {

  }
}
</script>
