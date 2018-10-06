<template lang="pug">
    .information
     img.portrait(:src="headImg")
     .person
      p: a(href="www.baidu.com") 博客主站点
      p: a(href="www.baidu.com") 我的邮箱
      p: a(href="www.baidu.com") 我的GitHub
      .book: a(href="www.baidu.com") 分享(转载)的各类电子书
     .coverage 博客主要内容
      ul
       li(v-for='item in coverages' :key='item') {{item}}
     .search
       .search-text 站内搜索
       input(type='text')
       input(type='button' value="搜索")
</template>
<script>
import headImg from '@/assets/headImg.jpg'
export default {
  data () {
    return {
      headImg: headImg,
      coverages: ['分享技术', '整理学习的知识', '分享转载优秀文章', '记录学习进度', '提升思维能力']
    }
  }
}
</script>

<style lang="stylus" scoped>
.information
    box-sizing border-box
    padding 0 20px
    position fixed
.portrait
    height 144px
    width 116px
    margin-top 20px
    margin-bottom 20px
</style>
