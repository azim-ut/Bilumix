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
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
  },
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
    }
  },
  methods: {
    toggleMenu(menu: any){
      this.$router?.push({name: menu.name})
      this.updateMenu(menu)
    },
    updateMenu(menu: any){
      this.menu.forEach(row => {
        row.active = false
        if(row.name === menu.name){
          row.active = true
        }
      })
      this.showMobileMenu = false
    },
  },
  unmounted () {
  },
  mounted(){
    this.updateMenu(this.$route)
  }
})
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 100px;
  background: #262626;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  align-items: center;
}

header .logo{
  color: #fff;
  height: 20px;
  line-height: 50px;
  font-size: 24px;
  float: left;
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
  height: 50px;
  line-height: 50px;
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

@media (max-width: 850px) {
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
    top: 75px;
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


@media (max-width: 850px) {
}
</style>