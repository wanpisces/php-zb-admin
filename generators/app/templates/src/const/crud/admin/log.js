
export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 150,
  align: 'center',
  refreshBtn: true,
  searchMenuSpan: 6,
  showClomnuBtn: false,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  viewBtn: true,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [{
    label: '类型',
    prop: 'type',
    width:100,
    type: 'select',
    dicUrl: '/admin/dict/type/log_type',
    search: true
  }, {
    label: '标题',
    prop: 'title',
    search:true,
  },
  {
    label: '用户',
    prop: 'createBy',
    search:true,
  },{
    label: '手机号',
    prop: 'phone',
    search:true,
  },{
    label: '用户类型',
    prop: 'userType',
    type: 'select',
    search:true,
    dicData: [{
      label: '全部',
      value: ''
    },{
      label: '系统管理员用户',
      value: 'SYS'
    },
    {
      label: '住建委',
      value: 'ZHU_JIAN_WEI'
    },
    {
      label: '代持机构用户',
      value: 'ORG'
    },
    {
      label: '普通注册用户',
      value: 'NORMAL'
    }
  ],
  },
  //  {
  //   label: 'IP地址',
  //   prop: 'remoteAddr'
  // }, {
  //   label: '请求方式',
  //   prop: 'method'
  // }, {
  //   label: '客户端',
  //   prop: 'serviceId'
  // }, {
  //   width: 80,
  //   label: '请求时间',
  //   prop: 'time'
  // },
   {
    width: 150,
    label: '创建时间',
    prop: 'createTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    search: true,
    span: 12,
    searchRange: true
  }, {
    width: 180,
    label: '异常日志',
    prop: 'exception',
    hide: true
  }]
}
