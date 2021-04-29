import request from '@/utils/request'

export function postBlog(data) {
  return request({
    url: '/blog',
    method: 'post',
    data: topic
  })
}

export function delBlog(data) {
  return request({
    url: '/blog',
    method: 'delete',
    data: topic
  })
}

export function putBlog(data) {
  return request({
    url: '/blog',
    method: 'put',
    data: topic
  })
}

export function getBlog(data) {
  return request({
    url: '/blog',
    method: 'get',
    data: topic
  })
}