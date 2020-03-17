<template>
    <div id="box">
        <div class="row movebox">
            <div class="col-sm-12">

                <table class="table table-striped">

                    <tbody>
                    <tr>
                        <td>任务类型</td>
                        <td>状态</td>
                        <td>look</td>
                    </tr>

                    </tbody>
                </table>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'taskTable'
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
