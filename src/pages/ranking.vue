<template>
    <div id="ranking">
       <div class="rankBg">
        <header id="header">
                <!--<img src="../assets/image/headlineimg.png"/>-->
                <mt-field label="金额" style="border:2px solid yellow" :placeholder="'请输入金额'" type="tel"></mt-field>
                <button @click="msg">参与</button>
                
         </header>
            <div id="rankcon" v-if="seen">
                <table class="amtable">
                    <thead>
                        <tr>
                            <th class="am-text-left">名次</th>
                            <th class="am-text-left">昵称</th>
                            <th class="am-text-right">奖品</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td class="am-text-left"><span class="amiconbtn">1</span></td>
                            <td class="am-text-left">zed</td>
                            <td class="am-text-right">酒</td>
                        </tr>
                        <tr>
                            <td class="am-text-left"><span class="amiconbtn">2</span></td>
                            <td class="am-text-left">smoke</td>
                            <td class="am-text-right">烟</td>
                        </tr>
                    </tbody>
                </table>
                <div id="sambutton">
                    <div>点击查看即可查看您的排名</div>
                    <button type="button" class="am-btn" @click="seen=false">关闭</button>
                </div>
            </div>
            <div v-if="show">
                <span class="text" :style="{ backgroundColor: bgColor, color: color }">{{hour}}</span><span :style="{ color: bgColor }">:</span><span
                class="text" :style="{ backgroundColor: bgColor, color: color }">{{minute}}</span><span :style="{ color: bgColor }">:</span><span
                class="text" :style="{ backgroundColor: bgColor, color: color }">{{second}}</span>
            </div>
            <button @click="clickButton">点击</button>
        </div> 
    </div>
</template>

<style scoped>
    #ranking {
        height: 100%;
        }
        .rankBg{
            position:absolute;
        
            height: 100%;  
            width: 100%;        
        }
    #header img {
        display: block;
        max-width: 100%;
        width: 100%;
        height: auto;
    }
    #rankcon {
        background-color: #ef6944;
        margin: 0 1.5rem;
        color: #fcde00;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        padding: 2.5rem 2rem 0 2rem;
        position: relative;
        z-index: 2;
        margin-top: 5px;
    }
    #rankcon:before {
        background-color: #fcde00;
        content: "排行榜";
        color: #ef6a44;
        position: absolute;
        top: -5px;
        width: 80%;
        left: 10%;
        text-align: center;
        border-radius: 0 0 4px 4px;
        -webkit-border-radius: 0 0 4px 4px;
        -moz-border-radius: 0 0 4px 4px;
        line-height: 2rem;
        z-index: 3;
    }
    #rankcon:after {
        background-color: #d43937;
        position: absolute;
        width: 84%;
        height: 5px;
        top: -5px;
        left: 8%;
        border-radius: 8px 8px 0 0;
        content: "..";
        -webkit-border-radius: 8px 8px 0 0;
        -moz-border-radius: 8px 8px 0 0;
        text-align: center;
    } 
    .amtable {
        width: 100%;
        line-height: 2rem;
    }

    table {
        max-width: 100%;
        background-color: transparent;
        empty-cells: show;
        
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .amtable thead {
        color: #fff;
        border-bottom: 1px solid #fcde00;
        font-size: .9rem;
    }
    .am-text-left {
        text-align: left !important;
    }
    .am-text-right {
        text-align: right !important;
    }
    .amtable tbody tr {
        border-bottom: 1px solid #ee613e;
        font-size: .8rem;
    }
    .amiconbtn {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        font-size: .7rem;
        line-height: 1rem;
        border-radius: 50%;
        background-color: #fcde00;
        color: #ef6944 !important;
        text-align: center;
    }
    #sambutton {
        text-align: center;
        padding: 1rem 0;
    }
    #sambutton div {
        color: #fff;
        font-size: 0.4rem;
        padding-bottom: 0.5rem;
    }
    #sambutton button {
        background-color: #fcdf00;
        color: #931510;
        border: 2px solid #931510;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        padding: .4rem 1rem;
        font-size: 0.6rem;
    }
    .text {
        background-color: #000000;
        color: #ffffff;
        padding: 3px 2px;
        border-radius: 2px;
    }
</style>

<script>
import {MessageBox} from 'mint-ui'
// import socket.io from 'socket.io'
  export default {
    props: {
      date: {
        default: new Date()
      },
      bgColor: {
        default: '#000000'
      },
      color: {
        default: '#FFFFFF'
      }
    },
    data () {
      return {
        seen:false,
        show:false,
        hour: '00',
        minute: '00',
        second: '05',
        count: this.date - new Date().getTime(),
        interval: null,
        id:''
      }
    },
    sockets:{
        connect: function(){
            this.id=this.$socket.id
            },
        customEmit: function(val){
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
    },
    mounted () {
      this.$socket.emit('connect', val);
    },
    methods: {
      start () {
          var _this = this;
        _this.interval = setInterval(() => {
          _this.count = (parseInt(_this.hour)*60*60+parseInt(_this.minute)*60+parseInt(_this.second))*1000 - 1000
          if (_this.count <= 0) {
            _this.second = '00'
            clearInterval(_this.interval)
            _this.timeDown()
            return
          }
          _this.hour = parseInt(_this.count / (60 * 60 * 1000)) + ''
          if (_this.hour < 10) {
            _this.hour = '0' + _this.hour
          }
          let n = _this.count % (60 * 60 * 1000)
          _this.minute = parseInt(n / (60 * 1000)) + ''
          if (_this.minute < 10) {
            _this.minute = '0' + _this.minute
          }
          let n2 = n % (60 * 1000)
          _this.second = parseInt(n2 / 1000) + ''
          if (_this.second < 10) {
            _this.second = '0' + _this.second
          }
        //   _this.count = _this.count - 1000
        }, 1000)
      },
      timeDown () {
        this.$emit('timeDown')
        this.seen = true
        this.show = false
      },
      msg(){
          MessageBox('提示','参与成功')
          this.second = "05"
          this.show = true,
          this.start()
      },
      clickButton: function(val){
            // $socket is socket.io-client instance
            this.$socket.emit('emit_method', val);
        }
    },
    computed: {}
  }
</script>
