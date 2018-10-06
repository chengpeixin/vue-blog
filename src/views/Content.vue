<template lang="pug">
    .content
     Head
     .text(v-html="compiledMarkdown")

</template>
<script>

import Marked from 'marked'
import Hljs from 'highlight.js'

export default {
  name: 'Content',
  created () {
    var rendererMD = new Marked.Renderer()
    Marked.setOptions({
      renderer: rendererMD,
      highlight: function (code, lang) {
        console.log(code, lang)
        return Hljs.highlightAuto(code).value
      }
    })
    this.Marked = Marked
  },
  computed: {
    compiledMarkdown () {
      let detail = '# 很帅 ```javascript var a= 0; ```'
      return this.Marked(detail || '', { sanitize: true })
    }
  }
}
</script>

<style lang="stylus" scoped>
// .text
.content
 background #fff
</style>
