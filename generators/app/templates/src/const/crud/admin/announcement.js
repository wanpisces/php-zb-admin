import {
  getEnumArr
} from "@/util/enumData";

export const tableOption = {
  column: [{
      type: 'input',
      label: '标题',
      prop: 'title',
      required: true,
      search: true,
      rules: [{
        required: true,
        message: '标题必须填写'
      }],
      maxlength: 200,
      showWordLimit: true,
      span: 24
    },
    {
      type: 'select',
      label: '公告类型',
      prop: 'modelType',
      searchLabelWidth: 100,
      search: true,
      dicData: getEnumArr('AnnouncementType'),
      display: true,
      props: {
        label: 'label',
        value: 'value'
      },
      value: 'ANNOUNCEMENT',
      required: true,
      rules: [{
        required: true,
        message: '请选择公告类型'
      }],
      span: 12
    },
    {
      type: 'input',
      label: '操作人',
      prop: 'operator',
      addDisplay: false,
      editDisplay: false,
      span: 24
    },
    {
      type: 'radio',
      label: '是否首页展示',
      prop: 'isShow',
      dicData: [{
          label: '展示',
          value: 1
        },
        {
          label: '不展示',
          value: 0
        }
      ],
      hide: true,
      props: {
        label: 'label',
        value: 'value'
      },
      addDisplay: false,
      editDisplay: false,
      span: 12
    },
    {
      type: 'radio',
      label: '发布状态',
      prop: 'pushStatus',
      slot: true,
      searchLabelWidth: 100,
      search: true,
      dicData: getEnumArr('AnnouncementPushType'),
      props: {
        label: 'label',
        value: 'value'
      },
      value: 'WAIT_PUSH',
      addDisplay: false,
      editDisplay: false,
      span: 12
    },
    {
      type: 'date',
      label: '发布时间',
      prop: 'pushTime',
      span: 12,
      required: true,
      rules: [{
        required: true,
        message: '发布时间必须填写'
      }],
      display: true,
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd'
    },
    {
      type: 'textarea',
      label: '摘要',
      prop: 'summary',
      span: 24,
      maxlength: 100,
      showColumn: false,
      hide: true,
      showWordLimit: true,
    },
    {
      type: 'ueditor',
      component: 'avue-ueditor',
      label: '内容',
      span: 24,
      showColumn: false,
      hide: true,
      required: true,
      rules: [{
        required: true,
        message: '摘要必须填写'
      }],
      options: {
        action: '/file/image/upload/web?category=IMG',
        oss: '',
        config:{
          uploadFileName:'multipartFile'
        },
        props: {
          res: "data",
          url:'fullPath',
        },
      },
      prop: 'content'
    }
  ],
  editBtn: false,
  delBtn: false,
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
