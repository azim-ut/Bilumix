<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="loading" v-if="!loaded">
    <div id="loading-center">
      <div id="loading-center-absolute">
        <div class="object" id="object_one"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_four"></div>
        <div class="object" id="object_five"></div>
        <div class="object" id="object_six"></div>
        <div class="object" id="object_seven"></div>
        <div class="object" id="object_eight"></div>
        <div class="object" id="object_nine"></div>
      </div>
    </div>

  </div>
  <RouterView />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";

export default defineComponent({
  components: {Theater},
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    loadedEvent(){
      this.loaded = true;
      console.log("loaded")
    }
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('load', this.loadedEvent);
  }
})
</script>
<style>
body{
  margin: 0;
}
</style>
