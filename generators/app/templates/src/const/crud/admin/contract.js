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
      prop: 'code',
      label: '合同编号',
      search: true,
    }, {
      prop: 'rentType',
      type: 'select',
      label: '合同类型',
      search: true,
      dicData: [{
          label: '趸租',
          value: 'WHOLESALE_RENT'
        },
        {
          label: '散租',
          value: 'SINGLE_RENT'
        }
      ],
    }, {
      prop: 'projectName',
      type: 'input',
      label: '项目名称',
      search: true,
    },
    {
      prop: 'houseName',
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
      prop: 'lessor',
      label: '出租人姓名',
      minWidth: 110,
    }, {
      prop: 'lessorPhone',
      label: '出租人联系方式',
      minWidth: 140,
    }, {
      prop: 'lessee',
      label: '承租人姓名',
      minWidth: 100,
    }, {
      prop: 'lesseePhone',
      label: '承租人联系方式',
      minWidth: 140,
    }, {
      prop: 'monthRent',
      label: '月租金',
    }, {
      prop: 'deposit',
      label: '押金',
    },
    {
      prop: 'signStatus',
      type: 'select',
      label: '合同状态',
      search: true,
      dicData: getEnumArr('ContractSignStatus'),
    }, {
      prop: 'confirmSignTime',
      label: '确认签署时间',
      minWidth: 140,
    }, {
      prop: 'createTime',
      label: '创建时间',
      minWidth: 140,
    },
  ],
}

export const tableHistoryOption = {
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
      prop: 'code',
      label: '合同编号',
      search: true,
    }, {
      prop: 'houseName',
      label: '房源号',
      search: true,
      hide: true,
    }, {
      prop: 'lessor',
      label: '出租人',
      search: true,
    }, {
      prop: 'lessee',
      label: '承租人',
      search: true,
    }, {
      prop: 'monthRent',
      label: '月租金',
    },
    {
      prop: 'signStatus',
      type: 'select',
      label: '合同状态',
      search: true,
      dicData: getEnumArr('ContractSignStatus'),
    }, {
      prop: 'createTime',
      label: '创建时间',
      minWidth: 140,
    },
  ],
}

export const tableApplyOption = {
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
      prop: 'houseName',
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
      prop: 'lessor',
      label: '出租人姓名',
      minWidth: 110,
    }, {
      prop: 'lessorPhone',
      label: '出租人联系方式',
      minWidth: 140,
    }, {
      prop: 'lessee',
      label: '承租人姓名',
      minWidth: 100,
    }, {
      prop: 'lesseePhone',
      label: '承租人联系方式',
      minWidth: 140,
    }, {
      prop: 'monthRent',
      label: '月租金',
    }, {
      prop: 'deposit',
      label: '押金',
    },
    {
      prop: 'leaseTerm',
      type: 'input',
      label: '租期',
      append: '个月'
    }, {
      prop: 'applyStatus',
      type: 'select',
      label: '审核状态',
      search: true,
      dicData: getEnumArr('ContractApplyStatus'),
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
