import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/contract/page',
    method: 'get',
    params: query
  })
}
export function fetchApplyList(query) {
  return request({
    url: '/manager/contract/applyPage',
    method: 'get',
    params: query
  })
}

export function fetchHistoryList(query) {
  return request({
    url: '/manager/contract/history/page',
    method: 'get',
    params: query
  })
}
export function historyDetail(id) {
  return request({
    url: '/manager/contract/history/' + id,
    method: 'get'
  })
}
