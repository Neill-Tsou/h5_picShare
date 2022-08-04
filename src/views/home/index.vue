<template>
  <div>
    <!-- tab -->
    <home-tab></home-tab>
    <!-- ccontent -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomeTab from '@/components/HomeTab/index.vue'
export default {
  name: 'Home',
  components: { HomeTab },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
