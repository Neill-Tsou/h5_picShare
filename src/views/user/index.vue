<template>
  <div>
    <van-tabs v-model:active="activeName">
      <van-tab title="标签 1" name="a">内容 1</van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Tab, Tabs } from 'vant';
export default {
  name: 'User',
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab
  },
  setup() {
    const active = ref(0);
    return { active };
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
