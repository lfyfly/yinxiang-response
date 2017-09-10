<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.home-register {

  background: #49a56d;
  margin-bottom: 50px;
}

.home-register-inner {
  line-height: 1;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 45px 20px 0 20px;
  color: #fff;

  &>h2 {
    font-size: 25px;
    margin-bottom: 8px;
  }
  &>p {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .download-btn,
  .register-btn {
    display: block;
    box-sizing: border-box;
    height: 48px;
    font-size: 16px;
    line-height: 46px;
    color: #fff;
    margin-bottom: 40px;
    border: 1px solid #fff;
    border-radius: 4px;
    &:hover {
      background: #fff;
      color: #49a56d;
    }
  }
  .home-register-form {
    .register-legal {
      a {
        color: #fff;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.home-register
  .home-register-inner
    h2 立即注册
    p 探索权限的笔记方式
    //- mobile
    template(v-if="isMobile")
      a.download-btn 下载
    //-pc
    template(v-else)
      register.home-register-form

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import BUS from 'src/bus/bus.js'
import register from './commom/register.vue'
export default {
  name: 'home-register',
  components: {
    register
  },
  data() {

    return {
      msg: 'this is from home-register.vue',
    }
  },
  computed: {
    isMobile() {
      return BUS.isMobile
    }
  },
  methods: {

  }
}
</script>
