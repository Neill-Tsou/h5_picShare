<template>
    <!-- Head -->
    <van-nav-bar title="分享图片故事" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- Uploader -->
    <van-uploader v-model="fileList" multiple />

</template>

<script>
import { Uploader, NavBar } from 'vant';
import { ref } from 'vue';
export default {
    name: 'Upload',
    components: {
        'van-uploader': Uploader,
        'van-nav-bar': NavBar
    },
    setup() {
        const fileList = ref([
            { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
        ]);
        const onClickLeft = () => history.back();

        return {
            fileList,
            onClickLeft,
        };
    }

}
</script>