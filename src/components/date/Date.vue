<template>
    <div id="box">

        <div class="calendar_head" >{{year_now}}年{{month_now+1}}月{{day_now}}日 星期{{weekArray[week]}}</div>
        <div class="calendar_head" >
            <span style="position: absolute; left: 0;font-size: 0.8rem" @click="subNum">上个月《</span>
            <span>{{year}}年{{month+1}}月</span>
            <span style="position: absolute; right: 0; font-size: 0.8rem" @click="addNum">》下个月</span>
        </div>
        <div class="calendar_body">

        </div>
    </div>
</template>

<script>
export default {
  name: 'Date',
  data: function () {
    return {
      year: null,
      year_now: null,
      month: null,
      month_now: null,
      day: null,
      day_now: null,
      week: null,
      weekArray: ['日', '一', '二', '三', '四', '五', '六']

    }
  },
  created () {
    let date = new Date()
    this.year = date.getFullYear()
    this.year_now = date.getFullYear()
    this.month = date.getMonth()
    this.month_now = date.getMonth()
    /* 获取天数 */
    this.day_now = date.getDate()
    /* 获取星期 */
    this.week = date.getDay()
  },
  computed: {
    /* 每个月有几天 */
    getdayArray: function () {
      return [31, 28 + this.getLeapYear(this.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    },
    getWeek: function () {
      let day = `${this.year}-${this.month + 1}-${'01'}`
      console.log(day)
      let date = new Date(day)
      let i = date.getDay()
      return i
    }
  },
  mounted () {
    this.weekBox()
    this.getbody(this.getdayArray[this.month])
    var boxArray = document.querySelectorAll('div.daybox')
    let box = boxArray[this.getWeek + this.day_now - 1 + '']
    box.click()
  },
  updated () {
    this.removeBody()
    this.getbody(this.getdayArray[this.month])
    var boxArray = document.querySelectorAll('div.daybox')
    if (this.year === this.year_now && this.month === this.month_now) {
      let box = boxArray[this.getWeek + this.day_now - 1 + '']
      box.click()
    }
  },
  methods: {
    /* 判断闰年 */
    getLeapYear: function (year) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return 1
      }
      return 0
    },
    addNum: function () {
      if (this.month === 11) {
        this.month = 0
        this.year += 1
      } else {
        this.month += 1
      }
    },
    subNum: function () {
      if (this.month === 0) {
        this.month = 11
        this.year -= 1
      } else {
        this.month -= 1
      }
    },
    /* 还原样式 */
    removeStyle: function () {
      let boxArray = document.querySelectorAll('div.daybox')
      let array = boxArray
      let child = null
      for (let i = 0; i < array.length; i++) {
        child = array[i]
        child.style.border = null
      }
    },
    getbody: function (num) {
      let div = document.querySelector('.calendar_body')
      let box = null
      let that = this
      for (let i = 0; i < num + this.getWeek; i++) {
        if (i < this.getWeek) {
          box = this.getBox('-', 'daybox nullbox')
        } else {
          box = this.getBox(i + 1 - this.getWeek, 'daybox')
          box.onclick = function (e) {
            let et = e.target
            that.removeStyle()
            et.style.border = `0.05rem solid rgba(255,255,255,1)`
            that.$emit('func', `${that.year}-${that.month + 1}-${i + 1 - that.getWeek}`)
          }
        }

        div.appendChild(box)
      }
    },
    weekBox: function () {
      // let weekArray = ['日', '一', '二', '三', '四', '五', '六']
      let div = document.querySelector('.calendar_body')
      for (let i = 0; i < this.weekArray.length; i++) {
        let box = this.getBox(this.weekArray[i], 'weekbox')
        div.appendChild(box)
      }
    },
    getBox: function (text, attribute) {
      let sondiv = document.createElement('div')
      let atr = document.createAttribute('class')
      atr.nodeValue = attribute
      sondiv.setAttributeNode(atr)
      sondiv.style.width = 100 / 7 + '%'
      sondiv.style.height = 2 + 'em'
      sondiv.style.backgroundColor = `rgba(0,0,0,0.8)`
      sondiv.style.display = 'inline-block'
      sondiv.style.lineHeight = 2 + 'em'
      sondiv.style.textAlign = 'center'
      sondiv.style.color = 'white'
      sondiv.style.boxSizing = 'border-box'
      sondiv.style.padding = '0.05rem'
      sondiv.innerHTML = text
      return sondiv
    },
    removeBody () {
      let div = document.querySelector('.calendar_body')
      let daybox = document.querySelectorAll('.daybox')
      for (let i = 0; i < daybox.length; i++) {
        let child = daybox[i]
        div.removeChild(child)
      }
    }

  }

}
</script>

<style scoped>
#box{
    width: 100%;
      font-size: 16px;
}
.calendar_head{

        width:100% ;
        height: 2em;
        border: 0.1rem solid rgba(0,0,0,0.8);
        line-height: 2em;
        text-align: center;
        color: white;
        background-color: rgba(0,0,0,0.8);
        position: relative;
    }
    .calendar_body{
        width: 100%;
        background-color:rgba(0,0,0,1) ;
    }
.daybox :hover{
    background-color: red;
}

</style>
