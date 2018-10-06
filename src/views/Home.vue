<template lang="pug">
  .home
   Head
   ul.content
    li(v-for='(item,index) in list' :key='index')
     h2.title: router-link(:to="'/content/'+item.id" tag="a" target="_blank") {{item.title}}
     div.info {{item.time}}
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      list: [
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '2',
          label: [
            {
              name: '哈哈',
              id: '3'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '4',
          label: [
            {
              name: '哈哈',
              id: '4'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        },
        {
          title: '弃用 Chrome 改用 Firefox 的几点理由——关于 Chrome 69 隐私丑闻的随想',
          time: '2018年06月1日',
          id: '5',
          label: [
            {
              name: '哈哈',
              id: '5'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  box-sizing border-box
  padding 0 40px
  // height 100vh
  overflow-y auto
  border-right 1px solid #999
  .content
    li
      height 120px
      .title
          font-size 21px
          font-weight 550
          color #0066FF
      .title:hover
          text-decoration: underline
      .info
          margin-top 15px
          font-size 13px
</style>
