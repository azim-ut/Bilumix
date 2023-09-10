<template>
	<div class="stayUpdate">
    <div>
      <h1>{{mainBundles.STAY_UPDATED_H1}}</h1>
      <p>{{mainBundles.STAY_UPDATED_TEXT}}</p>
      <div class="agreeWrap">
        <div class="agree">
          <div class="check">
                <span @click="stayUpdated.agree = !stayUpdated.agree">
                  <font-awesome-icon :icon="['far', 'square']" v-if="!stayUpdated.agree" />
                  <font-awesome-icon :icon="['far', 'square-check']" v-if="stayUpdated.agree" />
                </span>
          </div>
          <div class="text">
            {{mainBundles.AGREE_WITH}} <a href="data-privacy">{{mainBundles.AGREE_WITH_PRIVACY}}</a>.
          </div>
        </div>
      </div>
      <div :class="{'emailInput': true, 'active': stayUpdated.focus}" @click="stayUpdatedUpdate()">
        <input type="email" @change="stayUpdatedUpdate()" v-model="stayUpdated.email" :placeholder="mainBundles.ENTER_YOUR_EMAIL"/>
        <button>
          <div class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></div>
          <div class="txt">{{mainBundles.SUBSCRIBE}}</div>
        </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {feedbackStore} from "@/store/feedback/feedback";
import mainBundles from "@local/main_text.json"

export default defineComponent({
  components: {},
  computed: {
    ...mapStores(feedbackStore)
  },
  props: {
    show: null,
    name: "",
    closeCallback: Function
  },
  data() {
    return {
      mainBundles: mainBundles,
      stayUpdated: {
        focus: false,
        agree: false,
        email: null as string|null
      }
    }
  },
  methods: {
    stayUpdatedUpdate(){
      this.stayUpdated.focus = !this.stayUpdated.focus
      if(this.stayUpdated.email && this.stayUpdated.email.length > 2){
        this.stayUpdated.focus = true
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

.stayUpdate{
  background: #199ddc;
  text-align: center;
  min-height: 100vh;
  display: flex;
  padding: 5%;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
.stayUpdate p{
  font-size: 20px;
  font-weight: 300;
  color: #000;
  margin-top: 0;
}
.stayUpdate .emailInput{
  margin: auto;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 30px;
  background: #9acded;
  border: #3a618b 1px solid;
}
.stayUpdate .emailInput input{
  border: none;
  width: 60%;
  height: 50px;
  outline: none;
  background: transparent;
  overflow: hidden;
  line-height: 25px;
  padding:  0 10px 0 40px;
  border-radius: 20px 0 0 20px;
  font-size: 18px;
}
.stayUpdate .emailInput button{
  border: none;
  border-left: #7596b9 1px solid;
  outline: none;
  height: 47px;
  max-width: 200px;
  min-width: 50px;
  margin: 3px;
  text-align: center;
  border-radius: 0 20px 20px 0;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.stayUpdate .emailInput .icon{
  font-size: 1.8em;
  margin: 10px;
}

.stayUpdate .agreeWrap{
}
.stayUpdate .agreeWrap .agree{
  display: inline-flex;
  margin-bottom: 10px;
}
.stayUpdate .agreeWrap .agree div.text{
  margin-left: 10px;
  line-height: 30px;
}
.stayUpdate .agreeWrap .agree div.check span{
  cursor: pointer;
  font-size: 20px;
}
.stayUpdate .emailInput:hover,
.stayUpdate .emailInput.active{
  background: white;
  border: 2px solid rgba(0,57,110,.8)!important
}
.stayUpdate h1{
  margin: auto;
  letter-spacing: normal;
  color: #fff;
  font-weight: 500;
  font-size: 300%;
}
@media (max-width: 850px) {
  .stayUpdate h1{
    text-align: left;
    margin: 10px;
  }
  .stayUpdate p{
    text-align: left;
  }

  .stayUpdate .emailInput button div.txt{
    display: none;
  }
  .stayUpdate .agreeWrap .agree div.text{
    text-align: left;
    line-height: 20px;
  }
}
</style>