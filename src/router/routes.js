import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: 'Home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
          title: '主页'
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import('@/views/tools'),
        meta: {
          title: '工具'
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user'),
        meta: {
          title: '我',
          noCache: true
        }
      },
      {
        path: 'msg',
        name: 'Msg',
        component: () => import('@/views/message'),
        meta: {
          title: '消息'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  }
]

export default routes
