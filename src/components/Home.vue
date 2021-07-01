<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
