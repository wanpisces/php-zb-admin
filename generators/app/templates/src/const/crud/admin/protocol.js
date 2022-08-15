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
      label: '协议编号',
      search: true,
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
      label: '出租方',
    }, {
      prop: 'monthRent',
      label: '月租金',
    },
    {
      prop: 'leaseTerm',
      type: 'input',
      label: '租期',
      append: '个月'
    },
    {
      prop: 'signStatus',
      type: 'select',
      label: '协议状态',
      search: true,
      dicData: getEnumArr('SignStatus'),
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
