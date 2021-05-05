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

//组件测试
//后台页头
import header from '@/components/admin/header'
//后台侧边栏
import navMenu from '@/components/admin/navMenu'
//后台数据统计卡片
import data from '@/components/admin/index/data'
//后台公告栏卡片
import noticeCard from '@/components/admin/index/noticeCard'
//后台数据可视化卡片
import dataVisual from '@/components/admin/index/dataVisual'
//后台echarts
import echarts from '@/components/admin/index/echarts'
//后台卡片组合
import indexCard from '@/views/admin/index/indexCard'
//用户列表
import accountTable from '@/components/admin/account/table'

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
      path: '/header',
      component: header,
      meta: { title: "后台页头" }
    },
    {
      path: '/navMenu',
      component: navMenu,
      meta: { title: "后台侧边栏" }
    },
    {
      path: '/data',
      component: data,
      meta: { title: "后台数据统计卡片" }
    },
    {
      path: '/noticeCard',
      component: noticeCard,
      meta: { title: "后台公告栏卡片" }
    },
    {
      path: '/dataVisual',
      component: dataVisual,
      meta: { title: "后台数据可视化卡片" }
    },
    {
      path: '/echarts',
      component: echarts,
      meta: { title: "后台echarts" }
    },
    {
      path: '/indexCard',
      component: indexCard,
      meta: { title: "后台卡片组合" }
    },
    {
      path: '/accountTable',
      component: accountTable,
      meta: { title: "用户列表" }
    },

    {
      path: "/",
      component: App,
      // redirect:'/client',
      redirect: '/admin',
      meta: { title: "SaltHub" },
      children: [
        // {
        //   path: "login",
        //   component: login,
        //   meta: { title: "登录"}
        // },
        // {
        //   path: "client",
        //   component: clientLayout,
        //   children: [
        //     //首页
        //     {
        //       path: "",
        //       component: clientindex,
        //       meta: { title: "首页"}
        //     },
        //   ]
        // },
        ,
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
          // children: [
          //   {
          //     path: '',
          //     component: blogTable,
          //     meta: { title: "博客列表"}
          //   },
          // ]
        },
        //官方文章管理
        {
          path: 'ofBlog',
          component: ofBlogLayout,
          name: 'ofBlogLayout',
          meta: { title: "官方文章管理" },
          // children: [
          //   {
          //     path: '',
          //     component: ofBlogTable,
          //     meta: { title: "官方博客列表"}
          //   },
          // ]
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
      path: '/backlogin',
      name: 'backlogin',
      component: () => import('@/views/auth/backlogin'),
      meta: { title: "后台登录" },
    }
  ]
})
