<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";

export default defineComponent({
  components: {Theater},
  data() {
    return {
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
<style>
body{
  margin: 0;
}
</style>
