<template lang="pug">
 .Label
  span 标签:
   span(v-for='(item,index) in labels'): router-ling(:to="'/biaoqian'" tag="a" target="_blank") {{item.labelName}}
</template>
<script>
export default {
  props: {
    labels: Array
  }
}
</script>
