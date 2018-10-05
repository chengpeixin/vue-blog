<template lang="pug">
  .home
   Head
   .hr
   ul.content
    li(v-for='item in list' key='item.id')
     p.title {{item.title}}
     div.info {{item.time}}
</template>

<script>
// @ is an alias to /src
import Head from '@/components/head.vue'
export default {
  name: 'home',
  data () {
    return {
      list: [
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '123',
          label: [
            {
              name: '哈哈',
              id: '3'
            }
          ]
        }
      ]
    }
  },
  components: {
    Head
  }
}
</script>

<style lang="stylus" scoped>
.home
  box-sizing border-box
  padding 0 40px
  .hr
    margin 20px 0
  .content
    .title
        font-size 21px
        font-weight 550
        color #0066FF
    .info
      margin-top 15px
      font-size 13px
</style>
