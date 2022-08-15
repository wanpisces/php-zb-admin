export const tableOption = {
  column: [
    {
      prop: 'templateType',
      span: 24,
      type: 'select',
      arrow: false,
      label: '模板类型',
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [
        {
          message: '请选择模板类型',
          required: true
        }
      ],
      border: false,
      dicData: [
        {
          label: '用户协议',
          value: 'USER_AGREEMENT'
        },
        {
          label: '隐私政策',
          value: 'PRIVATE_POLICY'
        },
        {
          label: '出租使用协议',
          value: 'LEASE_AGREEMENT'
        },
        {
          label: '承诺书',
          value: 'LETTER_OF_COMMITMENT'
        },
        {
          label: '共有产权住房管理办法',
          value: 'COMMON_PROPERTY_MANAGE_RULES'
        },
        {
          label: '共有产权房出租通知',
          value: 'COMMON_PROPERTY_LEASE_NOTICE'
        },
        {
          label: '电子签名用户须知',
          value: 'ELE_SIGN_USER_NOTICE'
        },
        {
          label: '关于开展共有产权住房出租试点工作的通知',
          value: 'LAUNCHING_COMMON_PROPERTY_MANAGE_RULES'
        },
        {
          label: '使用管理办法',
          value: 'USE_MANAGEMENT_METHODS'
        }
      ],
      display: true,
      children: {
        column: []
      },
      collapse: true,
      required: true,
      cascaderItem: []
    },
    {
      prop: 'templateName',
      span: 24,
      type: 'input',
      label: '模板名称',
      rules: [
        {
          message: '模板名称必须填写',
          required: true
        }
      ],
      required: true,
      maxlength: 20,
      showWordLimit: true
    },
    {
      prop: 'templateCode',
      type: 'input',
      label: '模板编号',
      rules: [
        {
          message: '模板编号必须填写',
          required: true
        }
      ],
      required: true,
      maxlength: 10,
      showWordLimit: true
    },
    {
      prop: 'description',
      span: 24,
      type: 'textarea',
      label: '描述',
      rules: [
        {
          message: '描述必须填写',
          required: true
        }
      ],
      display: true,
      required: true,
      maxlength: 170,
      showWordLimit: true
    },
    {
      prop: 'content',
      span: 24,
      type: 'ueditor',
      label: '模板内容',
      hide: true,
      showColumn: false,
      required: true,
      options: {
        action: '/file/image/upload/web?category=IMG',
        config: {
          uploadFileName: 'multipartFile'
        },
        ali: {},
        oss: '',
        props: {
          res: "data",
          url:'fullPath',
        },
        qiniu: {},
      },
      component: 'avue-ueditor'
    },
    {
      prop: 'status',
      type: 'radio',
      slot: true,
      label: '模板状态',
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [
        {
          message: '请选择模板状态',
          required: true
        }
      ],
      value: 0,
      dicData: [
        {
          label: '启用',
          value: 0
        },
        {
          label: '禁用',
          value: 1
        }
      ],
      display: true,
      required: true
    }
  ],
  editBtn: false,
  delBtn: false,
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