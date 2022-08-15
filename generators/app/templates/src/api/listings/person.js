import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/person/page',
    method: 'get',
    params: query
  })
}

export function getObj(id) {
  return request({
    url: '/manager/person/detail/' + id,
    method: 'get'
  })
}

export function freeze(id) {
  return request({
    url: '/manager/person/freeze/' + id,
    method: 'post',
  })
}

export function resetPwd(id) {
  return request({
    url: '/manager/person/initialPassword/' + id,
    method: 'post',
  })
}
