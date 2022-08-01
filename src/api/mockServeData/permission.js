
//点击登录触发
import Mock from 'mockjs'
export default {
    getMenu: config => {
        // console.log(config);
        const { username, password } = JSON.parse(config.body)
        // console.log(JSON.parse(config.body))
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    token: Mock.Random.guid(),
                    message: '管理员登录'
                }
            }
        } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
            return {
                code: 20000,
                data: {
                    token: Mock.Random.guid(),
                    message: `用户登陆成功`
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }

    }
}
