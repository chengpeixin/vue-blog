<template lang="pug">
  #app.clearfloat
    div.left
      router-view.content
    div.right
      Nav.info
</template>
<script>
import Nav from './components/nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="stylus" scoped>
#app
 height 100vh
.left
  width 70%
  background #F0F0F0
  .content
    height 100vh
    overflow-y auto
    border-right 1px solid #999
.right
  width 30%
  .info
    height 100vh
</style>
