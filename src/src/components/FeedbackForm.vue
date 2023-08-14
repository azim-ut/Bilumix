<template>
  	<div class="feedback">
      <h3>Ask question(s)</h3>
      <div class="field">
        <div class="title">Email</div>
        <input type="text" name="email" />
      </div>
      <div class="field">
        <div class="title">Name</div>
        <input type="text" name="name" />
      </div>
      <div class="field">
        <div class="title">Summary</div>
        <input type="text" name="summary" />
      </div>
      <div class="field">
        <div class="title">Description</div>
        <textarea rows="10" name="description"></textarea>
      </div>
      <div>
        <button class="emphasized-button" style="padding: 10px; font-size: medium; width: 100%;">Submit</button>
      </div>
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

.feedback .field{
  border-radius: 8px;
  border: #404040 1px solid;
  margin: 10px 10px 20px;
  position: relative;
  padding: 0px 5px;
}

.feedback .field .title{
  background: #fff;
  position: absolute;
  left: 10px;
  top: -10px;
  font-size: small;
  padding: 0 10px;
}

.feedback .field input{
  width: -webkit-fill-available;
  border: none;
}

.feedback .field textarea{
  width: auto;
  margin: 10px 5px 0;
  border: none;
  min-width: -webkit-fill-available;
}
</style>