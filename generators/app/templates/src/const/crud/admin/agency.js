export const tableOption = {
  column: [{
      type: 'title',
      span: 24,
      display: true,
      styles: {
        fontSize: '18px',
        color: '#000'
      },
      labelWidth: '0px',
      value: '基础信息',
      showColumn: false,
      hide: true,
      prop: '1616720992362_1876'
    },
    {
      prop: 'fullName',
      span: 12,
      type: 'input',
      label: '机构全称',
      rules: [{
        message: '机构全称必须填写',
        required: true
      }],
      required: true
    },
    {
      prop: 'simpleName',
      span: 12,
      type: 'input',
      label: '机构简称',
      rules: [{
        message: '机构简称必须填写',
        required: true
      }],
      required: true
    },
    {
      prop: 'creditCode',
      span: 12,
      type: 'input',
      hide: true,
      label: '统一社会信用代码'
    },
    {
      prop: 'postcode',
      span: 12,
      type: 'input',
      label: '邮编',
      hide: true,
      rules: [],
      maxlength: 6,
      showWordLimit: true
    },
    {
      prop: 'areaId',
      dicUrl: '/manager/org/area/all',
      span: 12,
      type: 'select',
      label: '所属区县',
      hide: true,
      props: {
        label: 'name',
        value: 'id'
      },
    },
    {
      prop: 'mailingAddress',
      span: 12,
      type: 'input',
      label: '通讯地址',
      hide: true,
      maxlength: 85,
      showWordLimit: true
    },
    {
      prop: 'legalRepresent',
      span: 12,
      type: 'input',
      hide: true,
      label: '法定代表人'
    },
    {
      prop: 'legalRepresentPhone',
      span: 12,
      type: 'input',
      hide: true,
      label: '法定代表人电话'
    }, {
      prop: 'businessLeader',
      span: 12,
      type: 'input',
      hide: true,
      label: '业务负责人'
    },
    {
      prop: 'businessLeaderPhone',
      span: 12,
      type: 'input',
      hide: true,
      label: '业务负责人电话',
      addDisplay:false,
      editDisabled:true
    },
    {
      prop: 'attorney',
      span: 12,
      type: 'input',
      hide: true,
      label: '委托代理人'
    },
    {
      prop: 'attorneyPhone',
      span: 12,
      type: 'input',
      hide: true,
      label: '委托代理人电话'
    },
    // {
    //   prop: 'attorneyIdCard',
    //   span: 12,
    //   type: 'input',
    //   hide: true,
    //   label: '委托代理人身份证号码'
    // },
    {
      prop: 'hotLine',
      span: 12,
      type: 'input',
      label: '热线电话',
      rules: []
    },
    // {
    //   prop: 'bankName',
    //   span: 12,
    //   type: 'input',
    //   label: '托管银行',
    //   rules: []
    // },
    {
      type: 'title',
      span: 24,
      display: true,
      styles: {
        fontSize: '18px',
        color: '#000'
      },
      labelWidth: '0px',
      value: '印章信息',
      showColumn: false,
      hide: true,
      prop: '1616720956789_28991',
      label: ''
    },
    {
      type: 'date',
      label: '创建时间',
      prop: 'createTime',
      span: 12,
      display: false,
      minWidth: 140,
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd'
    },
    {
      prop: 'contractSealName',
      span: 12,
      type: 'input',
      label: '合同印章名称'
    },
    {
      prop: 'contractSealCode',
      span: 12,
      type: 'input',
      label: '合同印章编号'
    }
  ],
  labelPosition: 'right',
  labelSuffix: '：',
  labelWidth: 170,
  gutter: 0,
  menuBtn: true,
  submitBtn: true,
  submitText: '提交',
  emptyBtn: true,
  emptyText: '清空',
  menuPosition: 'center',
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  searchMenuSpan: 6,
  tabs: false,
  detail: false
}
