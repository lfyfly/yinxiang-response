<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.register {
  input {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    background: #fff;
    color: #a9a9a9;
    padding-left: 10px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
  }
  .register-legal {
    font-size: 12px;
    margin-bottom: 18px;
    &>a {
      text-decoration: underline;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
form.register
  .input-container
    input(placeHolder="邮箱").register-email(type="email")
    input(placeHolder="密码").register-password(type="password")
  p.register-legal
    | 点击注册即表明你同意本
    a 服务条款
    | 和
    a 隐私条款
    | 。
  a.register-btn 免费注册

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'register',
  data() {
    return {
      msg: 'this is from register.vue'
    }
  },
  methods: {

  }
}
</script>
