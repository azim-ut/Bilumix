<template>

  <div :id="$props.name" :style="{'display': ($props.show())?'block':'none'}" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" :id="'Cls_' + $props.name" @click="closeModal()">&times;</span>
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
    show: false,
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
    modalKeyDown(event: any){
      if (event.target && event.target?.getAttribute("id") === 'Cls_'+this.$props.name) {
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