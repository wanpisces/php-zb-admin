
import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/sysconfig/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/sysconfig/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/sysconfig/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/sysconfig/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/sysconfig/updateById',
    method: 'put',
    data: obj
  })
}
