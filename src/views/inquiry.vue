<template>
    <div>
        <div class="input_search">
            <van-search v-model="value" placeholder="搜索医院、医生、科室、疾病" />
        </div>
        <van-dropdown-menu  class="van_menu_1">
            <van-dropdown-item class="text_fz fz_size_14" v-model="value1" :options="option1" />
            <van-dropdown-item class="text_fz border_1 fz_size_14" v-model="value2" :options="option2" />
            <van-dropdown-item class="text_fz border_1 fz_size_14" v-model="value3" :options="option3" />
            <van-dropdown-item class="text_fz border_1 fz_size_14" v-model="value4" :options="option4" />
        </van-dropdown-menu>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-cell v-for="(item,index) in list" :key="index">
                <div class="div_1_row">
                    <div class="img_2">
                        <van-image width="49" height="49" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                    <div class="div_1_column">
                        <div class="flex_3">
                            <span class="text_name text_name_color">王志强</span>
                            <span class="text_name fz_size text_ml">副主任医师</span>
                            <span class="text_border fz_size text_ml">三甲</span>
                        </div>
                        <div class="flex_3">
                            <span class="text_name fz_size_14">中山大学附属肿瘤医院</span>
                            <span class="text_ml fz_size_14">肿瘤内科</span>
                        </div>
                        <div class="flex_3">
                            <div class="fz_size_14 text_color">接诊率 100%  好评率100%  问诊量 7</div>
                            <div class="fz_size_14 text_color fz_line">擅长：消化道肿瘤（食道癌、胃癌、肠癌、胰腺癌、肝癌）的内科治疗及临床研究。</div>
                        </div>
                        <div class="flex_3 flex_space-between mt_10">
                            <span class="text_color_2 fz_size_14">￥120起<span class="text_color_3 fz_size_14 ml_9 fz_w">可咨询</span></span>
                            <span class="text_color_3 fz_size_14 fz_w">平均回复：1小时内</span>
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "inquiry",
        data() {
            return {
                value1: 0,
                value2: 'a',
                value3: 'b',
                value4: 'b',
                option1: [
                    { text: '全国', value: 0 },
                    { text: '深圳', value: 1 },
                    { text: '广州', value: 2 }
                ],
                option2: [
                    { text: '科室', value: 'a' },
                    { text: '科室2', value: 'b' },
                    { text: '科室2', value: 'c' },
                ],
                option3: [
                    { text: '好评排序', value: 'a' },
                    { text: '好评排序', value: 'b' },
                    { text: '好评排序', value: 'c' },
                ],
                option4: [
                    { text: '筛选', value: 'a' },
                    { text: '科室2', value: 'b' },
                    { text: '科室3', value: 'c' },
                ],
                list: [],
                loading: false,
                finished: false,
                diseaseName:[{id:1,name:'鼻咽癌'},{id:2,name:'鼻癌'},{id:3,name:'鼻癌'},{id:4,name:'鼻癌'},{id:3,name:'鼻癌'},{id:4,name:'鼻癌'},{id:3,name:'鼻癌'},{id:4,name:'鼻癌'}],
            }
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (this.list.length >= 20) {
                        this.finished = true;
                    }
                }, 1000);
            }
        }
    }
</script>

<style scoped>
    @import '../assets/scss/index.css';
    .input_search{
        left: 0px;
        top: 67px;
        height: 40px;
        width: 100%;
    }
    .img_2{
        display: flex;
        align-items: center;
    }
    .img_1_size{
        height: 120px;
        width: 100%;
    }
    .van_menu_1{
        height: 43px;
        margin-top: 13px;
        align-items: center;
        border-bottom: 1px solid rgba(241, 243, 246, 1);
    }
    .van-search__content{
        border-radius: 20px!important;
    }
    .fz_line{
        line-height: 16px!important;
        margin-top: 5px;
    }
    .flex_space-between{
        display: flex;
        justify-content: space-between;
    }
    .text_fz{
        height: 30px;
        color: rgba(53, 53, 53, 1);
        font-size: 14px;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .div_1_row{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        /*height: 150px;*/
    }
    .div_1_column{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        flex: 3;
        margin-left: 10px;
        /*height: 140px;*/
        line-height: 30px;
    }
    .div_2_column{
        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: column;
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
    .flex_3{
        width: 100%;
    }
    .van-row--justify-space-between{
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .van-col--6{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 19px;
        line-height: 15px;
        border-radius: 11px;
        background-color: rgba(240, 240, 240, 1);
        color: rgba(153, 153, 153, 1);
        font-size: 10px;
        margin: 4px 0 0 4px;
        font-family: Arial;
        border: 1px solid rgba(255, 255, 255, 0);
        width: 16%!important;

    }
    .van-cell{
        padding-bottom: 0!important;
    }
    .van-dropdown-menu__title{
        font-size: 14px!important;
        height: 30px!important;
        line-height: 30px!important;
    }
    .van-dropdown-menu__item:nth-of-type(n+2) {
        border-left: 1px solid rgba(241, 243, 246, 1);
    }
    .van-image{
        height: 120px;
    }
    .van-cell:not(:last-child)::after{
        left: 0!important;
    }
</style>
