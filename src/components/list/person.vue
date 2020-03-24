<template>
    <div id="box">
        <hr class="hidden-sm hidden-md hidden-lg">
        <div class="row movebox">
            <div class="col-sm-12">

                <table class="table table-striped">

                    <tbody>
                    <tr>
                        <td>姓名</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder=""/> </td>
                    </tr>
                    <tr>
                        <td>账户</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder=""/> </td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td> <input type="text" class="form-control" style="display: inline-block" placeholder=""/> </td>
                    </tr>
                    <tr>
                        <td>昵称</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder=""/></td>
                    </tr>
                    <tr>
                        <td>身份证</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder=""/></td>
                    </tr>
                    <tr>
                        <td>居住地</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder=""/></td>
                    </tr>
                    <tr>
                        <td>电话号码</td>
                        <td><input type="text" class="form-control" style="display: inline-block" placeholder=""/></td>
                    </tr>

                    </tbody>
                </table>
                <button type="button" class="btn btn-info btn-block">提交</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'person'
}
</script>

<style scoped>
#box{

}
</style>
