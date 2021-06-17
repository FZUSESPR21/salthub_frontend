import App from "../App.vue";
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios';
import ElementUI from 'element-ui';

//通用

//后台首页
import adminLayout from '@/views/admin/layout.vue'
import adminIndex from '@/views/admin/index/index.vue'

//用户管理
import accountLayout from '@/views/admin/account/account.vue'

//文章管理
import blogLayout from '@/views/admin/blog/blog.vue'

//官方文章管理
import ofBlogLayout from '@/views/admin/ofBlog/ofBlog.vue'

//通知管理
import noticeLayout from '@/views/admin/notice/notice.vue'

//发布通知
import createnoticeLayout from '@/views/admin/notice/createnotice.vue'

//发布官方文章
import createpostLayout from '@/views/admin/ofBlog/createpost.vue'

//文章操作
//文章详情
import detail from '@/views/post/Detail.vue'
//用户发布文章
import usercreatepost from '@/views/post/UserCreatePost.vue'

//前台个人信息
import info from '@/views/client/personal/info'

//修改个人信息
import updateView from '@/views/client/personal/update'

Vue.use(Router)
Vue.use(ElementUI);
Vue.prototype.axios = axios

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new Router({
  routes: [
    //组件测试
    {
      path: '/test',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/info',
      component: info,
      meta: { title: "前台个人信息页" }
    },
    {
      path: '/updateView',
      component: updateView,
      meta: { title: "修改个人信息页面" }
    },
    

    {
      path: "/",
      component: App,
      redirect: '/home',
      meta: { title: "SaltHub" },
      children: [
      ]
    },
    {
      path: '/admin',
      component: adminLayout,
      meta: { title: "首页" },
      children: [
        {
          path: '',
          component: adminIndex,
          name: 'adminIndex',
          meta: { title: "首页" }
        },
        //用户管理
        {
          path: 'account',
          component: accountLayout,
          name: 'accountLayout',
          meta: { title: "用户管理" },
        },
        //文章管理
        {
          path: 'blog',
          component: blogLayout,
          name: 'blogLayout',
          meta: { title: "文章管理" },
        },
        //官方文章管理
        {
          path: 'ofBlog',
          component: ofBlogLayout,
          name: 'ofBlogLayout',
          meta: { title: "官方文章管理" },
        },
        //发布官方文章
        {
          path: 'createpost',
          component: createpostLayout,
          name: 'createpostLayout',
          meta: { title: "发布官方文章" },
        },
        //通知管理
        {
          path: 'notice',
          component: noticeLayout,
          name: 'noticeLayout',
          meta: { title: "通知管理" },
        },
        //发布通知
        {
          path: 'createnotice',
          component: createnoticeLayout,
          name: 'createnoticeLayout',
          meta: { title: "发布通知" },
        }
      ]
    },
    //前台界面
    //前台论坛首页
    {
      path: '/home',
      name: 'Home',
      component: () => import("@/views/client/Home"),
      meta: { title: '晒研论坛-首页' }
    },
    //社区
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/views/client/community/Community'),
      meta: { title: '晒研论坛-社区' }
    },
    //官方资讯
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/client/officalnews/OfficalNews'),
      meta: { title: '晒研论坛-资讯' }
    },
    //树洞
    {
      path: '/treeHollow',
      name: 'TreeHollow',
      component: () => import('@/views/client/treeHollow/TreeHollow'),
      meta: { title: '晒研论坛-树洞' }
    },
    //树洞
    {
      path: '/getTreeHollow',
      name: 'GetTreeHollow',
      component: () => import('@/views/client/treeHollow/GetTreeHollow'),
      meta: { title: '晒研论坛-树洞' }
    },
    // 检索
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/client/Search'),
      meta: { title: '晒研论坛-搜索结果' }
    },
    // 标签检索
    {
      path: '/searchtag',
      name: 'Searchtag',
      component: () => import('@/views/client/SearchByTag'),
      meta: { title: '晒研论坛-搜索结果' }
    },
    // 通知
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/client/message/message'),
      meta: { title: '晒研论坛-消息通知' }
    },
    //文章操作
    //文章详情
    {
      path: '/Detail',
      name: 'Detail',
      component: detail
    },
    //用户发布文章
    {
      path: '/UserCreatePost',
      name: 'UserCreatePost',
      component: usercreatepost
    },
    // 访问路径不存在，则重定向到首页
    {
      path: '*',
      redirect: '/'
    },
    //登录注册
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login'),
      meta: { title: "登录" },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/register'),
      meta: { title: "注册" },
    },
    {
      path: '/forgetpwd',
      name: 'forgetpwd',
      component: () => import('@/views/auth/ForgetPwd'),
      meta: { title: "忘记密码" },
    },
    {
      path: '/backlogin',
      name: 'backlogin',
      component: () => import('@/views/auth/backlogin'),
      meta: { title: "后台登录" },
    }
  ]
})
