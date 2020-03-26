<template>
    <div class="div_flex">
        <div class="flex_row ml_17 mr_17 flex_row_1">
            <div class="div_flex_2">
                <div class="text_color_3 fz_w fz_size_20">王志强</div>
                <div class="mp_18">
                    <div class="fz_size_14 text_color text_lf">
                        <span>副主任医师</span>
                        <span class="ml_8">肿瘤内科</span>
                    </div>
                    <div class="fz_size_14 text_color">中山大学附属肿瘤医院<span class="text_border fz_size ml_10">三甲</span></div>
                </div>
            </div>
            <div class="img_t_1">
                <van-image width="85" height="85" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
        </div>
        <div class="flex_row flex_2  ml_17 mr_17">
            <div class="">
                <span class="fz_w fz_size_18 text_color_3">100%</span>
                <span class="text_color_3 fz_size_13">接诊率</span>
            </div>
            <div class="ml_20">
                <span class="fz_w fz_size_18 text_color_3"> 7</span>
                <span class="text_color_3 fz_size_13">问诊量</span>
            </div>
            <div  class="ml_20">
                <span class="fz_w fz_size_18 text_color_3">1小时内</span>
                <span class="text_color_3 fz_size_13">平均回复</span>
            </div>
        </div>
        <div class="fz_size_14 text_color mp_18 text_lf   ml_17 mr_17">擅长：消化道肿瘤（食道癌、胃癌、肠癌、胰腺癌、肝癌）的内科治疗及临床研究。</div>
        <div class="text_1 mr_17 fz_size_14 text_color">医生信息 ></div>
        <div class="flex_column div_2">
            <div class="flex_row mp_20 flex_3">
                <div class="text_al">
                    <van-image width="20" height="20" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <span class="ml_6 fz_size_12 text_color">保证医生真实</span>
                </div>
                <div class="text_al">
                    <van-image width="20" height="20" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <span  class="ml_6 fz_size_12 text_color">未使用随时退</span>
                </div>
                <div class="text_al">
                    <van-image width="20" height="20" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <span  class="ml_6 fz_size_12 text_color">不满意可申诉</span>
                </div>
            </div>
            <div class="flex_row flex_ju_center ml_17 mr_17">
                <el-popover
                    placement="bottom"
                    title="使用文字、图片与医生线上沟通"
                    width="100%"
                    popper-class="do"
                    trigger="click">
                    <div class="text_color_6 fz_size_13">· 通过文字、图片咨询医生</div>
                    <div class="text_color_6 fz_size_13">· 24小时内不限次提问</div>
                    <div class="div_flex_1" slot="reference" @click="isShwo"  :class="isDisplay? 'div_flex_1' : 'div_flex_3'">
                        <van-image width="30" height="30" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <span class="fz_w fz_size_16 text_color_3 mp_10">普通问诊</span>
                        <span class="mp_5 fz_size_14 text_color_2">￥50/次</span>
                    </div>
                    <div class="div_span_jb" slot="reference">
                        <span class="span_jb" v-show="isDisplay"></span>
                    </div>
                </el-popover>
                <el-popover
                    placement="bottom"
                    title="使用文字、图片与医生线上沟通"
                    width="100%"
                    disabled="false"
                    trigger="click">
                    <div class="text_color_6 fz_size_13">· 通过文字、图片咨询医生</div>
                    <div class="text_color_6 fz_size_13">· 24小时内不限次提问</div>
                <div class="div_flex_3"  slot="reference">
                    <van-image width="30" height="30" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <span class="fz_w fz_size_16 text_color_4 mp_10">电话问诊</span>
                    <span class="mp_5 fz_size_14 text_color_4">暂未开通</span>
                </div>
                </el-popover>
                <el-popover
                    placement="bottom"
                    title="使用文字、图片与医生线上沟通"
                    width="100%"
                    disabled="false"
                    trigger="click">
                    <div class="text_color_6 fz_size_13">· 通过文字、图片咨询医生</div>
                    <div class="text_color_6 fz_size_13">· 24小时内不限次提问</div>
                <div class="div_flex_3"  slot="reference">
                    <van-image width="30" height="30" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    <span class="fz_w fz_size_16 text_color_4 mp_10">视频问诊</span>
                    <span class="mp_5 fz_size_14 text_color_4">暂未开通</span>
                </div>
                </el-popover>
            </div>
        </div>
        <div class="div_butt_1">
            <van-button  type="primary" size="large">普通问诊  ￥50/次</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doctorDetails",
        data(){
            return {
                visible: true,
                isDisplay:false,
            }
        },
        methods:{
            isShwo(){
               if(this.isDisplay){
                   this.isDisplay=false;
               }else {
                   this.isDisplay=true;
               }
            }
        }
    }
</script>

<style scoped>
@import '../assets/scss/index.css';
@import '../assets/scss/doc.css';
.butt_1{
    position: fixed;
    bottom: 10px;
    left: 17px;
    right: 17px;
    width: 100%;
    margin: 0 auto;
    left: 19px;
    height: 40px;
    line-height: 23px;
    border-radius: 62px;
    background-color: rgba(237, 133, 6, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);
}
.div_flex{
    display: flex;
    flex-direction: column;
    /*height: 265px;*/
    background: #ebedf0;
}
.flex_row_1{
    margin-top: 23px;
    justify-content: space-between;
}
.div_flex_2{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
}
.text_lf{
    text-align: left;
}
.flex_2{
    margin-top: 23px;
}
.flex_3{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 17px 11px 17px;
}
.text_1{
   margin-top: 20px;
   text-align: right;
}
.div_span_jb{
    display: flex;
    justify-content: flex-end;
    margin-top: -25px;
}
.span_jb{
    width: 0px;
    height: 0px;
    border-bottom: 25px solid #ED8506;
    border-left: 25px solid transparent;
}
.div_2{
    line-height: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-top: 11px;
    background: #FFF;
    padding-bottom: 200px;
}
.div_butt_1{
    position: fixed;
    left: 18px;
    right: 18px;
    bottom: 16px;
    z-index: 9999!important;
}
.text_al{
    display: flex;
    align-items: center;
}
.flex_ju_center{
    justify-content: space-between;
}
.div_flex_1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 132px;
    line-height: 20px;
    border-radius: 4px;
    background-color: rgba(255, 251, 247, 1);
    text-align: center;
    border: 1px solid rgba(237, 133, 6, 1);
    background-color: #FFFBF7;
    padding: 0px 20px;
}
.div_flex_3{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 132px;
    line-height: 20px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0);
    text-align: center;
    border: 1px solid #ebedf0;
    margin-left: 5px;
    padding: 0px 20px;
}
.text_border{
    height: 19px;
    line-height: 15px;
    border-radius: 11px;
    color: rgba(237, 133, 6, 1);
    font-size: 10px;
    letter-spacing: 2px;
    padding: 4px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(237, 133, 6, 1);
}
</style>
<style>
.el-popover{
    border: 1px solid rgba(237, 133, 6, 1)!important;
    left: 17px!important;
    right: 17px!important;
    height: 90px!important;
}
.el-popper[x-placement^=bottom] .popper__arrow{
    border-bottom-color: rgba(237, 133, 6, 1)!important;
}
.van-button--large{
    height: 40px!important;
    line-height: 40px!important;
    border-radius: 62px!important;
    background:#ED8506!important;
    border: none!important;
}
.van-button{
    font-size: 14px!important;
}
.el-popover__title{
    color: #303133!important;
    font-size: 16px!important;
    font-weight: bold!important;
    margin-bottom: 10px!important;
}
</style>