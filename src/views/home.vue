<template>
  <div class="bg_flex">
    <div class="div_1">
        <div class="div_1_title">肿瘤义诊</div>
        <div class="div_1_title_text">百位医生 在线义诊</div>
        <div class="div_row">
          <div class="div_column"  v-for="(item,index) in list" :key="index" >
          <div class="head_1">
            <img class="img_size" :src="item.doctor.imageUrl"/>
          </div>
            <span class="span_active">剩余{{item.normalInquiryConfig.discount}}次</span>
          <div class="span_text">
            <span class="text_color_1 text-decoration">￥{{item.normalInquiryConfig.discount}}元</span>
            <span class="text_color_2">￥{{item.normalInquiryConfig.price}}元</span>
          </div>
        </div>
          <div class="div_column" @click="more">
            <div class="head_2 bg_color">
              更多<br/>
              医生
            </div>
          </div>
        </div>
    </div>
    <div class="div_2">
      <div class="div_1_title flex_between">
        <span>普通问诊</span>
        <span class="text_color_1 font_normal" @click="more2">更多></span>
      </div>
      <div v-for="(item,index) in list" :key="index" class="div_list">
        <div class="div_list_row">
          <div class="head_1">
            <img class="img_size" :src="item.doctor.imageUrl"/>
          </div>
          <div class="span_name_text">
            <div>
             <span class="text_name text_name_color">{{item.doctor.doctorName}}</span>
              <span class="text_name fz_size text_ml">{{item.doctor.department}}</span>
            </div>
            <span class="text_color_1 fz_size">{{item.doctor.hospital}}</span>
          </div>
          <div class="div_flex">
            <van-button type="default" class="see_button">去看看</van-button>
          </div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active" class="tab-bar">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    export default {
      name: "home",
      props: {
        index: {
        type: Number,
        default: 0
        }
      },
      data(){
        return {
          list:[],
          active: this.index
        }
      },
        mounted () {
            this.$axios.get('/api/api/doctor/normalon').then(response=>{
                if( response.data.successful ){
                    var data=response.data.value;
                    for (let i=0;i<data.length;i++){
                        this.list.push(data[i]);
                    }
                }
            }) .catch(err => {
                console.log(err);
            });
        },
        methods: {
            more(){
                this.$router.push({name: 'freeClinic'});
            },
            more2(){
                this.$router.push({name: 'inquiry'});
            }
        }
    }
</script>

<style scoped>
  @import '../assets/scss/index.css';
  .bg_flex{
    margin: 0 8px;
  }
  .div_1{
    display: flex;
    flex-direction: column;
    height: 214px;
    margin: auto;
    border: 1px solid red;
    left: 17px;
    right: 17px;
    top: 84px;
    line-height: 20px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0);
  }
  .div_2{
    display: flex;
    flex-direction: column;
    left: 17px;
    top: 315px;
    margin-top: 17px;
    height: 324px;
    line-height: 20px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0);
    margin-bottom: 70px;
  }
  .div_1_title{
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    color: rgba(48, 48, 48, 1);
    height: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin: 18px 0 11px 24px;
    font-family: PingFangSC-bold;
    border-left: 3px solid rgba(237, 133, 6, 1);
    padding-left: 5px;
  }
  .div_1_title_text{
    left: 33px;
    top: 133px;
    margin-left: 16px;
    margin-bottom: 12px;
    width: 166px;
    height: 19px;
    color: rgba(99, 99, 99, 1);
    font-size: 20px;
    text-align: left;
    font-family: SFUIText-regular;
  }
  .div_row{
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .div_column{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
  }
  .head_1{
    left: 32px;
    top: 164px;
    display: flex;
    /*justify-content: center;*/
    align-items: flex-end;
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }
  .head_2{
    left: 32px;
    top: 164px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 8px;
    border: 1px solid #ED8506;
  }
  .bg_color{
    left: 272px;
    top: 164px;
    width: 72px;
    height: 72px;
    line-height: 15px;
    border-radius: 8px;
    background-color: rgba(246, 247, 249, 1);
    color: #999999;
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  .img_size{
    height: 72px;
    width: 72px;
    border-radius: 8px;
  }
  .span_text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    margin-top: 10px;;
  }
  .text_color_1{
    color: #999999;
  }
  .text_color_2{
  left: 209px;
  top: 264px;
  height: 16px;
  color: rgba(237, 133, 6, 1);
  font-size: 14px;
  text-align: left;
  font-family: SFUIText-bold;
}
  .font_normal{
  font-weight: normal;
  margin-right: 16px;
  color: #999999;
}
  .flex_between{
    display: flex;
    justify-content: space-between;
  }
  .div_list{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin: 0 17px 15px 15px;
  }
  .div_list_row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
  .span_name_text{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    flex: 2;
    margin-left: 13px;
  }
  .text_name_color{
    left: 117px;
    top: 383px;
    height: 19px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: left;
    font-family: SFUIText-bold;
  }
  .fz_size{
    left: 172px;
    top: 386px;
    height: 16px;
    color: rgba(153, 153, 153, 1);
    font-size: 13px;
    text-align: left;
    font-family: SFUIText-regular;
  }
  .text_ml{
    margin-left: 10px;
  }
  .see_button{
    height: 30px;
    line-height: 20px;
    border-radius: 15px;
    background-color: rgba(253, 243, 231, 1);
    color: rgba(237, 133, 6, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  .div_flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab-bar {
    background-color: white;
    height: 54px;
    border: 0 solid rgb(210, 210, 210);
    border-top-width: 1px;
    position: fixed;
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
.span_active{
  margin-top: -20px;
  width: 72px;
  height: 20px;
  line-height: 17px;
  border-radius: 0px 0px 8px 8px;
  background-color: rgba(237, 133, 6, 0.78);
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  text-align: center;
  font-family: Arial;
  text-align: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
