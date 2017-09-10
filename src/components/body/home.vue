<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#home {
position: relative;
  .society-info {
    text-align: center;
    margin-bottom: 40px;

    font-size: 16px;
    line-height: 64px;

    color: #fff;
    background: #414141;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#home
  home-vedio
  p.society-info 与<span style="color:#2dbe60">数亿</span>名用户一起，用印象笔记成就更多
  home-desc

  home-register
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import homeVedio from './home/home-video.vue'
import homeDesc from './home/home-desc.vue'
import homeRegister from './home/home-register.vue'

export default {
  name: 'home',
  components: {
    homeVedio,
    homeDesc,
    homeRegister
  },
  data() {
    return {
      msg: 'this is from home.vue',

    }
  },
  methods: {

  }
}
</script>
