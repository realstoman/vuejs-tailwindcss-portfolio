<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Banner Start -->
    <section class="flex flex-col sm:flex-row justify-between">
      <div class="w-full sm:w-1/2 text-left">
        <h1>Hi Iam Stoman</h1>
      </div>
      <div class="w-full sm:w-1/2 text-right">
        <img src="@/assets/images/developer.svg" alt="Developer">
      </div>
    </section>
    <!-- Banner End -->

    <!-- Home Poject Section Start -->
    <section>
      <div>
        <div data-w-id="24a1979e-d557-8cdc-aefe-c0d1783a993d" class="holder-with-border holder-with-border-64" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"><p style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;" class="sub-title-new">Orizon is a leading design agency based in Canada. We help startups &amp; Fortune 500 companies delight humans on the other side of the screen.<br></p><div style="opacity: 1;" class="blue-separator blue-separator-new"></div><div class="about-white-holder-hide-blue-line-on-mobile about-white-holder-hide-blue-line-on-mobile-new2"></div><div class="about-white-holder-hide-blue-line-on-mobile-2 about-white-holder-hide-blue-line-on-mobile-new"></div></div>
      </div>
    </section>
    <!-- Home Poject Section End -->

  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
}
</script>

<style scoped>
  
</style>
