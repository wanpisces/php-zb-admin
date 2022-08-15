import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/agencyUser/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/agencyUser/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/agencyUser/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/agencyUser/del/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/agencyUser/save',
    method: 'post',
    data: obj
  })
}

export function freeze(id) {
  return request({
    url: '/manager/agencyUser/freeze/' + id,
    method: 'post'
  })
}

export function resetPwd(id) {
  return request({
    url: '/manager/agencyUser/initialPassword/' + id,
    method: 'post'
  })
}
