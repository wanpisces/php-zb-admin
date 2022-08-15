const env = process.env;
// 基础路径，发布前修改这里,当前配置打包出来的资源都是相对路径
let baseUrl = env.BASE_URL||'http://10.39.65.217:30002'; 
// let baseUrl = 'http://10.39.65.60:15123';
let fileUrl = env.FILE_URL || 'http://10.39.65.30/'; //图片文件基础地址,用于音视频转文字跨域问题。
let mqUrl = 'ws://10.39.65.60:15121/message/stomp'; //消息队列地址
if (env.NODE_ENV === 'test-build') {
  // const host = window.location.host;
  baseUrl = "";
  fileUrl = "";
  // mqUrl = 'ws://'+window.location.host+'/message/stomp'; 
}

// 图表库为avue和pig2套地址
const iconfontVersion = ['567566_qo5lxgtishg', '667895_v7uduh4zui']
const iconfontUrl = `//at.alicdn.com/t/font_$key.css`

const codeUrl = `${baseUrl}/code`;
module.exports = {
  baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env,
  fileUrl,
  mqUrl
}
