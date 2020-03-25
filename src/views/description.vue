<template>
    <div class="div_flex">
        <div class="div_1">
            <div class="div_1_flex_1">
                <div class="div_1_flex">
                    <div class="mp_21 flex_row div_lb_1">
                        <label class="fz_size_20 fz_w text_color_3">请描述您的病情</label>
                        <el-popover
                            placement="bottom"
                            title="请描述疾病名称或者症状，患病时间，做过什么检查，用药情况，目前病情是加重还是缓解，想要获得医生什么帮助？描述越详细，医生回复质量越高"
                            width="100%"
                            trigger="click"
                            >
                            <span class="fz_size_14 text_color_2 ml_10" slot="reference"  @click="getMethod">如何描述？</span>
                        </el-popover>
                    </div>
                    <textarea class="text_1 mp_5" :class="visible? 'is_show_t' : 'is_show_f'" placeholder="请对医生说出您的病情，如症状、发病时间、诊疗经过、家庭史等等"></textarea>
                </div>
            </div>
            <div class="div_2">
                <div class="mp_20">
                    <span class="fz_size_12 text_color_6 text_span">请上传检查报告或患处照片（非必填，最多9张）</span>
                    <span class="fz_size_12 text_color text_span">照片仅自己和医生可见</span>
                </div>
                <div class="img_up">
                    <van-uploader v-model="fileList" multiple />
                </div>
            </div>
        </div>
        <div class="div_butt_1">
            <van-button class="butt_1" type="primary" size="large">保存</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "description",
        data(){
            return {
                visible: false,
                fileList: [
                    // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                    // // Uploader 根据文件后缀来判断是否为图片文件
                    // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { url: 'https://cloud-image', isImage: true }
                ]
            }
        } ,
        methods: {
            getMethod () {
                console.log(this.visible);
              this.visible?this.visible=false:this.visible=true;
            },
            getMethodFun: function () {
                console.log('22')
            }
        }
    }
</script>

<style scoped>
    @import '../assets/scss/des.css';
.div_1{
    left: 0;
    right: 0;
    top: 47px;
}
.div_1_flex_1{
    border: 1px solid #F0F0F0;
}
.div_1_flex{
    margin: 0 17px 10px 17px;
}
.div_lb_1{
    justify-content: flex-start;
    align-items: flex-end;
 }
.text_1{
    width: 100%;
    height: 159px;
    line-height: 20px;
    color: rgba(191, 191, 191, 1);
    font-size: 14px;
    text-align: left;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(255, 255, 255, 0);

}
.text_span{
    padding: 0 17px;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: flex-start;
}
textarea::-webkit-input-placeholder {
    font-size: 14px;
    color: #BFBFBF;
    text-align: left;
}
.is_show_t{
    margin-top: 93px;
}
.is_show_f{
    margin-top: 0px;
}
.img_up{
    display: flex;
    justify-content:flex-start ;
    align-items: flex-start;
    margin: 15px 17px 46px 17px
}
.div_butt_1{
    position: fixed;
    left: 18px;
    right: 18px;
    bottom: 16px;
}
</style>
<style>
    .el-popper[x-placement^=bottom]{
        left: 17px!important;
        right: 17px!important;
        height: 3.81em!important;
        border: 1px solid #ED8506;
        padding: 10px;
        background: #ffd28e5c!important;
    }
    .el-popper[x-placement^=bottom] .popper__arrow{
        border-bottom-color:#ED8506!important;
    }
    .el-popover__title{
        font-size: 12px!important;
        color: #636363!important;
        line-height: 1.6!important;
    }
    .el-popper[x-placement^=bottom] .popper__arrow::after{
        border-bottom-color:#ffd28e5c!important;
    }
    .van-uploader__preview-image{
        border: 1px dashed #e4e7ed!important;
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
</style>