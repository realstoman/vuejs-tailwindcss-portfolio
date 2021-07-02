<template>
  <div class="container mx-auto px-4">
    <p>Home Page</p>
    <i data-feather="home"></i>
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
