<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
#my-body {}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
main#my-body
 home


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import home from 'components/body/home'

export default {
  name: 'my-body',
  components: {
    home
  },
  data() {
    return {
      msg: 'this is from body.vue'
    }
  },

  methods: {

  }
}
</script>
