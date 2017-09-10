<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#home-desc {
  padding: 0 20px;
  max-width: 1120px;
  margin: 0 auto;
}

.home-desc-item {

  margin-bottom: 50px;

  &>.img-bg {
    margin-bottom: 22px;
    padding-top: 200px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &>.img-0 {
    padding-top: 165px;
  }
  &>.img-3 {
    padding-top: 220px;
  }
  &>.desc-container {
    &>h2 {
      font-size: 24px;
      line-height: 1;
      margin-top: 5px;
      margin-bottom: 10px;
    }
    &>p {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
#home-desc
  .home-desc-item(v-for="(v,i) in descData",:class="'num'+i")
    .img-bg(:class="'img-bg-'+i",:style="{backgroundImage:`url(${v.image})`}")

    .desc-container(:class="'desc-container-'+i")
      h2 {{v.title}}
      p {{v.desc}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>


export default {
  name: 'home-desc',
  data() {
    return {
      msg: 'this is from home-desc.vue',
      descData: [
        {
          title: '随时记录一切',
          desc: '无论是点滴灵感、待办清单、或是会议记录、项目资料，印象笔记在手，方便随时记录，永久保存内容。',
          image: '/static/img/body/home/desc-1.jpg',
        },
        {
          title: '支持所有设备',
          desc: '你可以用印象笔记保存一切，笔记会自动同步到所有设备。再也不用回想某个东西究竟存在哪台设备，因为它就在印象笔记里。',
          image: '/static/img/body/home/desc-2.jpg',
        },
        {
          title: '快速查找所需',
          desc: '一个简单的搜索框，就能轻松找到你放进印象笔记的一切。无论是笔记、图片甚至是附件内的文字，印象笔记能迅速帮你搜索到任何记忆。',
          image: '/static/img/body/home/desc-3.jpg',
        },
        {
          title: '高效协作共享',
          desc: '无需跳出应用，即可基于笔记展开讨论，共享工作笔记本，合作完成团队目标。',
          image: '/static/img/body/home/desc-4.jpg',
        },

      ]
    }
  },
  methods: {

  }
}
</script>
