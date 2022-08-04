<template>
    <div>
        <van-row>
            <van-col offset="4" span="16">
                <van-tabs v-model:active="activeName" animated>
                    <van-tab title="消息" name="a"></van-tab>
                </van-tabs>
            </van-col>
        </van-row>
    </div>
    <div>
        <van-row gutter="20">
            <van-col span="8">赞和收藏</van-col>
            <van-col span="8">新增关注</van-col>
            <van-col span="8">评论和@</van-col>
        </van-row>
    </div>
</template>

<script>
import { Tab, Tabs, Col, Row } from 'vant';
export default {
    name: 'Msg',
    components: {
        'van-row': Row,
        'van-col': Col,
        'van-tabs': Tabs,
        'van-tab': Tab,
    },
    setup() {
        return {};
    },
}
</script>

<style>
</style>
