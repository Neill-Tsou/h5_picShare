<template>
    <div>
        <van-row>
            <van-col span="4">
                <van-cell-group>
                    <van-button type="default" block to="/home/foucus">关注</van-button>
                </van-cell-group>
            </van-col>
            <van-col span="4">
                <van-cell-group>
                    <van-button type="default" block to="/home/circle">圈子</van-button>
                </van-cell-group>
            </van-col>
            <van-col span="4">
                <van-cell-group>
                    <van-button type="default" block to="/home/user">我的</van-button>
                </van-cell-group>
            </van-col>
            <van-col span="12"></van-col>
        </van-row>
        <hr class='divideLine' />
    </div>
</template>

<script>
import { Col, Row, Button, CellGroup } from 'vant';
export default {
    name: 'Demo',
    components: {
        'van-col': Col,
        'van-row': Row,
        'van-button': Button,
        'van-cell-group': CellGroup
    }
}
</script>

<style lang="less" scoped>
van-button {
    margin: 0
}

.divideLine {
    margin: 0;
}
</style>
