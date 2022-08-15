export const tableOption = {
  column: [{
      prop: 'configKey',
      span: 24,
      type: 'input',
      label: '配置项',
      rules: [{
        message: '配置项必须填写',
        required: true
      }],
      required: true,
      maxlength: 200,
      showWordLimit: true
    },
    {
      prop: 'configValue',
      span: 24,
      type: 'textarea',
      label: '参数值',
      rules: [{
        message: '参数值必须填写',
        required: true
      }],
      display: true,
      required: true,
      maxlength: 200,
      showWordLimit: true
    },
    {
      prop: 'note',
      span: 24,
      type: 'input',
      label: '说明',
      rules: [],
      maxlength: 200,
      showWordLimit: true
    }
  ],
  labelPosition: 'left',
  labelSuffix: '：',
  labelWidth: 120,
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
