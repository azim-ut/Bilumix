<template>
    <div class="feedback">
      <form @submit="handleSubmit">
        <h3>{{ bundles.FORM_TITLE }}</h3>
        <div class="field">
          <div class="title">Email</div>
          <input type="text" v-model="form.email" />
        </div>
        <div class="field">
          <div class="title">{{ bundles.NAME }}</div>
          <input type="text" v-model="form.name" />
        </div>
        <div class="field">
          <div class="title">{{ bundles.SUMMARY }}</div>
          <input type="text" v-model="form.summary" />
        </div>
        <div class="field">
          <div class="title">{{ bundles.DESCRIPTION }}</div>
          <textarea rows="10" v-model="form.description"></textarea>
        </div>
        <div>
          <button type="submit" class="emphasized-button" style="padding: 10px; width: 100%;">{{ bundles.SUBMIT }}</button>
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
import feedbackBundles from "@local/feedback_text.json";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore, bubbleStore)
  },
  components: {},
  data() {
    return {
      bundles: feedbackBundles,
      form: {
        subject: "Bilumix - customer feedback",
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
        subject: "Bilumix - customer feedback",
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
  padding: 10px 5px;
}

.feedback .field .title{
  background: #fff;
  position: absolute;
  left: 10px;
  top: -17px;
  padding: 0 10px;
}

.feedback .field input{
  outline: none;
  width: -webkit-fill-available;
  border: none;
  line-height: 2rem;
}

.feedback .field textarea{
  width: auto;
  outline: none;
  margin: 10px 5px 0;
  border: none;
  min-width: -webkit-fill-available;
}
</style>