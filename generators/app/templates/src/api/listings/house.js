import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/org/house/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/org/house/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/org/house/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/org/house/del/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/org/house/save',
    method: 'post',
    data: obj
  })
}

export function checkUnitTypeHouseProjectId(obj) {
  return request({
    url: '/manager/org/house/checkUnitTypeExistByUnitCodeAndProjectId',
    method: 'post',
    data: obj
  })
}