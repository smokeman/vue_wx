<template>
  <div id="userset">
      <!--<div class="dataBa" v-for="datainfo in userdataInfo ">-->
      <mt-header fixed title="抽奖设置">
        
      </mt-header>
 
        <!--<section id="home-head">
            <div class="headImg">
                <img src="../assets/image/headImg.png"/>
            </div>
            <p class="userName">{{datainfo.Nickname}}</p>
            <img class="iconCode" src="../assets/image/iconCode.png" />
        </section>
       
        <div id="head-info">
            <div class="head-info-left">
                <p>{{datainfo.Ranking}}</p>
                <span>我的排名</span>
            </div>
            <div class="head-info-right">
                <p>{{datainfo.addup}}</p>
                <span>累计快递</span>
            </div>
        </div>
      <section id="userInfo" >
        <mt-cell title="昵称" value="">{{datainfo.Nickname}}</mt-cell>
        <mt-cell title="姓名" value="">{{datainfo.name}}</mt-cell>
        <mt-cell title="性别" value="">{{datainfo.sex}}</mt-cell>
        <mt-cell title="手机号" value="">{{datainfo.telNo}}</mt-cell>
        <mt-cell title="地区" value="">{{datainfo.region}}</mt-cell>
        <mt-cell title="所属公司" value="">{{datainfo.company}}</mt-cell>
         <router-link to="/MouserData">
        <mt-button size="normal" type="primary">修改个人资料</mt-button>

        <mt-field label="开启时间" placeholder="Input" type="time" v-model="birthday"></mt-field>
  </router-link>
      </section>-->
      <div v-if="item">
        <section id="userInfo">
        <mt-field label="奖品名称" title="" value=""></mt-field>
        <mt-field label="中奖人数" title="" value=""></mt-field>
        <mt-field label="抽奖金额" title="" value="" type="num">元</mt-field>
        <mt-button size="normal" type="primary" @click="itemset">开始抽奖</mt-button>
        </section>
      <div id="egg" style="color:red" v-if="egg">
        本次中奖人:smoke
      </div>
        <div id="tabContainer">
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <mt-cell v-for="data in order" :title="'抽奖单号：'+data.orderNo" :label="'中奖人：'+data.kuaidiNo"  is-link>
                    <span style="color:#26a2ff;" class="" v-show="data.isPut"></span>
                    <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" >
                    <mt-cell v-for="data in isputed" :title="'订单号1：'+data.orderNo" :label="'邮件号：'+data.kuaidiNo"  is-link>
                    <span style="color:#26a2ff;" class="" v-show="data.isPut">EMS已收</span>
                    <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                    </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                    <mt-cell v-for="data in noputed" :title="'订单号：'+data.orderNo" :label="'邮件号：'+data.kuaidiNo"  is-link>
                    <span style="color:#26a2ff;" class="" v-show="data.isPut">EMS已收</span>
                    <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                    </mt-cell>
            </mt-tab-container-item>
            </mt-tab-container>
        </div>
      </div>
      <div id="time" v-if="timecount" >
        
        <span class="text" :style="{ backgroundColor: bgColor, color: color }">{{hour}}</span><span :style="{ color: bgColor }">:</span><span
        class="text" :style="{ backgroundColor: bgColor, color: color }">{{minute}}</span><span :style="{ color: bgColor }">:</span><span
        class="text" :style="{ backgroundColor: bgColor, color: color }">{{second}}</span>
      </div>
      <div id="time" v-if="timecount" >
        smoke已参与｜金额5元
      </div>
      <div id="time" v-if="timecount" >
        zed已参与｜金额6元
      </div>
   </div>
  </div>
</template>
<script>


//   export default {
//     name: 'userset',
//     data() {
//       return {
//         selected:"1",
//          value:'男', 
//          pickerValue:"" ,
//          userdataInfo:[]
//           }
//        },
//         methods: {
//        fetUserData(){
//          var _this= this;
//             this.$http.get('src/data/user.data').then(function(res){       
//                _this.userdataInfo=res.data;
//             }).catch(function(err){
//               console.log(err);
//             })
//        }
      
//     },
//    mounted(){
//       this.fetUserData();  
         
