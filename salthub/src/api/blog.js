import request from '@/utils/request'

/**
 *@functionName: postBlog
 *@param: data 发表文章表单
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:42:41
 *@version: V1.0.0
*/
export function postBlog(data) {
  return request({
    url: '/blog',
    method: 'post',
    data
  })
}

/**
 *@functionName: delBlog
 *@param: data 删除文章信息
 *@description:
 *@author: xiaohan
 *@date: 2021-05-19 14:05:28
 *@version: V1.0.0
*/
export function delBlog(id) {
  return request({
    url: '/blog',
    method: 'delete',
    params:{blogId:id}
  })
}


/**
 *@functionName: putBlog
 *@param: data 修改文章信息
 *@description:
 *@author: lw
 *@date: 2021-04-30 08:45:28
 *@version: V1.0.0
*/
export function putBlog(data) {
  return request({
    url: '/blog',
    method: 'put',
    data
  })
}

export function updateTag(params, data) {
  return request({
    url: '/tag',
    method: 'put',
    params,
    data
  })
}


/**
 *@functionName: jsfn
 *@param: data 博客id
 *@description:
 *@author: lw
 *@date: 2021-05-04 08:53:40
 *@version: V1.0.1
*/
export function getBlogById(params) {
  return request({
    url: '/blog',
    method: 'get',
    params
  })
}

export function getBlogByAccount(params) {
  return request({
    url: '/blog/account',
    method: 'post',
    params
  })
}

/**
 *@functionName: collectBlog
 *@param: data 文章id
 *@description:收藏文章
 *@author: xiaohan
 *@date: 2021-05-04 20:50:41
 *@version: V1.0.0
*/
export function collectBlog(id) {
  return request({
    url: '/collection',
    method: 'post',
    params:{id:id}
  })
}

/**
 *@functionName: thumbBlog
 *@param: data 文章id
 *@description:点赞文章
 *@author: xaiohan
 *@date: 2021-05-06 21:53:41
 *@version: V1.0.0
*/
export function thumbBlog(params) {
  return request({
    url: `/blog/like/${params.flag}`,
    method: 'put',
    params
  })
}

/*
 *@functionName: getTagById
 *@params1: id 文章tag
 *@description:根据文章id获取tag属性
 *@author: xiaohan
 *@date: 2021-05-07 11:57:19
 *@version: V1.0.0
*/
export function getTagById(id) {
  return request(({
    url: '/tag',
    method: 'get',
    params: {id: id }
  }))
}

/*
 *@functionName: delCollect
 *@params1: id 文章tag
 *@description:删除收藏文章
 *@author: xiaohan
 *@date: 2021-05-08 10:57:19
 *@version: V1.0.0
*/
export function delCollect(id) {
  return request(({
    url: '/collection',
    method: 'delete',
    params: {id:id}
  }))
}

/**
 *@functionName: tipOffBlog
 *@param: data 文章id
 *@description:举报文章
 *@author: 庄威龙
 *@date: 2021-6-6 9:58:41
 *@version: V1.0.0
*/
export function tipOffBlog(id) {
  return request({
    url: '/tipOff',
    method: 'post',
    params:{id:id}
  })
}

/**
 *@functionName: getAllTags
 *@description: 获取所有tag
 *@author: lw
 *@date: 2021-06-10 21:24:42
 *@version: V1.0.0
*/
export function getAllTags() {
  return request({
    url: '/tag/all',
    method: 'get',
  })
}

export function getAllModules() {
  return request({
    url: '/blog/module/all',
    method: 'get',
  })
}

/** 
 *@functionName: countBlog
 *@param: 
 *@description: 获取博客总数
 *@author: NoMornings
 *@date: 2021-06-10 22:15:15
 *@version: V1.0.0
*/
export function countBlog() {
  return request({
    url: '/blog/count',
    method: 'get',
  })
}

/**
 *@functionName: intradayBlog
 *@param: 
 *@description: 获取当日博客数
 *@author: NoMornings
 *@date: 2021-06-10 22:18:13
 *@version: V1.0.0
*/
export function intradayBlog() {
  return request({
    url: '/blog/count/intraday',
    method: 'get',
  })
}

/**
 *@functionName: postTreeHollow 
 *@params: data
 *@description: 发布树洞参数
 *@author: lw
 *@date: 2021-06-12 21:21:54
 *@version: V1.0.0
*/
export function postTreeHollow(data) {
  return request({
    url: '/blog/treeHole',
    method: 'post',
    data
  })
}

/**
 *@functionName: getTreeHollow 
 *@description: 随机获取树洞
 *@author: lw
 *@date: 2021-06-12 21:22:26
 *@version: V1.0.0
*/
export function getTreeHollow() {
  return request({
    url: '/blog/hole',
    method: 'get',
  })
}