import request from '@/router/axios';
//发送验证码
export function sendCommonCode(url, phone) {
  return request({
    url: '/front' + url,
    method: 'get',
  })
}
//发起退租
export function sendTakeEffect(url, obj) {
  return request({
    url: '/front' + url,
    method: 'put',
    data: obj
  })
}
//获取文件流
export function getFileBlob(url) {
  return request({
    url,
    method: 'get',
    responseType: 'blob',
  })
}
//导出下载
export function exportCommon(url, query) {
  return request({
    url,
    method: 'get',
    responseType: 'blob',
    params: query
  })
}
//导出下载get
export function exportCommonGetExcel(url, query) {
  query.timeout=1;
  return request({
    url,
    method: 'get',
    responseType: 'blob',
    timeout: 90000,
    params: query
  })
}
export function exportCommonJSONGetExcel(url, query) {
  return request({
    url,
    method: 'get',
    timeout: 90000,
    params: query
  })
}
//导出下载post
export function exportCommonPostExcel(url, params) {
  return request({
    url,
    method: 'post',
    responseType: 'blob',
    data: params
  })
}
//获取须知
export function readMust(typeCode) {
  return request({
    url: '/manager/index/get/template/notice/' + typeCode,
    method: 'get',
  })
}
//上传图片
export function uploadImage(obj) {
  return request({
    url: '/file/image/upload/web?category=IMG',
    method: 'post',
    data: obj
  })
}
//上传文件
export function uploadFile(obj) {
  return request({
    url: '/file/upload/web',
    method: 'post',
    data: obj
  })
}
//验证验证码
export function verifiyCode(query) {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: '/auth/captcha/validate/web',
    method: 'post',
    params: query
  })
}

//验证出租人，承租人
export function certification() {
  return request({
    url: '/manager/person/check/certification',
    method: 'post',
  })
}

//获取区域
export function getAreaAll() {
  return request({
    url: '/manager/org/area/all',
    method: 'get',
  })
}
//获取枚举数据
export function getEnum() {
  return request({
    url: '/manager/index/get/all/enum',
    method: 'get',
  })
}
//获取静态文件路径
export function getFileConfig() {
  return request({
    url: '/file/prefix/url',
    method: 'get',
  })
}

// 获取设施数据
export function getAllFacilities() {
  return request({
    url: '/manager/index/getAllFacilities',
    method: 'get',
  })
}

//获取代持机构的电话号码
export function getAgencyPhone() {
  return request({
    url: '/manager/person/lessor/get/agency/phone',
    method: 'get',
  })
}
