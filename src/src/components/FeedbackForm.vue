<template>
  	<div class="feedback">
      Feedback form
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia"
import {feedbackStore} from "@/store/feedback/feedback";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore)
  },
  components: {},
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
  unmounted() {
  }
})
</script>

<style scoped>
</style>