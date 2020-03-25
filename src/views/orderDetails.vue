<template>
    <div class="div_flex">
        <div class="div_1">
            <div class="text_color_5 fz_size_16 fz_w text_left">订单待支付</div>
            <div class="text_color_5 fz_size_13 mp_18 text_2">您已提交问诊订单，请在9分22秒内完成支付，超时未支付订单自动取消。</div>
            <van-button class="butt_1" type="primary" size="large">去支付</van-button>
        </div>
        <div class="div_2">
            <div class="flex_row div_2_flex">
                <div class="text_color fz_size_12 ml_17 text_left flex_1_div">订单类型</div>
                <div class=" fz_size_12 text_color_3 flex_1_div">普通问诊(50元)</div>
                <div class="flex_1_div"></div>
            </div>
            <div class="flex_column">
                <span class="fz_size_12 text_color ml_17 mp_16">咨询医生</span>
                <div class="div_2_text">
                    <div class="ml_20">
                        <van-image width="43" height="43" round src="http://aidi-data-1300131487.cos.ap-guangzhou.myqcloud.com/doctors/13602451434.jpeg" />
                    </div>
                    <div class="ml_10 flex_column">
                        <div class="text_left">
                            <span class="fz_size_15 fz_w">王志强</span>
                            <span class="ml_10 fz_size_14 text_color_5">副主任医师</span>
                        </div>
                        <span class="fz_size_14 text_color">中山大学附属肿瘤医院 肿瘤内科</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="div_3">
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left flex_1_div">咨询内容</div>
            </div>
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">患者信息</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">陈儒锋  男  35岁</div>
            </div>
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">就诊情况</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">未去医院就诊过</div>
            </div>
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">病情描述</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">是监考老师来了吗啦啦啦啦啦啦</div>
            </div>
        </div>
        <div class="div_4">
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">订单号码</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">nzhsldiuisek2468741324684</div>
                <div class="fle_grow fz_size_10 text_color butt_div_1 mr_17">复制</div>
            </div>
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">下单时间</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">2020-03-19 21:35:29</div>
            </div>
            <div class="flex_row div_3_flex">
                <div class="text_color fz_size_12 ml_17 text_left fle_grow_text">应付金额</div>
                <div class=" fz_size_12 text_color_3 wz_1 fle_grow_text_1  text_left">50元</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderDetails"
    }
</script>

<style scoped>
    @import '../assets/scss/index.css';
.div_1{
    height: 153px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    border-bottom: 10px solid #F1F3F6;
    padding: 5px 17px 0 17px;
}
.div_2{
    height: 153px;
    line-height: 20px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0);
    border-bottom: 10px solid #F1F3F6;
}
.div_3{
    height: 170px;
    line-height: 20px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0);
    border-bottom: 10px solid #F1F3F6;
}
.butt_1{
    margin-top: 18px;
    font-size: 14px;
}
.text_left{
    text-align: left;
}
.fle_grow_text{
    width: 35%;
}
.fle_grow_text_1{
    flex-grow: 1;
}
.text_2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
}
.div_2_flex{
    display: flex;
    justify-content: space-between;
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid rgba(244, 244, 244, 1);
}
.flex_1_div{
    flex: 1;
}
.text_left{
    text-align: left;
}
.div_2_text{
    height: 60px;
    line-height: 20px;
    background-color: rgba(247, 248, 248, 1);
    text-align: center;
    margin: 6px 17px;
    border: 1px solid rgba(255, 255, 255, 0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}
.div_3_flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid rgba(244, 244, 244, 1);
}
.butt_div_1{
    width: 40px;
    height: 19px;
    line-height: 19px;
    border-radius: 11px;
    background-color: rgba(255, 255, 255, 0);
    color: rgba(191, 191, 191, 1);
    font-size: 10px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(191, 191, 191, 1);
}
.van-button--large{
    height: 40px!important;
    line-height: 40px!important;
    border-radius: 62px!important;
    background:#ED8506!important;
    border: none!important;
}
</style>