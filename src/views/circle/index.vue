<template>
  <div>
    <van-row>
      <van-col offset="4" span="16">
        <van-tabs v-model:active="activeName" animated>
          <van-tab title="圈子" name="a"></van-tab>
        </van-tabs>
      </van-col>
    </van-row>
  </div>
  <div>
    <!-- aside -->
    <circle-aside></circle-aside>
  </div>
</template>

<script>
import CircleAside from '@/components/CircleAside/index.vue'
import { Tab, Tabs, Col, Row } from 'vant';
export default {
  name: 'Circle',
  components: {
    CircleAside,
    'van-row': Row,
    'van-col': Col,
    'van-tabs': Tabs,
    'van-tab': Tab,
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
