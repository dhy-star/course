<template>
    <div id="box">

        <hr class="hidden-sm hidden-md hidden-lg">
        <div class="row movebox">
            <div class="col-sm-12">

                <table class="table table-striped">

                    <tbody>
                    <tr>
                        <td>省份</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder="输入要登记的城市"/> </td>
                    </tr>
                    <tr>
                        <td>城市</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder="输入要登记的城市"/> </td>
                    </tr>
                    <tr>
                        <td>居住用地</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/> </td>
                    </tr>
                    <tr>
                        <td>公共设施用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>工业用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>商服用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>物流仓储用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>交通设施用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>市政公用设施用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>道路广场用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>特殊用地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    <tr>
                        <td>绿地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder="单位公顷"/></td>
                    </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-info btn-block">提交登记任务</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'register',
  data: function () {
    return {
      cityname: 'null'

    }
  }
}
</script>

<style scoped>
    #box{
        width: 100%;
    }

    .movebox{
        margin-top: 1%;
    }
</style>
