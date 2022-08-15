
import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/template/contract/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/template/contract/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/template/contract/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/template/contract/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/template/contract/updateById',
    method: 'put',
    data: obj
  })
}

export function updateStatus(id, status) {
  return request({
    url: '/manager/template/contract/updateStatusById',
    method: 'put',
    data: {id, status}
  })
}

