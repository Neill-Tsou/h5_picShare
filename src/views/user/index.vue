<template>
  <div>
    <!-- UserCard -->
    <user-card></user-card>
    <!-- Content -->
    <router-view></router-view>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard/index.vue'
export default {
  name: 'User',
  components: { UserCard },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
