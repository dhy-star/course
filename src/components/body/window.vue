<template>
    <div id="box">
        <Head></Head>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
import Head from '../subject/head'
export default {
  name: 'window',
  components: {Head}
}
</script>

<style scoped>

</style>
