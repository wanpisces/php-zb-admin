export const tableFamilyMemberOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  menu: false,
  editBtn: false,
  delBtn: false,
  align: 'center',
  addBtn: false,
  search: false,
  page: false,
  refreshBtn: false,
  columnBtn: false,
  column: [{
    label: '与购房人关系',
    prop: 'familyMemberRelation',
    slot: true
  }, {
    label: '姓名',
    prop: 'name',
  }, {
    label: '证件类型',
    prop: 'certificateType',
    slot: true
  }, {
    label: '身份证号',
    prop: 'idCard',
    width: 180
  }, {
    label: '联系方式',
    prop: 'phone',
  }]
}
export const tableOption = {
  border: true,
  index: true,
  indexLabel: '编号',
  menuAlign: 'center',
  menuWidth: '180px',
  searchLabelWidth: 100,
  editBtn: false,
  delBtn: false,
  align: 'center',
  addBtn: false,
  search: false,
  refreshBtn: false,
  menuWidth: '100px',
  searchMenuPosition: 'right',
  column: [{
      label: '项目名称',
      prop: 'projectName',
      search: true
    }, {
      label: '复议申请编号',
      prop: 'reconsiderNum',
      minWidth: 140,
      search: true
    }, {
      label: '房源号',
      prop: 'propertyName',
      search: true
    }, {
      label: '代持机构',
      prop: 'agencyId',
      search: true,
      type: 'select',
      dicMethod: 'get',
      dicUrl: '/manager/agency/all',
      props: {
        label: 'fullName',
        value: 'id'
      },
    },
    {
      label: '申请人姓名',
      prop: 'masterName',
      minWidth: 120,
      search: true
    }, {
      label: '联系电话',
      prop: 'masterPhone',
    }, {
      label: '身份证号码',
      prop: 'masterIdCard',
      minWidth: 150,
    }, {
      label: '复议状态',
      prop: 'status',
      slot: true,
      search: true,
      searchslot: true
    }, {
      label: '备注原因',
      prop: 'reconsiderApplyReason',
      slot: true,
    }, {
      label: '创建时间',
      prop: 'createTime',
      width: '140'
    }
  ]
}
export const tableLogsOption = {
  border: true,
  index: true,
  indexLabel: '编号',
  menuAlign: 'center',
  menuWidth: '180px',
  editBtn: false,
  delBtn: false,
  align: 'center',
  addBtn: false,
  search: false,
  page: false,
  refreshBtn: false,
  menu: false,
  columnBtn: false,
  column: [{
    label: '操作时间',
    prop: 'createTime',
  }, {
    label: '操作人',
    prop: 'operator',
  }, {
    label: '状态',
    prop: 'status',
    slot: true
  }, {
    label: '备注原因',
    prop: 'remarks',
  }]
}
