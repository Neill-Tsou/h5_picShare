<template>
    <van-form class="login-container">
        <h3 class="login_title">用户登录</h3>
        <van-cell-group inset>
            <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div class="login_submit" style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" @click="login">
                登录
            </van-button>
        </div>
    </van-form>
</template>

<script>
import { Form, Field, CellGroup, Button, Toast } from 'vant';
import { getMenu } from '@/api/data'

export default {
    name: 'Login',
    components: {
        'van-form': Form,
        'van-button': Button,
        'van-cell-group': CellGroup,
        'van-field': Field
    },
    data() {
        return {
            form: {}
        }
    },
    methods: {
        login() {
            getMenu(this.form).then(({ data: res }) => {
                if (res.code === 20000) {
                    this.$store.commit('setToken', res.data.token)
                    this.$router.push({ name: 'root' })
                    Toast.success(res.data.message)
                } else {
                    Toast.fail('密码错误')
                }
            }
            )
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    // width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login_title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458
}

.login_submit {
    margin: 10px auto 0 auto
}
</style>
