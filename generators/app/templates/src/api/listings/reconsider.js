import request from '@/router/axios'

//获取复议列表 分页
export function getPageByReconsider(query) {
  return request({
    url: '/manager/reconsiderRecords/getPageByReconsider',
    method: 'get',
    params: query
  })
}
//申请复议
export function applyReconsider(obj) {
  return request({
    url: '/manager/reconsiderRecords/applyReconsider',
    method: 'post',
    data: obj
  })
}
//复议审核
export function reconsiderAudit(obj) {
  return request({
    url: '/manager/reconsiderRecords/reconsiderAudit',
    method: 'post',
    data: obj
  })
}
//获取合同详情
export function getLessorApplyId(id) {
  return request({
    url: '/manager/lease/apply/detail/' + id,
    method: 'get'
  })
}
//获取复议操作日志
export function getListByReconsiderId(id) {
  return request({
    url: '/manager/reconsiderRecords/getListByReconsiderId/' + id,
    method: 'get'
  })
}

//导出
export function exportExcel(query) {
  return request({
    url: '/manager/reconsiderRecords/excel',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}
