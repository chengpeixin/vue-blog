<template lang="pug">
    div.head
     h1 ASDASDASDSA
     div.quotes {{quotes}}
</template>
<script>
export default {
  data () {
    return {
      quotes: `不要担心程序异常，如果它总是正确的话你早就失业了。——软件工程Mosher定律`
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
 box-sizing border-box
 padding 0 40px
 overflow hidden
 h1
  font-size 31.5px
  text-align center
  margin-top 20px
 .quotes
     font-size 13px
     margin-top 20px
</style>
