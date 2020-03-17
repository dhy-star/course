<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
   <Head></Head>
       <keep-alive>
           <router-view/>
       </keep-alive>

  </div>
</template>

<script>
import Head from './components/subject/head'
export default {
  name: 'App',
  components: {Head},
  mounted () {
    /* var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    var app = document.querySelector('#app')
    app.style.height = h + 'px' */
  }
}
</script>

<style>

#app {
    width: 100%;
}
</style>
