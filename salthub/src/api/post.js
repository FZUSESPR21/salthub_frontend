// 发布
export function post(topic) {
  return request({
    url: '/post/create',
    method: 'post',
    data: topic
  })
}
