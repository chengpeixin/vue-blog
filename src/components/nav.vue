<template lang="pug">
    .information
     img.portrait(:src="headImg")
     .personal
      p: a 博客主站点
      p: a 我的邮箱
      p: a 我的GitHub
      .book: a(href="www.baidu.com") 分享(转载)的各类电子书
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
