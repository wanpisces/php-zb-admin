import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/lease/apply/page',
    method: 'get',
    params: query
  })
}


export function getDetail(id) {
  return request({
    url: '/manager/lease/apply/detail/' + id,
    method: 'get'
  })
}
