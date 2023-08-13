<template>

  <div :id="$props.name" :style="{'display': ($props.show)?'block':'none'}" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()">&times;</span>
      <div>
        <slot></slot>
      </div>

    </div>

  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {feedbackStore} from "@/store/feedback/feedback";

export default defineComponent({
  components: {},
  computed: {
    ...mapStores(feedbackStore)
  },
  props: {
    show: null,
    name: "",
    closeCallback: Function
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal(){
      this.$props.closeCallback()
    },
    modalKeyDown(event: Event){
      if (event.target && this.$props.show) {
        this.closeModal()
      }
    }
  },
  unmounted () {
    window.removeEventListener('mousedown', this.modalKeyDown);
  },
  mounted(){
    window.addEventListener('mousedown', this.modalKeyDown);
  }
})
</script>

<style scoped>

</style>