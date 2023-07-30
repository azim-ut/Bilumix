<template>
  <footer>
    <div>
      <div>
        <div>
          <div>
            <img src="/src/assets/logo.svg">
          </div>
          <address>
            <span>41 University Drive Suite 400,<br>Newtown, PA 18940<br>United States</span>
            <span>Email:<a href="mailto:sales@bilumix.ru" aria-label="Mail to sales@bilumix.ru" style="margin-left: 1rem; color: white;">sales@bilumix.ru</a></span>
          </address></div></div></div>


    <div>
      <div>
        <h6>Pages</h6>
        <ul><li>
          <div><a href="/shop/">Shop</a></div>
        </li>
          <li>
            <div><a href="/offers/">Offers</a></div>
          </li><li>
            <div><a href="/manual/">Manual</a></div>
          </li><li>
            <div><a href="/support/">Support</a></div>
          </li></ul>
        <div><div><a href="/products/">Products</a>
          <ul><li>
            <div><a href="/headlamp/">Headlamp</a></div></li>
            <li><div><a href="/loupes/">Loupes</a></div></li>
            <li><div><a href="/accessories/">Accessories</a></div></li>
            <li><div><a href="/replaceable/">Replaceable</a></div></li></ul></div>
        </div>
        <div><div><h6><a href="/legal/">Legal</a></h6>
          <ul><li><div><a href="refund-policy/">Refund Policy</a></div></li>
            <li><div><a href="/data-privacy/">Data Privacy</a></div></li>
            <li><div><a href="/terms-of-service/">Terms of Service</a></div></li></ul></div></div>
        <div>Copyright © 2021 BiLumix.com Designed and built by Omiologic LLC</div>
      </div>

    </div>
  </footer>

</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
  },
  data() {
  },
  methods: {
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
div {
  display: block;
  flex-direction: row;
}
*, ::before, ::after {
  box-sizing: inherit;
}
footer {
  background-color: #151515;
  color: hsla(0,0%,100%,.8);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  min-height: 50vh;
  -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  padding: 4rem 0 1rem;
  position: relative;
}
address {
  font-style: italic;
}
footer .content{
  margin: 10px 80px;
}
footer h6{
  font-size: medium;
  text-transform: uppercase;
  line-height: 40px;
  margin-bottom: 10px;
}
footer ul{
  padding: 0;
  list-style: none;
}

</style>