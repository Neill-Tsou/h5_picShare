<template>
    <div>
        <van-row>
            <van-col offset="4" span="16">
                <van-tabs v-model:active="activeName" animated>
                    <van-tab title="发现" name="a" to="/home/find"></van-tab>
                    <van-tab title="关注" name="b" to="/home/focus"></van-tab>
                    <van-tab title="精选" name="c" to="/home/select"></van-tab>
                </van-tabs>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Tab, Tabs, Col, Row } from 'vant';
export default {
    name: 'HomeTab',
    components: {
        'van-tabs': Tabs,
        'van-tab': Tab,
        'van-col': Col,
        'van-Row': Row,
    },
    setup() {
        const active = ref(0);
        return { active };
    }
}
</script>

<style lang="less" scoped>
</style>
