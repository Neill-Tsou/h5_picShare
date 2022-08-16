<template>
    <!-- Head -->
    <van-nav-bar title="分享图片故事" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- Uploader -->
    <van-uploader v-model="fileList" multiple :after-read="afterRead" accept='image/*' max-size="5242880" />

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
        //拿到图片url，预览
        const fileList = ref([]);
        let pid = 0;
        const afterRead = (file) => {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            //上传前行为，记录这一次上传的uid
            // this.currentFileUid = file.uid;
            //上传行为，创建COS实例
            var cos = new COS({
                SecretId: 'AKIDbCfv23ua6RfoDRUMH9qKhtDQYYmqjVBt',
                SecretKey: 'kMqLhIG5lJm4eHj7UtIYmuIbl4ENMBtu',
            });
            //存储图片键名
            pid += 1
            //调用对象存储方法
            cos.putObject(
                {
                    Bucket: "bucket-1313109230" /* 填入您自己的存储桶，必须字段 */,
                    Region: "ap-chongqing" /* 存储桶所在地域，例如ap-beijing，必须字段 */,
                    Key: `pid${pid}` /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
                    StorageClass: "STANDARD",
                    Body: file.file, // 上传文件对象
                },
                (err, data) => {
                    if (err) {
                        console.log(err);
                        Toast.fail("上传失败")
                    } else {
                        Toast.success('上传成功')
                        console.log(fileList)
                    }
                }
            )
        };
        const onClickLeft = () => history.back();

        return {
            fileList,
            onClickLeft,
            afterRead,
        };
    }

}
</script>