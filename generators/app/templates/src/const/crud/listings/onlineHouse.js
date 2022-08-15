import {
  getEnumArr
} from "@/util/enumData";
export const tableOption = {
  border: true,
  index: true,
  indexLabel: '编号',
  menuAlign: 'center',
  editBtn: false,
  delBtn: false,
  align: 'center',
  addBtn: false,
  search: false,
  refreshBtn: false,
  menuWidth: '108px',
  searchLabelWidth: 100,
  column: [{
      label: '房源号',
      prop: 'propertyName',
      search: true,
    }, {
      prop: 'projectId',
      type: 'select',
      label: '项目名称',
      search: true,
      props: {
        label: 'fullName',
        value: 'id'
      },
      rules: [{
        message: '项目名称必须填写',
        required: true
      }],
      dicMethod: 'get',
      dicUrl: '/manager/org/project/getAll/project',
      display: true,
      required: true,
      cascaderItem: []
    }, {
      label: '代持机构',
      prop: 'agencyName',
      search: true,
      type: 'select',
      dicMethod: 'get',
      dicUrl: '/manager/agency/all',
      props: {
        label: 'fullName',
        value: 'id'
      },
    }, {
      label: '房源类型',
      prop: 'leaseWay',
      search: true,
      type: 'select',
      dicData: getEnumArr('LeaseWay'),
      dicFlag: true,
    }, {
      label: '房源租赁编码',
      prop: 'houseRentalCode',
      minWidth: 120,
      search: true,
    }, {
      label: '房屋类型',
      prop: 'room', //room 室 hall 厅 sanitation 卫
      slot: true,
    }, {
      label: '使用协议状态',
      prop: 'protocolStatus',
      minWidth: 120,
      type: 'select',
      props: {
        label: 'label',
        value: 'value'
      },
      dicData: getEnumArr('SignStatus'),
      dicFlag: true,
    }, {
      type: 'select',
      label: '房源状态',
      prop: 'houseStatus',
      width: 120,
      search: true,
      props: {
        label: 'label',
        value: 'value'
      },
      dicData: getEnumArr('HouseStatusEnum'),
      dicFlag: true,
    }, {
      label: '审核状态',
      prop: 'status',

      props: {
        label: 'label',
        value: 'value'
      },
      dicData: getEnumArr('VerifyStatusEnum'),
      dicFlag: true,
    }, {
      label: '创建时间',
      prop: 'createTime',
      type: 'datetime',
      minWidth: 140,
      format: 'yyyy-MM-dd HH:mm:ss'
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
  "column": [{
    "label": "操作时间",
    "prop": "updateTime"
  }, {
    "label": "操作人",
    "prop": "operator"
  }, {
    "label": "状态",
    "prop": "houseStatus",
    props: {
      label: 'label',
      value: 'value'
    },
    dicData: getEnumArr('HouseStatusEnum'),
    dicFlag: true,
  }, {
    "label": "备注原因",
    "prop": "remarks"
  }]
}
