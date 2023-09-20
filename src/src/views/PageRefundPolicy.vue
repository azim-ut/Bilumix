<template>

  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="grid grid121">
      <div>&nbsp;</div>
      <div>
        <h1>Refund Policy</h1>
        <div style="padding-top: 104px;">
          <p><b>Returns</b><br>Our policy lasts 15 days. If 15 days have gone by since your purchase/receive, unfortunately we can’t offer you a refund or exchange.<br><br>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.<br><br>To complete your return, we require a receipt or proof of purchase.<br><br>There are certain situations where only partial refunds are granted (if applicable)<br>- Any item not in its original condition, is damaged or missing parts for reasons not due to our error<br>- Any item that is returned more than 15 days after delivery.<br><br><span></span><em>* Please contact us at contact@bilumix.com to start your process.</em><br><br><b>Refunds (if applicable)</b><br>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund (full or partial).<br>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.<br><br><b>Late or missing refunds (if applicable)</b><br>If you haven’t received a refund yet, first check your bank account again.<br>Then contact your credit card company, it may take some time before your refund is officially posted.<br>Next contact your bank. There is often some processing time before a refund is posted.<br>If you’ve done all of this and you still have not received your refund yet, please contact us at contact@bilumix.com<br><br><b>Sale items (if applicable)</b><br>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.<br><br><b>Exchanges (if applicable)</b><br>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at&nbsp;contact@bilumix.com and send your item to:&nbsp;12 Penns Trail&nbsp;STE 128 Newtown,&nbsp;PA&nbsp;18940 United States.</p>
          <p><br><b>Gifts<br></b>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
          <p><br>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
          <p><br><b>Shipping<br></b>To return your product, you should mail your product to:&nbsp;12 Penns Trail STE 128, Newtown,&nbsp;PA&nbsp;18940&nbsp;United States.<br><br>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.<br><br>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
          <p><br>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
        </div>
      </div>
      <div>&nbsp;</div>
    </div>


  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {
    }
  },
  methods: {

  },
  unmounted () {
  },
  mounted(){
    window.scroll(0,0)
  }
})
</script>

<style scoped>
</style>