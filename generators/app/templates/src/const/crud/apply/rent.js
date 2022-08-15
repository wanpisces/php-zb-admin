import {
  getEnumArr
} from "@/util/enumData";
export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  menuWidth: 100,
  searchLabelWidth: 120,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  column: [{
      prop: 'projectName',
      type: 'input',
      label: '项目名称',
      search: true,
    },
    {
      prop: 'propertyName',
      label: '房源号',
      search: true,
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
    }, {
      prop: 'masterName',
      label: '姓名',
      search: true,
    }, {
      prop: 'masterIdCard',
      label: '身份证号码',
      minWidth: 150,
      search: true,
    }, {
      prop: 'lessorReason',
      type: 'select',
      label: '出租原因',
      dicData: getEnumArr('LessorReasonEnum'),
    }, {
      prop: 'monthRent',
      label: '月租金',
      search: true,
    }, {
      prop: 'leaseTerm',
      type: 'input',
      label: '拟出租期限',
      minWidth: 100,
      append: '个月'
    },
    {
      prop: 'status',
      type: 'select',
      label: '审核状态',
      search: true,
      dicData: getEnumArr('VerifyStatusEnum'),
    }, {
      prop: 'remarks',
      label: '备注',
    }, {
      prop: 'createTime',
      label: '创建时间',
      minWidth: 140,
    },
  ],
}

//操作日志
export const tableOparateOption = {
  "border": false,
  "index": true,
  "indexLabel": "序号",
  menu: false,
  editBtn: false,
  delBtn: false,
  align: 'center',
  addBtn: false,
  search: false,
  page: false,
  columnBtn: false,
  refreshBtn: false,
  "column": [{
    "label": "操作时间",
    "prop": "createTime"
  }, {
    "label": "操作人",
    "prop": "operator"
  }, {
    "label": "状态",
    "prop": "status",
    slot: true,
  }, {
    "label": "备注原因",
    "prop": "remarks"
  }]
}
//家庭成员
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
  columnBtn: false,
  refreshBtn: false,
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
