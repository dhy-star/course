<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <!--<Head v-if="$store.getters.getboolean"></Head>-->
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
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>

#app {
    width: 100%;
}
</style>
