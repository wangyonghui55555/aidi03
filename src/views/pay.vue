<template>
    <div class="div_flex_1">
        <div class="text_1">请14分57秒内完成支付，超时订单自动取消</div>
        <div class="div_span_1">
            <span class="fz_size_14 text_color_5">图文问诊  陈鑫</span>
            <span class="text_color_2 fz_size_14">50元</span>
        </div>
        <div class="div_2">
            <div class="fz_size_13 text_color text_flex">选择支付方式</div>
            <div class="text_flex_2">
                <div>
                    <van-image width="30" height="30" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div class="flex_column div_text">
                    <span class="fz_size_14 text_color_3">微信支付</span>
                    <span class="fz_size_10 text_color">亿万用户的选择，更快更安全</span>
                </div>
                <div>
                    <van-checkbox v-model="checked"></van-checkbox>
                </div>
            </div>
        </div>
        <div class="span_text">费用由医生自行设定，深圳爱递平台不收取任何额外费用</div>
        <van-submit-bar
            :price="5000"
            button-text="立即支付"
            @submit="onSubmit"
            label="实际支付："
        />
    </div>
</template>

<script>
    export default {
        name: "pay",
        data(){
            return{
                checked: true
            }
        },
        methods:{
            onSubmit(){

            }
        }
    }
</script>
<style scoped>
    @import '../assets/scss/index.css';
.div_flex_1{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #F1F3F6;
}
.div_2{
    height: 91px;
    line-height: 20px;
    text-align: center;
    background: #FFFFFF;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0);
}
.text_1{
    height: 31px;
    line-height: 31px;
    background-color: rgba(252, 243, 199, 1);
    color: rgba(237, 133, 6, 1);
    font-size: 12px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(255, 255, 255, 0);
}
.span_text{
    height: 14px;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    font-family: SFUIText-regular;
}
.text_flex{
    display: flex;
    justify-content: left;
    align-items: center;
    height: 34px;
    padding-left: 17px;
    border-bottom: 1px solid #F4F4F4;
}
.text_flex_2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 57px;
    padding-left: 17px;
    padding-right: 17px;
}
.div_text{
    justify-content: left;
    flex: 1;
    margin-left: 9px;
}
.div_span_1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    padding: 0 14px;
    line-height: 20px;
    text-align: center;
    background-color: #FFFFFF;
    border-bottom: 10px solid #F1F3F6;
}
.van-submit-bar__bar{
    padding: 0!important;
    align-items: flex-end!important;
    height: 40px!important;
}
.van-submit-bar__button--danger{
    border-radius: 0!important;
    background: #ED8506!important;
}
.van-submit-bar__text{
    height: 40px!important;
    line-height: 40px!important;
    margin-left: 17px;
    text-align: left!important;
}
.van-submit-bar__text{
    color: #999999!important;
    font-size: 12px!important;
}
.van-submit-bar__price{
    color: #ED8506!important;
    font-size: 18px!important;
}
.van-checkbox__icon--checked .van-icon{
    background-color: #09BB07!important;
    border-color: #09BB07!important;
}
</style>