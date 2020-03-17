<template>
    <div id="box">
        <div class="container">
         <div class="row movebox">
             <hr class="hidden-sm hidden-md hidden-lg">
<div class="col-sm-4">
<Date @func = 'getDay'></Date>
</div>
             <hr class="hidden-sm hidden-md hidden-lg">
             <div class="col-sm-8" >
                 <div class="text_head">{{msg}}</div>
                 <textarea id='memo' >
                     此处填写日志。。。。。
                 </textarea>
                 <button type="button" class="btn btn-info btn-block">添加日志</button>
                 <button type="button" class="btn btn-info btn-block">查看历史日志</button>
             </div>

         </div>
        </div>

    </div>
</template>

<script>

import Date from '../date/Date'
export default {
  name: 'day_log',
  data: function () {
    return {
      msg: null
    }
  },
  components: {Date},
  created () {

  },
  mounted () {

  },
  methods: {
    getDay: function (data) {
      this.msg = data
      console.log(data)
    }
  }
}
</script>

<style scoped>

    .movebox{
        margin-top: 10%;
    }
    #memo{
        /* style="height: 100%;width: 70px;resize: none; */
        width: 100%;
        height: 20rem;
        resize: none;
        border: 0.1em solid rgba(0,0,0,0.8);
        border-top: none;

    }
    .text_head{
        width: 100%;
        height: 2em;
        border: 0.1em solid rgba(0,0,0,0.8);
        line-height: 2em;
        text-align: center;
        background-color: rgba(0,0,0,0.8);
        color: white;
    }

</style>
