import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/manager/org/house/list',
    method: 'get',
    params: query
  })
}
export function saveRoom(obj) {
  return request({
    url: '/manager/org/house/save',
    method: 'post',
    data: obj
  })
}
export function roomDetail(id) {
  return request({
    url: '/manager/org/house/detail/' + id,
    method: 'get'
  })
}
//删除房源
export function delRoom(id) {
  return request({
    url: '/manager/org/house/del/' + id,
    method: 'get'
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
//导出房源
export function exportExcel(query) {
  return request({
    url: '/manager/org/house/excel',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}
//下载模板
export function downTemplate() {
  return request({
    url: '/manager/org/house/downTemplate',
    method: 'get',
    responseType: 'blob'
  })
}
//所有项目
export function getProjectAll() {
  return request({
    url: '/manager/org/project/list',
    method: 'get',
  })
}

//机构详情
export function getAgencyDetail() {
  return request({
    url: '/manager/agency/detail',
    method: 'get',
  })
}
//修改机构详情
export function editAgencyDetail(obj) {
  return request({
    url: '/manager/agency/updateAgency',
    method: 'put',
    data: obj
  })
}

//项目列表
export function fetchProjectList(query) {
  return request({
    url: '/manager/project/page',
    method: 'get',
    params: query
  })
}

export function saveProject(obj) {
  return request({
    url: '/manager/project/save',
    method: 'post',
    data: obj
  })
}
export function projectDetail(id) {
  return request({
    url: '/manager/project/detail/' + id,
    method: 'get'
  })
}
//删除项目
export function delProject(id) {
  return request({
    url: '/manager/project/del/' + id,
    method: 'delete'
  })
}
//导入房源
export function importHouse(obj) {
  return request({
    url: '/manager/org/house/importHouse',
    method: 'post',
    data: obj
  })
}
//楼盘表
export function fetchFloorList(query) {
  return request({
    url: '/manager/org/house/getBuildingTable/',
    method: 'get',
    params: query
  })
}
//获取项目楼层
export function getBuildingNum(query) {
  return request({
    url: '/manager/org/house/getBuildingNum',
    method: 'get',
    params: query
  })
}
//获取房源历史
export function queryHouseRecordByHouseIdAndHandleType(query) {
  return request({
    url: '/manager/org/house/queryHouseRecordByHouseIdAndHandleType',
    method: 'get',
    params: query
  })
}
