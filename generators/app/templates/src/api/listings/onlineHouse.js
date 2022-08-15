import request from '@/router/axios'

export function fetchList(obj) {
  return request({
    url: '/manager/org/online/house/page',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/org/online/house/getPublishDetailById/' + id,
    method: 'get'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/org/online/house/review/online/listings',
    method: 'put',
    data: obj
  })
}

export function downloadExcel(obj) {
  return request({
    url: '/manager/org/online/house/excel',
    method: 'post',
    data: obj
  })
}
