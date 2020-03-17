<template>
<div id="box">
    <div class="container ">
        <hr class="hidden-sm hidden-md hidden-lg">
        <div class="row movebox">
            <div class="col-sm-3">

                    <ul class="list-group">
                        <li class="list-group-item"  @click="getComponents($event,'listTable')"  >建设用地</li>
                        <li class="list-group-item"  @click="getComponents($event,'provinceTable')">省用地总表</li>
                        <li class="list-group-item"  @click="getComponents($event,'register')">登记</li>
                        <li class="list-group-item"  @click="getComponents($event,'person')">个人账户</li>
                        <li class="list-group-item"  @click="getComponents($event,'upload')">上传文件</li>
                        <li class="list-group-item"  @click="getComponents($event,'taskTable')">任务</li>
                    </ul>

                <hr class="hidden-sm hidden-md hidden-lg">
            </div>
            <div class="col-sm-9">
                <keep-alive>
                    <component :is="this.name"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import listTable from '../list/listTable'
import register from '../list/register'
import person from '../list/person'
import provinceTable from '../list/provinceTable'
import upload from '../list/upload'
import taskTable from '../list/taskTable'
export default {
  name: 'list',
  data: function () {
    return {
      name: ''
    }
  },
  components: {
    listTable,
    register,
    person,
    provinceTable,
    upload,
    taskTable
  },
  mounted () {
    let liArray = document.querySelectorAll('li.list-group-item')
    let li = liArray
    li[0].click()
  },
  methods: {
    getComponents: function (e, name) {
      this.removeStyle()
      let el = e.target
      console.log(el)
      el.style.backgroundColor = `rgba(144,144,144,0.8)`
      this.name = name
    },
    removeStyle: function () {
      let liArray = document.querySelectorAll('li.list-group-item')
      let li = liArray
      let child = null
      for (let i = 0; i < li.length; i++) {
        child = li[i]
        child.style.backgroundColor = `rgba(44,44,44,0.8)`
      }
    }
  }
}
</script>

<style scoped>
    #box{
        width: 100%;

    }
    .movebox{

        margin-top: 10%;

    }
    .buttonBox{

        height: 2em;
        line-height: 2em;
        text-align: center;
        background-color: rgba(0,0,0,0.8);

        padding: 1px;
        box-sizing: border-box;
        border: 1px solid  black;
        color: white;
    }
    li.list-group-item{
        text-align: center;
        background-color: rgba(44,44,44,0.8);
        color: white;
        font-weight: bolder;
    }

</style>
