<template>
  <div style="position: relative;">
    <div :style="{'background-image': 'url(' + $props.bg + ')'}">
      <div class="title">{{$props.title}}</div>
      <div class="title">{{$props.sub}}</div>
      <div class="title">{{$props.text}}</div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
    bg: undefined as String|undefined,
    title: "" as String,
    sub: "" as String,
    text: "" as String
  },
  data() {
  },
  methods: {
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
</style>