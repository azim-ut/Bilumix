<template>

  <div :id="$props.name" :style="{'display': ($props.info != undefined)?'block':'none'}" class="modal">
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

export default defineComponent({
  components: {},
  props: {
    name: "",
    info: undefined,
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
      if (event.target && event.target.id === this.$props.name) {
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