<template>
  <section>
    <!--登录注册/发文章-->
    <login-welcome />

    <!--倒计时-->
    <count-down-card />

    <!--加盐鸡汤-->
    <tip-card />

  </section>
</template>

<script>
import TipCard from '@/views/client/card/Tip'
import LoginWelcome from '@/views/client/card/LoginWelcome'
import CountDownCard from '@/views/client/card/CountDown'

export default {
  name: 'CardBar',
  components: { LoginWelcome, TipCard ,CountDownCard}
}
</script>

<style scoped>
</style>