<template>
    <!-- Head -->
    <van-nav-bar title="分享图片故事" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- Uploader -->
    <van-uploader v-model="fileList" multiple :after-read="afterRead" />

</template>

<script>
import { Uploader, NavBar, Toast } from 'vant';
import { ref } from 'vue';
import COS from 'cos-js-sdk-v5'
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
        const afterRead = (file) => {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            var cos = new COS({
                SecretId: 'AKIDbCfv23ua6RfoDRUMH9qKhtDQYYmqjVBt',
                SecretKey: 'kMqLhIG5lJm4eHj7UtIYmuIbl4ENMBtu',
            });
            cos.putObject(
                {
                    Bucket: "bucket-1313109230" /* 填入您自己的存储桶，必须字段 */,
                    Region: "ap-chongqing" /* 存储桶所在地域，例如ap-beijing，必须字段 */,
                    Key: file.file.name /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
                    StorageClass: "STANDARD",
                    Body: file.file, // 上传文件对象
                },
                (err, data) => {
                    if (err) {
                        console.log("上传失败", err);
                    } else {
                        Toast.success('上传成功')
                        this.fileMenu.push(data.Location)
                        console.log(fileMenu)
                    }
                }

            )
        };
        const onClickLeft = () => history.back();

        return {
            fileList,
            fileMenu: [],
            onClickLeft,
            afterRead
        };
    }

}
</script>