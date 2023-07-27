<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <div class="menu-toggle" @click="showMobileMenu = !showMobileMenu">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <div class="logo">
        <img src="@/assets/logo.svg">
      </div>
      <nav :class="{'active': showMobileMenu}">
        <ul>
          <li v-for="row in menu"
              :class="{'active':row.active, 'mobileButtons': row.mobileButton}">
            <a :href="row.link">{{ row.title }}</a>
          </li>
        </ul>
      </nav>
    </header>
  <RouterView />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";

export default defineComponent({
  components: {Theater},
  data() {
    return {
      showMobileMenu: false,
      menu: [
        {title: "Shop", active: false, link:'/', mobileButton: false},
        {title: "Offers", active: true, link:'/', mobileButton: false},
        {title: "Manual", active: false, link:'/', mobileButton: false},
        {title: "Support", active: false, link:'/', mobileButton: false},
        {title: "Free trial", active: false, link:'/', mobileButton: true},
        {title: "Build package", active: false, link:'/', mobileButton: true}
      ],
      loaded: false
    }
  },
  methods: {
    loadedEvent(){
      this.loaded = true
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
