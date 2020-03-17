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
                        <td>城市</td>
                        <td>居住</td>
                        <td>公共设施</td>
                        <td>工业</td>
                        <td>商服</td>
                        <td>交通设施</td>
                        <td>市政公用设施</td>
                        <td>物流</td>
                        <td>道路广场</td>
                        <td>特殊</td>
                        <td>绿地</td>
                    </tr>

                    </tbody>
                </table>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'provinceTable'
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
