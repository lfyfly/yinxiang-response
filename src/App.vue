<template lang="pug">
#app
  my-header
  my-body
  my-footer
  transition(:name="isMobile?'fade':'slide'")
    my-nav(v-show="navShow")
</template>

<script>
import myHeader from 'components/header.vue'
import myBody from 'components/body.vue'
import myFooter from 'components/footer.vue'
import myNav from 'components/nav.vue'

import BUS from 'src/bus/bus.js'
export default {
  name: 'app',
  components: {
    myHeader,
    myBody,
    myFooter,
    myNav

  },
  computed: {
    navShow() {
      return BUS.navShow
    },
    isMobile() {
      return BUS.isMobile
    }
  },

}
</script>

<style lang="scss">
@import 'src/scss/index.scss';
@import 'src/scss/response.scss';

@import 'src/commom/scss/reset.scss';
@import 'src/icon/bg-icon.scss';
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}

// transition fade
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
{
  opacity: 0
}

// transition slide
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter,
.slide-leave-to
{
  transform: translateX(100%);
}


// 非移动动显示为600px
body {
  overflow-y: scroll;
  min-width: 300px;
  img {
    width: 100%;
  }
}

#app {}

// 对body标签的属性设置在这
</style>
