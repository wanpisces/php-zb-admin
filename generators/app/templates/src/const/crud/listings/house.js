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
  labelWidth: 160,
  menuWidth: '158px',
  searchLabelWidth: 120,
  column: [{
      prop: 'id',
      type: 'input',
      label: 'ID',
      rules: [],
      display: false
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
    },
    {
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
      prop: 'createTime',
      type: 'datetime',
      label: '创建时间',
      format: 'yyyy-MM-dd HH:mm:ss',
      display: false,
      minWidth: 140,
      valueFormat: 'yyyy-MM-dd HH:mm:ss'
    }, {
      prop: 'updateTime',
      type: 'datetime',
      label: '更新时间',
      minWidth: 140,
      format: 'yyyy-MM-dd HH:mm:ss',
      display: false,
      valueFormat: 'yyyy-MM-dd HH:mm:ss'
    },

    {
      prop: 'areaId',
      type: 'select',
      label: '所属地区',
      search: true,
      rules: [],
      dicMethod: 'get',
      dicUrl: '/manager/org/area/all',
      props: {
        label: 'name',
        value: 'id'
      },
      readonly: true,
      display: true,
      disabled: true
    }, {
      prop: 'street',
      type: 'input',
      label: '所属街道',
      rules: [],
      display: true,
      readonly: true,
      disabled: true
    }, {
      prop: 'propertyType',
      type: 'input',
      label: '产权持有情况',
      readonly: true,
      display: true,
      disabled: true,
      formslot: true,
    },
    {
      prop: 'administrativeAddress',
      type: 'input',
      label: '行政坐落地址',
      minWidth: 120,
      rules: [{
        required: true,
        message: '行政坐落地址必须填写'
      }],
      required: true,
      display: true
    }, {
      prop: 'buildingNum',
      type: 'input',
      label: '楼栋',
      rules: [{
        message: '楼栋必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'unit',
      type: 'input',
      label: '单元',
      rules: [{
        required: true,
        message: '单元必须填写'
      }],
      required: true,
      display: true
    }, {
      prop: 'totalFloor',
      type: 'input',
      label: '总楼层',
      rules: [{
        message: '总楼层必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'currentFloor',
      type: 'input',
      label: '所在楼层',
      rules: [{
        message: '所在楼层必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'roomNum',
      type: 'input',
      label: '房号',
      rules: [{
        message: '房号必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'houseOrientation',
      type: 'select',
      label: '房屋朝向',
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [{
        message: '房屋朝向必须填写',
        required: true
      }],
      slotFrom: true,
      dicData: getEnumArr('OrientationEnum'),
      dicFlag: true,
      display: true,
      dataType: 'string',
      required: true,
      cascaderItem: []
    },
    {
      prop: 'nestType',
      type: 'select',
      label: '套型',
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [{
        message: '套型必须填写',
        required: true
      }],
      dicData: getEnumArr('UnitTypeRoomEnum'),
      display: true,
      required: true,
      cascaderItem: []
    }, {
      prop: 'typeCode',
      formslot: true,
      type: 'input',
      label: '户型代码',
      rules: [{
        message: '户型代码必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'buildingArea',
      type: 'input',
      label: '建筑面积',
      rules: [{
        message: '建筑面积必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'setArea',
      type: 'input',
      label: '套内面积',
      rules: [{
        message: '套内面积必须填写',
        required: true
      }],
      required: true,
      display: true
    }, {
      prop: 'salesStatus',
      type: 'select',
      label: '销售状态',
      search: true,
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [{
        message: '请选择销售状态',
        required: true
      }],
      dicData: [{
        label: '全部',
        value: ''
      }].concat(getEnumArr('SalesStatusEnum')),
      dicFlag: false,
      display: true,
      required: true,
      cascaderItem: []
    },{
      prop: 'remarks',
      type: 'textarea',
      label: '备注',
      slot:true,
      maxlength: 300,
      'show-word-limit':true,
      span: 24,
      rules: [{
        required: false,
      }],
      display: true
    }, {
      prop: 'contractNumber',
      type: 'input',
      label: '网签合同编号',
      minWidth: 120,
      search: true,
      rules: [{
        message: '合同编号必须填写',
        required: false
      }],
      display: false,
    },
    {
      prop: 'realEstateNumber',
      type: 'input',
      label: '不动产登记编号',
      minWidth: 130,
      search: true,
      rules: [{
        message: '不动产登记编号必须填写',
        required: false
      }, {
        min: 3,
        max: 50,
        message: '长度在 3 到 50 个字符',
        trigger: 'blur'
      }],
      display: false,
    },
    {
      prop: 'oscnDate',
      type: 'datetime',
      label: '网签日期',
      minWidth: 140,
      rules: [{
        required: true,
        message: '网签日期必须填写'
      }],
      format: 'yyyy-MM-dd',
      display: false,
      required: true,
      valueFormat: 'yyyy-MM-dd'
    }, {
      prop: 'handoverDate',
      type: 'datetime',
      label: '交房日期',
      minWidth: 140,
      rules: [],
      format: 'yyyy-MM-dd',
      display: false,
      required: false,
      valueFormat: 'yyyy-MM-dd'
    }, {
      prop: 'masterName',
      type: 'input',
      label: '购房人姓名',
      minWidth: 100,
      search: true,
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [{
        message: '购房人姓名必须填写',
        required: true
      }],
      dicData: [],
      display: false,
      required: true,
      dicOption: 'static',
      cascaderItem: []
    }, {
      prop: 'masterCertificate',
      type: 'select',
      label: '主购房人证件类型',
      minWidth: 140,
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [{
        message: '请选择主购房人证件类型',
        required: true
      }],
      dicData: getEnumArr('CertificateTypeEnum'),
      display: false,
      required: true,
      cascaderItem: []
    }, {
      prop: 'masterIdCard',
      type: 'input',
      label: '购房人证件号码',
      minWidth: 160,
      search: true,
      rules: [{
        message: '购房人证件号码必须填写',
        required: true
      }],
      required: true,
      display: false,
    }, {
      prop: 'slaveOwnerName',
      type: 'input',
      label: '共同共有购房人',
      minWidth: 140,
      rules: [],
      display: false,
    }, {
      prop: 'slaveCertificate',
      type: 'select',
      label: '共同购房人证件类型',
      minWidth: 140,
      value: null,
      props: {
        label: 'label',
        value: 'value'
      },
      display: false,
      cascaderItem: [],
      dicData: getEnumArr('CertificateTypeEnum'),
    }, {
      prop: 'slaveIdCard',
      type: 'input',
      label: '共同购房人证件号码',
      minWidth: 160,
      display: false,
    }, {
      prop: 'address',
      type: 'input',
      label: '房源地址',
      rules: [],
      search: true,
      display: false
    }, {
      prop: 'powerOfAttorneyPath',
      type: 'input',
      label: '委托书路径',
      minWidth: 100,
      display: false
    }
  ],
}
