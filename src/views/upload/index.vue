<template>
    <van-uploader v-model="fileList" multiple />

</template>

<script>
import { Uploader } from 'vant';
import { ref } from 'vue';
export default {
    name: 'Upload',
    components: { 'van-uploader': Uploader },
    setup() {
        const fileList = ref([
            { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
            // Uploader 根据文件后缀来判断是否为图片文件
            // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            // { url: 'https://cloud-image', isImage: true },
        ]);

        return {
            fileList,
        };
    }

}
</script>