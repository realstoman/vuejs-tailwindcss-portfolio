<template>
  <!-- Header Start -->
  
  <!-- Header End -->

  <!-- Render Active Component Contents Start -->
  <router-view/>
  <!-- Render Active Component Contents End -->

  <!-- Footer Start -->
  <div class="container mx-auto bg-white px-4">
    <div class="md:flex items-center justify-between py-5">
        <div class="flex justify-between items-center">
            <div class="text-lg text-gray-500">
              &copy; Copyright 2021. <a href="https://stoman.me" target="__blank" class="text-gray-600 font-medium">Stoman</a>
            </div>
        </div>
        <div>
          <ul class="flex gap-4">
            <li class="text-gray-400 hover:text-green-500 cursor-pointer"><i data-feather="twitter"></i></li>
            <li class="text-gray-400 hover:text-green-500 cursor-pointer"><i data-feather="instagram"></i></li>
            <li class="text-gray-400 hover:text-green-500 cursor-pointer"><i data-feather="github"></i></li>
          </ul>
        </div>
    </div>
  </div>
  <!-- Footer End -->

</template>

<script>
  import feather from 'feather-icons'
  export default {
      mounted() {
          feather.replace();
      },
      updated() {
          feather.replace();
      }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
