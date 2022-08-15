import { cardid } from "@/util/validate";
var validateIdCard = (rule, value, callback) => {
  let list = cardid(value);
  if (list[0]) {
    callback(list[1]);
  } else {
    callback();
  }
};
export const tableOption = {
  column: [{
    prop: 'roleId',
    size: 'mini',
    type: 'select',
    label: '用户角色',
    search:true,
   
    rules: [{
      required: true,
      message: '请选择用户角色'
    }],
    dicData: [{
      label: '代持机构用户',
      value: 3
    },
    {
      label: '市住建委',
      value: 6
    },
    {
      label: '区住建委',
      value: 7
    },
      // {
      //   label: '复议管理员',
      //   value: 8
      // }
    ],
    display: true,
    required: true,
  },
  {
    prop: 'agencyId',
    size: 'mini',
    type: 'select',
    label: '所属代持机构',
    props: {
      label: 'fullName',
      value: 'id'
    },
    rules: [{
      required: true,
      message: '请选择所属代持机构'
    }],
    search:true,
    dicUrl: '/manager/agency/all',
    display: true,
    hide: true,
    dicMethod: 'get',
    required: true
  },
  {
    prop: 'agencyIds',
    size: 'mini',
    type: 'select',
    multiple: true,
    label: '所属代持机构全称',
    props: {
      label: 'fullName',
      value: 'id'
    },
    rules: [{
      required: true,
      message: '请选择所属代持机构'
    }],
    dicUrl: '/manager/agency/all',
    display: true,
    hide: true,
    dicMethod: 'get',
    required: true
  },
  {
    prop: 'agencyName',
    size: 'mini',
    type: 'select',
    label: '所属代持机构',
    display: false,
    required: true
  },
  // {
  //   prop: 'projectIds',
  //   size: 'mini',
  //   type: 'select',
  //   label: '负责项目管理',
  //   multiple: true,
  //   props: {
  //     label: 'fullName',
  //     value: 'id',
  //   },
  //   rules: [{
  //     required: true,
  //     message: '请选择负责项目'
  //   }],
  //   dicUrl: '/manager/agencyUser/query/project/all',
  //   hide: true,
  //   dicMethod: 'get',
  //   required: true
  // },
  {
    prop: 'lockFlag',
    type: 'select',
    label: '账号状态',
    slot: true,
    search: true,
    props: {
      label: 'label',
      value: 'value'
    },
    value: '0',
    dicData: [{
      label: '正常',
      value: '0'
    },
    {
      label: '禁用',
      value: '9'
    }
    ],
    display: true,
    required: true,
    rules: [{
      required: true,
      message: '请选择状态'
    }]
  },
  {
    prop: 'username',
    type: 'select',
    label: '登录账号',
    filterable: true,
    allowCreate: true,
    rules: [{
      message: '登录账号必须填写',
      required: true
    }],
    props: {
      label: 'label',
      value: 'loginName'
    },
    formslot: true,
    slot: true,
    dicMethod: 'get',
    dicUrl: '/manager/osms/sys/user/all',
  },
  {
    prop: 'phone',
    type: 'input',
    label: '手机号',
    search: true,
    rules: [{
      message: '手机号必须填写',
      required: true
    }],
    required: true
  },
  {
    type: 'password',
    label: '密码',
    span: 12,
    prop: 'password',
    maxlength: 16,
    showPassword: true,
    required: true,
    hide: true,
    showColumn: false,
    editDisplay: false,
    rules: [{
      required: true,
      message: '密码必须填写'
    }]
  },
  {
    prop: 'realName',
    type: 'input',
    label: '真实姓名',
    search: true,
    rules: [{
      required: true,
      message: '真实姓名必须填写'
    }]
  }, {
    prop: 'idCard',
    type: 'input',
    label: '身份证号码',
    search: true,
    display: true,
    rules: [{
      required: true,
      message: "请输入正确的身份证号码",
      trigger: "blur",
      validator:validateIdCard
    }]
  }
  ],
  labelPosition: 'right',
  labelSuffix: '：',
  labelWidth: 170,
  gutter: 0,
  menuBtn: true,
  menuWidth: 300,
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
  detail: false,
  searchLabelWidth:110,
}
