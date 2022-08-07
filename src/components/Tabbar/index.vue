<template>
  <van-tabbar v-model="active" fixed :placeholder="true" :route="true">
    <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to"
      :click="item.click">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
  <!-- <van-popup v-model:show="show"></van-popup> -->
</template>

<script>
import { ref, reactive } from 'vue'
// import { Popup } from 'vant';

export default {
  name: 'Tabbar',
  // components: { 'van-popup': Popup },
  setup(props) {
    const active = ref(0)
    const tabbarData = reactive([
      {
        icon: 'wap-home-o',
        title: '主页',
        to: {
          name: 'Home'
        }
      },
      {
        icon: 'friends-o',
        title: '圈子',
        to: {
          name: 'Circle'
        }
      },
      {
        icon: 'plus',
        title: '',
        to: {
          name: 'Upload'
        }
        // click: () => {
        //   show.value = true;
        // }
      },
      {
        icon: 'comment-o',
        title: '消息',
        to: {
          name: 'Msg'
        }
      },
      {
        icon: 'user-o',
        title: '我',
        to: {
          name: 'User'
        }
      }
    ])
    // const show = ref(false);
    // const showPopup = () => {
    //   show.value = true;
    // };
    return {
      active,
      tabbarData,
      // show,
      // showPopup,
    }
  }
}
</script>

<style>
</style>
