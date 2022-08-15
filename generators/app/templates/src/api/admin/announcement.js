import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/announcement/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/announcement',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/announcement/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/announcement/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/announcement',
    method: 'put',
    data: obj
  })
}

export function publish(id, pushStatus) {
  return request({
    url: '/manager/announcement/updatePushStatusById',
    method: 'put',
    data: {
      id,
      pushStatus
    }
  })
}

export function showHome(id, isShow) {
  return request({
    url: '/manager/announcement/updateIsShowById',
    method: 'put',
    data: {
      id,
      isShow
    }
  })
}
