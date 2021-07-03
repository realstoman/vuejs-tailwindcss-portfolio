<template>
  <!-- Header Start -->
  <Header></Header>

  <!-- Render Active Component Contents Start -->
  <router-view/>

  <!-- Footer Start -->
  <Footer></Footer>

</template>

<script>
  import feather from 'feather-icons'
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer';

  export default {
    components: {
      Header,
      Footer
    },
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
