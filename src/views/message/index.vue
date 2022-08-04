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
    <msg-header></msg-header>
</template>

<script>
import { Tab, Tabs, Col, Row } from 'vant';
import MsgHeader from '@/components/MsgHeader/index.vue'
export default {
    name: 'Msg',
    components: {
        'van-row': Row,
        'van-col': Col,
        'van-tabs': Tabs,
        'van-tab': Tab,
        MsgHeader
    },
    setup() {
        return {};
    },
}
</script>

<style>
</style>
