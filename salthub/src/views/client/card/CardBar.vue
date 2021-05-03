<!-- 
 * @description: 晒研论坛-侧边栏
 * @fileName: CardBar.vue 
 * @author: 肖寒 
 * @date: 2021-04-29 23:03:03 
 * @后台人员:  
 * @path:  
 * @version: V1.0.0 
!-->
<template>
  <section>
    <!--登录注册/发文章-->
    <login-welcome> </login-welcome>

    <!--倒计时-->
    <count-down-card></count-down-card>

    <!--加盐鸡汤-->
    <tip-card></tip-card>

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