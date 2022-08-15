import {
  getEnumArr
} from "@/util/enumData";
export const tableOption = {
  column: [
    {
      prop: 'templateType',
      span: 12,
      type: 'select',
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
      value: 'LEASE_AGREEMENT',
      dicData: getEnumArr('TemplateContractType'),
      display: true,
      required: true
    },
    {
      prop: 'templateName',
      type: 'input',
      label: '模板名称',
      rules: [],
      required: true,
      maxlength: 21,
      showWordLimit: true
    },
    {
      prop: 'templateCode',
      type: 'input',
      label: '模板编号',
      rules: [
        {
          message: '模板编号格式不匹配',
          pattern: {}
        }
      ],
      // pattern: '\\w+',
      required: true,
      maxlength: 32,
      showWordLimit: true
    },
    {
      prop: 'description',
      span: 24,
      type: 'textarea',
      label: '模板描述',
      rules: [
        {
          message: '模板描述必须填写',
          required: true
        }
      ],
      display: true,
      required: true,
      maxlength: 170,
      showWordLimit: true
    },
    {
      type: 'input',
      label: '模板文件预览',
      display: false,
      prop: 'fileName',
      slot: true
    },
    {
      type: 'upload',
      label: '模板文件',
      // formslot: true,
      required: true,
      span: 24,
      display: true,
      hide: true,
      showColumn: false,
      showFileList: true,
      listType: 'text',
      multiple: false,
      limit: 1,
      props: {
        label: 'fileName',
        value: 'path'
      },
      propsHttp: {
        url: 'fullPath',
        name: 'fileName',
        res: 'data'
      },
      canvasOption: {},
      prop: 'path',
      drag: false,
      accept: 'application/pdf',
      tip: '上传模板需为制作了文本域的pdf文件',
      action: '/file/upload/web/default?category=COMMON_FILE'
    },
    {
      prop: 'status',
      slot: true,
      type: 'radio',
      label: '模板状态',
      props: {
        label: 'label',
        value: 'value'
      },
      rules: [
        {
          message: '请选择状态',
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
          label: '停用',
          value: 1
        }
      ],
      display: true,
      required: true
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