export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  editBtn: false,
  delBtn: false,
  searchMenuSpan: 6,
  align: 'center',
  addBtn: false,
  viewBtn: true,
  column: [{
    label: '角色名称',
    prop: 'roleName',
    span: 24,
    rules: [{
        required: true,
        message: '角色名称不能为空',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 50,
        message: '长度在 3 到 50 个字符',
        trigger: 'blur'
      }
    ]
  }, {
    width: 120,
    label: '角色标识',
    prop: 'roleCode',
    span: 24,
    editDisabled: true,
    rules: [{
        required: true,
        message: '角色标识不能为空',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 50,
        message: '长度在 3 到 50 个字符',
        trigger: 'blur'
      }
    ]
  }, {
    width: 150,
    label: '角色描述',
    prop: 'roleDesc',
    overHidden: true,
    span: 24,
    rules: [{
        required: true,
        message: '角色描述不能为空',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 100,
        message: '长度在 3 到 100 个字符',
        trigger: 'blur'
      }
    ]
  }, {
    label: '创建时间',
    prop: 'createTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    editDisplay: false,
    addDisplay: false,
    minWidth: 140,
    span: 24
  }]
}
