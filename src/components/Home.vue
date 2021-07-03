<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Banner Start -->
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="w-full sm:w-1/2 text-left">
        <h1>Hi Iam Stoman</h1>
      </div>
      <div class="w-full sm:w-1/2 text-right">
        <img src="@/assets/images/developer.svg" alt="Developer">
      </div>
    </div>
    <!-- Banner End -->

    <!-- Banner Start -->

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
