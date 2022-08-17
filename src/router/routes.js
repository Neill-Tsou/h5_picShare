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
        },
        redirect: '/home/find',
        children: [
          {
            path: '/home/find',
            name: 'PageFind',
            component: () => import('@/views/home/PageFind.vue'),
          },
          {
            path: '/home/focus',
            name: 'PageFocus',
            component: () => import('@/views/home/PageFocus.vue'),
          },
          {
            path: '/home/select',
            name: 'PageSelect',
            component: () => import('@/views/home/PageSelect.vue'),
          }
        ]
      },
      {
        path: 'circle',
        name: 'Circle',
        component: () => import('@/views/circle'),
        meta: {
          title: '圈子'
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user'),
        redirect: '/user/story',
        children: [
          {
            path: '/user/story',
            name: 'UserStory',
            component: () => import('@/views/user/UserStory/index.vue'),
          },
          {
            path: '/user/collection',
            name: 'UserCollection',
            component: () => import('@/views/user/UserCollection/index.vue'),
          },
          {
            path: '/user/likes',
            name: 'UserLikes',
            component: () => import('@/views/user/UserLikes/index.vue'),
          }
        ],
        meta: {
          title: '我',
          noCache: true,
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
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/upload'),
    meta: {
      title: '上传'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test'),
    meta: {
      title: '测试'
    }
  }
]

export default routes
