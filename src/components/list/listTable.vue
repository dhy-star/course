<template>
<div id="box">

<div class="row">
    <div class="col-sm-12">
        <div class="input-group"  style="width:100%;margin-top: 3px;">
            <input type="text" class="form-control"  placeholder="请输入要搜索的省份"/>
            <span class="input-group-btn">
               <button type="submit" class="btn btn-info btn-search glyphicon glyphicon-search" style="margin-top: -1px;"></button>
            </span>
        </div>
    </div>

</div>
    <hr class="hidden-sm hidden-md hidden-lg">
<div class="row movebox">
    <div class="col-sm-12">

    <table class="table table-striped">

        <tbody>
        <tr>
            <td>所属省份</td>
            <td>{{provice}}</td>
            <td> <span class="glyphicon glyphicon-wrench"></span> </td>
        </tr>
        <tr>
            <td>城市</td>
            <td>{{city}}</td>

        </tr>
        <tr>
            <td>居住用地</td>
            <td>{{dwell}}</td>

        </tr>
        <tr>
            <td>公共设施用地</td>
            <td>{{commonality}}</td>

        </tr>
        <tr>
            <td>工业用地</td>
            <td>{{industrial}}</td>

        </tr>
        <tr>
            <td>商服用地</td>
            <td>{{consult}}</td>

        </tr>
        <tr>
            <td>物流仓储用地</td>
            <td>{{logistics}}</td>
        </tr>
        <tr>
            <td>交通设施用地</td>
            <td>{{traffic}}</td>

        </tr>
        <tr>
            <td>市政公用设施用地</td>
            <td>{{city_polity}}</td>

        </tr>
        <tr>
            <td>道路广场用地</td>
            <td>{{way}}</td>

        </tr>
        <tr>
            <td>特殊用地</td>
            <td>{{special}}</td>

        </tr>
        <tr>
            <td>绿地</td>
            <td>{{green}}</td>

        </tr>
        </tbody>
    </table>

</div>

</div>
    <update v-if="false"></update>
</div>
</template>

<script>
import update from './update'
export default {
  name: 'listTable',
  data: function () {
    return {
      provice: '',
      city: '',
      dwell: '',
      commonality: '',
      industrial: '',
      consult: '',
      logistics: '',
      traffic: '',
      city_polity: '',
      way: '',
      special: '',
      green: ''

    }
  },
  created () {
    this.ajax.post(this.basePath + '/get', {city: '北京'})
      .then((response) => {
        // console.log(response.data.data[0].id)
        let data = response.data.data[0]
        this.provice = data.provice // 省份
        this.city = data.city // 城市
        this.dwell = data.dwell // 居住用地
        this.commonality = data.commonality // 公共
        this.industrial = data.industrial // 工业
        this.consult = data.consult // 商服
        this.logistics = data.logistics // 物流
        this.traffic = data.traffic // 交通
        this.city_polity = data.city_polity // 市政
        this.way = data.way // 道路
        this.special = data.special // 特殊
        this.green = data.green // 绿地
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  components: {
    update
  }
}
</script>

<style scoped>
#box{
width: 100%;
    position: relative;
}
    .borderStyle{
     border: 1px solid rgba(0,0,0,1);
    }
.movebox{
    margin-top: 1%;
}
</style>
