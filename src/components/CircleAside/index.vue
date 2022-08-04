<template>
    <div>
        <van-sidebar v-model="active">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
    </div>
</template>
<script>
import { Sidebar, SidebarItem } from 'vant';
import { ref } from 'vue';
export default {
    name: 'CircleAside',
    components: {
        'van-sidebar': Sidebar,
        'van-sidebar-item': SidebarItem
    },
    setup() {
        const active = ref(0);
        return { active };
    },
}
</script>