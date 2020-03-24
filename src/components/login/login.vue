<template>
    <div id="box">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">

                    <h4 class="modal-title text-center" id="myModalLabel">登录</h4>
                </div>
                <div class="modal-body" >
                    <div class="form-group">

                        <input type="text" class="form-control" placeholder="用户名" autocomplete="off">
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" placeholder="密码" autocomplete="off">
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="form-group">
                        <button type="button"  class="btn btn-primary form-control" @click="login">登录</button>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-default form-control">注册</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login: function () {
      let account = document.querySelectorAll('.form-control')[0].value
      let passworld = document.querySelectorAll('.form-control')[1].value
      console.log(account)
      console.log(passworld)
      this.ajax.get(this.basePath + '/login' + `?account=${account}&password=${passworld}`).then((value) => {
        console.log(value.data)
        var data = value.data
        if (data.isture) {
          this.$router.push({
            path: 'window'
          })
        } else {
          /* this.$vux.alert.show({
            title: '提示信息',
            content: '系统异常'
          }) */
          alert(data.msg)
        }
      })
    }
  }
}
</script>

<style scoped>
#box{
    background-color: rgba(34,34,34,0.6);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content :center;

}
    /*.handBox{
        width: 50rem;
        height: 30rem;
        background-color: red;

    }*/
</style>
