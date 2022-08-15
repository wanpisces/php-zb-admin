

import request from '@/router/axios'

export function fetchList (query) {
  return request({
    url: '/manager/protocol/page',
    method: 'get',
    params: query
  })
}


