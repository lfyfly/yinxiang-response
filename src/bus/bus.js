import Vue from 'vue'

export default new Vue({
  data() {
    return {
      navShow: false // 侧边导航是否显示

    }
  },
  computed: {
    isMobile() { // 时候为移动端
      return navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) ? true : false
    }
  },
  methods: {

  },
  created() {

  },

})
