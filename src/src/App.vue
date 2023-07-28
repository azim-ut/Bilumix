<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue";
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
              @click="toggleMenu(row)"
              :class="{'active':row.active, 'mobileButtons': row.mobileButton}">
            <a>{{ row.title }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="contentBlock">
      <RouterView />
    </div>
  <Footer />
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
        {title: "Shop", active: false, name: 'shop', link:'/shop', mobileButton: false},
        {title: "Offers", active: true, name:'offers', link:'/offers', mobileButton: false},
        {title: "Manual", active: false, name:'manual', link:'/manual', mobileButton: false},
        {title: "Support", active: false, name:'support', link:'/support', mobileButton: false},
        {title: "Free trial", active: false, name:'trial', link:'/trial', mobileButton: true},
        {title: "Build package", active: false, name:'package', link:'/package', mobileButton: true}
      ],
      loaded: false
    }
  },
  methods: {
    toggleMenu(menu: any){
      console.log(menu)
      this.$router.push({name: menu.name})
      this.menu.forEach(row => {
        row.active = false
        if(row.link.startsWith(menu.link)){
          row.active = true
        }
      })
      this.showMobileMenu = false
    },
    loadedEvent(){
      this.loaded = true
      console.log("loaded")
    }
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.toggleMenu(this.$route.path)
    window.addEventListener('load', this.loadedEvent);
  }
})
</script>
<style>
body{
  margin: 0;
}
</style>
