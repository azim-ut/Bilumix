<template>
  <header>
    <div class="menu-toggle" @click="showMobileMenu = !showMobileMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div class="logo" @click="toHome()">
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
    <div class="rightBlock">
      <div class="cartIcon">
        <div @click="toCart">
          <span v-if="getTotalCount()>0"><font-awesome-icon icon="fa-solid fa-shopping-bag" /> {{ getTotalCount() }}</span>
          <span v-if="getTotalCount()<=0"><font-awesome-icon icon="fa-solid fa-shopping-bag" /></span>
        </div>
      </div>
      <div class="langIcon">
        <div @click="toggleNext()">{{nextLang().title}}</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {cartStore} from "@/store/cart/cart";
import Cart from "@/components/Cart.vue";
import headMenuJson from "@local/head_menu.json";

export default defineComponent({
  components: {Cart},
  computed: {
    ...mapStores(cartStore)
  },
  props: {
    key: null
  },
  data() {
    return {
      showMobileMenu: false,
      menu: headMenuJson,
      langs: [
          {title: 'EN', link: '/en'},
          {title: 'RU', link: '/'},
      ]
    }
  },
  methods: {
    getTotalCount(): number {
      return this.cartStore.countItems()
    },
    toggleMenu(menu: any){
      this.$router?.push({name: menu.name})
      this.updateMenu(menu)
    },
    toggleNext(){
      let target = this.nextLang()
      location.href = target.link
    },
    activeLang(): any {
      let out = this.langs[0]
      this.langs.forEach((lang: any, ind: number) => {
        if(lang.link === import.meta.env.BASE_URL){
          out = lang
        }
      })
      return out
    },
    nextLang(): any {
      let active = this.activeLang()
      let index = this.langs.indexOf(active)
      index++
      if(index === this.langs.length){
        index = 0
      }
      return this.langs[index]
    },
    updateMenu(menu: any){
      this.menu.forEach((row:any) => {
        row.active = false
        if(row.name === menu.name){
          row.active = true
        }
      })
      this.showMobileMenu = false
    },
    toHome(){
      location.href = "/"
    },
    toCart(){
      this.cartStore.open()
    }
  },
  unmounted () {
  },
  mounted(){
    this.updateMenu(this.$route)
    this.cartStore.fetchCart()
    this.activeLang()
  }
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 100px;
  background: #151515;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  height: 57px;
  align-items: center;
}

header .logo{
  color: #fff;
  height: 20px;
  line-height: 50px;
  font-size: 24px;
  float: left;
  cursor: pointer;
}

header nav{
  float: right;
  margin: 0 auto;
}

header nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}

header nav ul li{
  cursor: pointer;
}
header nav ul li a{
  font-size: 16px;
  height: 57px;
  line-height: 57px;
  padding: 0 20px;
  color: #b4b4b4;
  text-decoration: none;
  display: block;
}

header nav ul li.active a,
header nav ul li:hover a{
  color: #fff;
  background: transparent;
}

header .menu-toggle{
  color: #fff;
  position: absolute;
  float: right;
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: none;
  padding: 0 10px;
  z-index: 12;
}

header .rightBlock {
  display: flex;
  float: right;
  position: absolute;
  right: 10px;
}

@media (max-width: 900px) {
  header {
    /*position: fixed;*/
    padding: 0 20px;
  }

  header .menu-toggle {
    display: block;
  }
  header .logo{
    margin-left: 50px;
  }

  header nav {
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);
    background: #262626;
    top: -100vh;
    left: 0;
    z-index: 10;
    transition: .5s;
  }

  header nav.active {
    display: block;
    top: 55px;
  }

  header nav ul{
    display: block;
    text-align: center;
  }

  header nav ul a{
    font-size: large;
  }
}

header ul li.mobileButtons{
  display: none;
}


header ul li a{
  color: inherit;
}

header ul li a:hover{
  background: #000;
  color: #fff;
}


header .logo{
  z-index: 11;
  display: flex;
}

header .logoWrap{
  display: flex;
  align-items: center;
  justify-content: center;
}

header .logo .toggle{
  display: block;
  left: 10px;
  top: 26px;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  z-index: 12;
}

.cartIcon{
  color: #bbbbbb;
  cursor: pointer;
  font-size: large;
}
.cartIcon:hover{
  color: #fff;
}

.langIcon{
  color: #bbbbbb;
  cursor: pointer;
  font-size: large;
  float: right;
  width: 100px;
  text-align: right;
}
.langIcon:hover{
  color: #fff;
}

@media (max-width: 850px) {
}
</style>