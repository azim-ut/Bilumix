<template>
  <header :class="{'active': showMobileMenu}">
    <div class="menu-toggle" @click="showMobileMenu = !showMobileMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div class="logo" @click="toHome()">
      <img src="@/assets/logo.svg">
    </div>
    <div class="menuBg" @click="showMobileMenu = !showMobileMenu">
      <nav @click="($event) => {$event.preventDefault()}">
        <ul>
          <li v-for="row in menu"
              @click="toggleMenu(row)"
              :class="{'active':row.active, 'mobileButtons': row.mobileButton}">
            <a>{{ row.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
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
  <div :class="{'newArrivals':true, 'active': !hideNewAdv }">
    <span v-html="bundles.NEW_VERSION_ENABLE"></span>
    <div class="closeBtn pointer" @click="hideNewAdvBar()">X</div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {cartStore} from "@/store/cart/cart";
import Cart from "@/components/Cart.vue";
import headMenuJson from "@local/head_menu.json";
import indexTextBundles from "@local/main_text.json";

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
      bundles: indexTextBundles,
      showMobileMenu: false,
      hideNewAdv: false,
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
    },
    hideNewAdvBar(){
      localStorage.setItem("new", "1")
      this.hideNewAdv = true
    }
  },
  unmounted () {
  },
  mounted(){
    this.updateMenu(this.$route)
    this.cartStore.fetchCart()
    this.activeLang()
    let showNewBanner = <number> (localStorage.getItem("new")??0)
    if(showNewBanner && showNewBanner > 0){
      this.hideNewAdv = true
    }
  }
})
</script>

<style scoped>
.menuBg{
  margin: auto;
  transition: .5s;
}
.newArrivals{
  background: #ffffff;
  text-align: center;
  padding: 12px 0 5px;
  z-index: 99;
  position: fixed;
  top: -100px;
  right: 0;
  left: 0;
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.newArrivals .closeBtn{
  font-size: 80%;
  line-height: 20px;
  border-radius: 10px;
  margin-left: 10px;
  width: 20px;
  text-align: center;
}
.newArrivals .closeBtn:hover{
  background: #2ee8dc;
}
.newArrivals.active{
  top: 50px;
}
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
  transition: .5s;
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
    min-height: 50vh;
    background: #fff;
    top: -100vh;
    left: 0;
    z-index: 101;
    transition: .5s;
  }

  header.active nav {
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
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
  header{
    position: fixed;
  }
  header nav ul li a{
    font-size: 30px;
    color: #483232;
  }
  header nav ul li.active a,
  header nav ul li:hover a{
    color: #000;
  }

  .menuBg{
    display: none;
    width: 100%;
    height: 200vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(black, transparent);
  }
  .active .menuBg {
    display: block;
  }
  .active nav {
    top:0;
  }

  header nav ul li a{
  }
}
</style>