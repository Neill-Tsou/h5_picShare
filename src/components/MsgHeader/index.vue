<template>
    <div class="iconBox">
        <div>
            <van-icon size="2rem" :color="msgColor.like" name="like" />
            <p>点赞</p>
        </div>
        <div>
            <van-icon size="2rem" :color="msgColor.follow" name="friends" />
            <p>关注</p>
        </div>
        <div>
            <van-icon size="2rem" :color="msgColor.comment" name="chat" />
            <p>评论</p>
        </div>
    </div>
</template>

<script>
import { Col, Row, Icon } from 'vant';
export default {
    name: 'MsgHeader',
    components: {
        'van-row': Row,
        'van-col': Col,
        'van-icon': Icon
    },
    setup() {
        return {
            msgColor:
            {
                like: 'rgba(229,70,70,0.9)',
                follow: 'rgba(0,0,229,0.8)',
                comment: 'rgba(0,128,0,0.8)',
            }

        };
    },
}
</script>

<style lang="less" scoped>
.iconBox {
    margin: 20px 60px;
    display: flex;
    justify-content: space-between;

    p {
        text-align: center;
    }
}
</style>