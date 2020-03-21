<template>
    <div id="body">
        <nav class="nav navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <!--在移动端的时候导航条折叠起来，三横的样式出现，点击该样式可以显示或隐藏导航条上的内容-->
                    <button class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">国土资源管理系统</a>
                </div>
                <div id="menu" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li ><a href="#" @click="skip($event,'/')">公告</a></li>
                        <li><a href="#" @click="skip($event,'/daylog')">日志</a></li>

                        <!--下拉菜单功能的实现-->
                        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" @click="skip($event,'/list')">
                            办公</a>
                          <!--  <ul class="dropdown-menu">
                                <li><a href="#" >资源表</a></li>
                                <li><a href="#">second</a></li>
                            </ul> -->
                        </li>
                        <li><a href="#">退出</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'head',
  mounted () {
    // console.log('head')
  },
  created () {
    axios.get('/api')
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    skip (e, name) {
      console.log(e.target)
      this.$router.push({
        path: name
      })
      e.preventDefault()
      return false
    }
  }
}
</script>

<style scoped>
#body{
   position: relative;
}
</style>
