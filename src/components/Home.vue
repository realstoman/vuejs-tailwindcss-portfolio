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
        <p>lorem10 </p>
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
