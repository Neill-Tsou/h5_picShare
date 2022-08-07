<template>
    <!-- card -->
    <div class="card">
        <div>
            <van-row class="userImgBox" gutter="20">
                <van-col span="8">
                    <van-image class="userImg" width="6rem" height="6rem" fit="cover" round
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                </van-col>
                <van-col class="userNameBox" span="16">
                    <div>用户名，响应式渲染</div>
                    <div>id号，响应式渲染</div>
                </van-col>
            </van-row>
        </div>
        <div>
            <van-row class="userInfoBox" gutter="20">
                <van-col span="4">
                    <div>关注</div>
                    <div>数字</div>
                </van-col>
                <van-col span="4">
                    <div>粉丝</div>
                    <div>数字</div>
                </van-col>
                <van-col span="6">
                    <div>收藏与获赞</div>
                    <div>数字</div>
                </van-col>
                <van-col offset="3" span="7">
                    <van-button color="#bebebe" round hairline type="primary" size="small">编辑资料</van-button>
                </van-col>
            </van-row>
            <van-row></van-row>
        </div>
    </div>
    <!-- sticky container -->
    <div ref="container" style="height: 94px;">
        <van-sticky :container="container" :offset-top="0">
            <div>
                <van-row>
                    <van-col offset="4" span="16">
                        <van-tabs v-model:active="activeName" animated>
                            <van-tab title="故事" name="a" to="/user/story"></van-tab>
                            <van-tab title="收藏" name="b" to="/user/collection"></van-tab>
                            <van-tab title="赞过" name="c" to="/user/likes"></van-tab>
                        </van-tabs>
                    </van-col>
                </van-row>
            </div>
        </van-sticky>
    </div>
</template>

<script>
import { Col, Row, Image as VanImage, Button, Sticky, Tab, Tabs } from 'vant';
import { ref } from 'vue'
export default {
    name: 'UserCard',
    components: {
        'van-row': Row,
        'van-col': Col,
        'van-sticky': Sticky,
        'van-button': Button,
        'van-tabs': Tabs,
        'van-tab': Tab,
        VanImage
    },
    setup() {
        const container = ref(null);
        return { container };
    },
}
</script>

<style lang="less" scoped>
.card {
    font-size: 0.5rem;
    background: #e0e0e0;
    // box-shadow: 15px 15px 30px #bebebe ,
    //     -15px -15px 30px #ffffff !important;

    .userImgBox {
        vertical-align: center;

        .userImg {
            margin: 30px 20px 20px 20px
        }

        .userNameBox {
            font-size: 1rem;
            margin-top: 65px
        }
    }

    .userInfoBox {
        margin: 30px 20px 20px 20px;
        font-size: 0.8rem;
    }
}
</style>