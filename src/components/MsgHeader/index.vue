<template>
    <div>
        <van-row gutter="20">
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>
    </div>
</template>

<script>
import { Col, Row } from 'vant';
export default {
    name: 'MsgHeader',
    components: {
        'van-row': Row,
        'van-col': Col
    },
    setup() {
        return {};
    },
}
</script>