//     }
       
     
//   }
</script>
<style scoped>
  #userdata {
      height: 100%;
    }
    .dataBa{
        position:absolute;
        background:#eeeeee;
        height: 100%;  
        width: 100%;        
    }
    #userInfo {
     margin: 40px 0;
    }
    #time{
        margin:40px 0;
    }
    #egg{
        margin:40px 0;
    }
    .mint-button--primary {
      width: 80%;
      margin: 1rem 10%;
    }
    #home-head {
      height: 5.45rem;
      background-color: #26a2ff;
      display: -webkit-box;
      -webkit-box-align:center;
      margin-top: 39px;
  }
  .headImg {
      width: 3.5rem;
      height: 3.5rem;
      margin-left: .9rem;
    
  }
  .headImg img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      border: .125rem solid #068df3;
  }
  .userName {
      color: #fff;
      margin-left: .5rem;
      font-size: .8rem;
  }
  .iconCode {
      width: 1rem;
      height: 1rem;
      margin-left: .8rem;
  }
  #head-info {
      height: 2.05rem;
      background-color: #068df3;
      display:-webkit-box;
      text-align: center;
      color: #fff;
      font-size: .7rem;
      -webkit-box-align:center;
  }
  .head-info-left,.head-info-right {
      -webkit-box-flex:1;
  }
  .head-info-left {
      border-right: 1px solid #fff;
  }
    .text {
        background-color: #000000;
        color: #ffffff;
        padding: 3px 2px;
        border-radius: 2px;
    }

    #order {
      height: 100%;
    }
    .orderba{
        position:absolute;
        background:#eeeeee;
        height: 100%;  
        width: 100%;        
    }
   #Allorder {
       margin-top: 40px;
       margin-bottom: 2rem;
   }
   .textAll {
       color: #898989;
       line-height: 1.5rem;
       font-size: .4rem;
       padding-left: 10px;
       margin-top: 3px;
   }
   .page-infinite-loading {
        display: inline-block;
        position: relative;
       font-size: .5rem;
       left:50%;
       margin-left:-11.5px;
   }
   .page-infinite-loading .mint-spinner-fading-circle {
       margin:0 auto;
   }
</style>

<script>
import {MessageBox} from 'mint-ui'
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
        egg:false,
        item:true,
        seen:false,
        show:false,
        timecount:false,
        hour: '00',
        minute: '00',
        second: '00',
        count: this.date - new Date().getTime(),
        interval: null,
        selected:'1',
            order:[
                {orderNo:'170909081',kuaidiNo:'zed',isPut:true},
                {orderNo:'170909082',kuaidiNo:'smoke',isPut:true},
                // {orderNo:'23211',kuaidiNo:'未收',isPut:false},
                // {orderNo:'1234',kuaidiNo:'未收',isPut:false},
                // {orderNo:'34rds',kuaidiNo:'已收',isPut:true},
                // {orderNo:'12345678',kuaidiNo:'已收',isPut:true},
                // {orderNo:'23456',kuaidiNo:'已收',isPut:true},
                // {orderNo:'23211',kuaidiNo:'未收',isPut:false},
                // {orderNo:'1234',kuaidiNo:'未收',isPut:false},
                // {orderNo:'34rds',kuaidiNo:'已收',isPut:true}
            ],
            isputed:"",
            noputed:'',
             loading: false,
            allLoaded: false,
            wrapperHeight: 0
      }
    },
    mounted () {
      const list= this.order;     
	 const finished =(list)=>{
       return list.filter(function(item){
			return item.isPut;
		})
           }    
    const nofinished =(list)=>{
       return list.filter(function(item){
			return !item.isPut;
		})
           }     
          this.isputed=finished(list);
          this.noputed=nofinished(list);
          
    },
    methods: {
        loadMore() {
                this.loading = true;
                setTimeout(() => {
                this.loading = false;
                }, 2500);
            },
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
        // this.seen = true
        this.timecount = false
        this.item = true
        this.egg = true
      },
      msg(){
          MessageBox('提示','参与成功')
          this.second = "05"
          this.show = true
          this.start()
      },
      itemset(){
        //   MessageBox('提示','设置成功')
          this.second = "05"
          this.item = false
        //   this.show = true
          this.timecount = true
          this.egg = false
          this.start()
          
      }
    },
    computed: {}
  }
</script>