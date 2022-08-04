<template>
  <van-tabbar v-model="active" fixed :placeholder="true" :route="true">
    <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon" :to="item.to">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Tabbar',
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
    return {
      active,
      tabbarData
    }
  }
}
</script>

<style>
</style>
