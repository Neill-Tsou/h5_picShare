<template>
    <div>{{ msg }}</div>
    <div>
        <input type="textarea" v-model="userName">
        <input type="textarea" v-model="age">
        <button @click="addUser">提交</button>
    </div>

</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            userName: '',
            age: ''
        }
    },

    methods: {
        addUser() {
            var name = this.userName;
            var age = this.age;
            this.$http.post('/api/addUser', {
                username: name,
                age: age
            }, {}).then((response) => {
                console.log(response);
            })
        }
    }
}
</script>

<style>
</style>