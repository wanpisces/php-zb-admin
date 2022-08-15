import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/org/project/list',
    method: 'get',
    params: query
  })
}
export function getProjectAll(query) {
  return request({
    url: '/manager/org/project/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/manager/org/project/save',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/manager/org/project/detail/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/manager/org/project/del/' + id,
    method: 'get'
  })
}

export function putObj(obj) {
  return request({
    url: '/manager/org/project/save',
    method: 'post',
    data: obj
  })
}
//判断项目名重复
export function checkExistByName(projectName) {
  return request({
    url: '/manager/project/checkExistByName',
    method: 'get',
    params: {
      projectName
    }
  })
}

//户型
export function fetchUnitTypeList(id) {
  return request({
    url: '/manager/org/project/getAll/unitType/'+id,
    method: 'get'
  })
}
//删除户型
export function delUnitType(id) {
  return request({
    url: '/manager/org/project/delete/unitType/' + id,
    method: 'delete'
  })
}
//保存或修改户型
export function saveUnitType(obj) {
  return request({
    url: '/manager/org/project/save/unitType',
    method: 'post',
    data: obj
  })
}
//校验户型代码
export function checkUnitTypeExistByUnitCodeAndProjectId(obj) {
  return request({
    url: '/manager/org/project/checkUnitTypeExistByUnitCodeAndProjectId',
    method: 'post',
    data: obj
  })
}
