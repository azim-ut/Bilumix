<template>
    <div class="feedback">
      <form @submit="handleSubmit">
        <h3>Ask question(s)</h3>
        <div class="field">
          <div class="title">Email</div>
          <input type="text" v-model="form.email" />
        </div>
        <div class="field">
          <div class="title">Name</div>
          <input type="text" v-model="form.name" />
        </div>
        <div class="field">
          <div class="title">Summary</div>
          <input type="text" v-model="form.summary" />
        </div>
        <div class="field">
          <div class="title">Description</div>
          <textarea rows="10" v-model="form.description"></textarea>
        </div>
        <div>
          <button type="submit" class="emphasized-button" style="padding: 10px; font-size: medium; width: 100%;">Submit</button>
        </div>
      </form>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia"
import {feedbackStore} from "@/store/feedback/feedback";
import axios from "axios";
import {bubbleStore} from "@/store/bubble/bubble";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore, bubbleStore)
  },
  components: {},
  data() {
    return {
      form: {
        subject: "Bilumix.ru - customer feedback",
        email: null as string|null,
        name: null as string|null,
        summary: null as string|null,
        description: "" as string
      }
    }
  },
  methods: {
    reset(){
      this.form = {
        subject: "Bilumix.ru - customer feedback",
        email: null,
        name: null,
        summary: null,
        description: ""
      }
    },
    handleSubmit() {
      axios.post("/ru/php/mail.php", this.form).then(response => {
        this.bubbleStore.setText = response.data
        this.bubbleStore.show()
        // this.close()
      })
    }
  },
  mounted() {
  },
  unmounted() {
  }
})
</script>

<style scoped>
.feedback {
  background: #ffffff;
}

.feedback .field{
  border-radius: 8px;
  border: #404040 1px solid;
  margin: 10px 10px 20px;
  position: relative;
  padding: 4px 5px;
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