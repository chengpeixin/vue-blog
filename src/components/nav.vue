<template lang="pug">
    .information
     img.portrait(:src="headImg")
</template>
<script>
import headImg from '@/assets/headImg.jpg'
export default {
  data () {
    return {
      headImg: headImg
    }
  }
}
</script>

<style lang="stylus" scoped>
.information
    box-sizing border-box
    padding 0 20px
.portrait
    height 144px
    width 116px
    margin-top 20px
    margin-bottom 20px
</style>
