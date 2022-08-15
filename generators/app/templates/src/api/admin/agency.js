
import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/agency/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/agency/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/agency/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/agency/del/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/agency/save',
    method: 'post',
    data: obj
  })
}
