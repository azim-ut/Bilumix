<template>
  <section class="IntroSection">
    <div class="image">

    </div>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
    name: "" as String,
    test: false,
    effects: [] as Array<String>,
    height: 10,
    bgMode: "cover",
    frames: [] as Array<URL>
  },
  data() {
    return {
      wh: 0,
      theaterDivIndex: 5,
      loaded: false,
      theaterDivHeight: 100,
      framesWithBackground: [0],
      scroll: {
        direction: 1,
        lastPos: 0,
        newPos: 0,
        timer: 50,
        delta: 0,
        delay: 50
      }
    }
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