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
            <td>{{cityname}}</td>
            <td> <span class="glyphicon glyphicon-wrench"></span> </td>
        </tr>
        <tr>
            <td>城市</td>
            <td>{{cityname}}</td>

        </tr>
        <tr>
            <td>居住用地</td>
            <td>Mumbai</td>

        </tr>
        <tr>
            <td>公共设施用地</td>
            <td>Pune</td>

        </tr>
        <tr>
            <td>工业用地</td>
            <td>Mumbai</td>

        </tr>
        <tr>
            <td>商服用地</td>
            <td>Pune</td>

        </tr>
        <tr>
            <td>物流仓储用地</td>
            <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
        </tr>
        <tr>
            <td>交通设施用地</td>
            <td>Pune</td>

        </tr>
        <tr>
            <td>市政公用设施用地</td>
            <td>Mumbai</td>

        </tr>
        <tr>
            <td>道路广场用地</td>
            <td>Pune</td>

        </tr>
        <tr>
            <td>特殊用地</td>
            <td>Pune</td>

        </tr>
        <tr>
            <td>绿地</td>
            <td>Pune</td>

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
      cityname: 'null'

    }
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
