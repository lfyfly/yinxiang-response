<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
@keyframes abc {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.home-video.is-pc {
  .video-container {
    position: relative;
    .video-img {
      padding-top: 49.375%;
    }
    &>video {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  .down-icon {
    display: none;

    position: absolute;
    left: 50%;
    margin-left: -18px;
    z-index: 99;
    width: 36px;
    height: 40px;
    background: url('/static/img/body/home/down-icon.png') center/contain no-repeat;
    bottom: 40px;

    animation: abc 2s infinite;
  }
}

.home-video {
  .video-container {

    .video-img {
      padding-top: 75%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  .video-content {
    background: #f3f3f3;
  }
  .video-content-inner {
    max-width: 560px;
    margin: 0 auto;
    padding: 30px 20px 40px 20px;


    &>.title {
      margin-bottom: 6px;

      font-size: 20px;
      line-height: 1;
    }
    &>p {
      margin-bottom: 18px;
      line-height: 20px;
    }
    .video-btn,
    .register-btn {
      line-height: 48px;
      text-align: center;

      border-radius: 4px;
      color: #fff;
      background: #2dbe60;
      width: 100%;
      &:hover {
        background: rgb(40, 169, 86);
      }
    }
    .video-register-form {
      input {
        height: 34px;
        border: 1px solid;
      }
    }
    .video-login {
      margin-top: 16px;
      &>a {
        text-decoration: underline;
      }
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.home-video(:class="{'is-pc':!isMobile}")
  .video-container
    //- img(:src="imgSrc")
    .video-img(:style="{backgroundImage:`url(${imgSrc})`}")
    template(v-if="!isMobile")
      video(autoplay='autoplay', loop='loop', poster='/static/img/body/home/homepage_Hero_tablet_Background.jpg')
        source.webm(type='video/webm', src='/static/img/body/home/homepage-hero-video.webm')
          //- source.mp4(type='video/mp4', src='/static/img/body/home/homepage-hero-video.mp4')
      a(@click="scrollToContentFn").down-icon
  .video-content
    .video-content-inner
      h1.title 记住一切
      p 现代生活喧嚣繁杂，印象笔记帮你轻松简化一切，让生活更美好，让工作更省力。
      template(v-if="isMobile")
        a.video-btn.download-btn 下载

      template(v-else)
        register.video-register-form
        .video-login
          |或
          a 登录
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import BUS from 'src/bus/bus.js'
import register from './commom/register.vue'

export default {
  name: 'home-video',
  components: {
    register
  },
  data() {
    return {
      msg: 'this is from home-video.vue'
    }
  },
  computed: {
    imgSrc() {
      var baseUrl = '/static/img/body/home/'

      return baseUrl + (BUS.isMobile && window.innerWidth < 450 ? 'homepage_Hero_mobile_Background.jpg' : 'homepage_Hero_tablet_Background.jpg')
    },
    isMobile() {
      return BUS.isMobile
    }
  },
  methods: {
    scrollToContentFn() {
      var el = this.$el.children[1]
      window.scrollTo(0, el.offsetTop + 85 + el.offsetHeight)
    }
  }
}
</script>
