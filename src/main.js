import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios'
import '@/api/mock.js'



// normalize.css
import 'normalize.css/normalize.css'
// 全局样式
import '@/styles/index.less'

const app = createApp(App)

// 按需注册 vant 组件
import { registerVantComp } from '@/plugins/registerVant'
registerVantComp(app)




// svg-icon
import { registerSvgIconComp } from '@/plugins/registerSvgIcon'
registerSvgIconComp(app)

//全局前置路由卫士，开发中8.1
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  }
  else if (token && to.name === 'root') {
    next({ name: 'Home' })
  }
  else if (token && to.name === 'Login') {
    next({ name: 'Home' })
  }
  else {
    next()
  }
})
// 未登录用户允许访问home
// router.beforeEach((to, from, next) => {
//   store.commit('getToken')
//   const token = store.state.user.token
//   if (!token && to.name === 'Home') {
//     next({ name: 'Home' })
//   }
//   else if (!token && to.name !== 'Home') {
//     next({ name: 'Login' })
//   }
//   else if (token && to.name === 'Login') {
//     next({ name: 'Home' })
//   }
//   else if (token && to.name !== 'Login') {
//     next()
//   }
// })

app
  .use(router)
  .use(store)
  .mount('#app')
app.config.globalProperties.$http = axios
