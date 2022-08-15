import {
  getEnumArr
} from "@/util/enumData";
export const tableOption = {
  "border": true,
  "index": true,
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  searchLabelWidth: 100,
  "column": [{
    "prop": "createTime",
    "type": "input",
    "label": "创建时间",
    minWidth: 140,
  }, {
    "prop": "updateTime",
    "type": "input",
    "label": "更新时间",
    minWidth: 140,
  }, {
    "prop": "phone",
    "type": "input",
    "label": "手机号",
    minWidth: 100,
    search: true,
  }, {
    "prop": "realName",
    "type": "input",
    "label": "真实姓名",
    search: true,
  }, {
    "prop": "idCard",
    "type": "input",
    "label": "身份证号码",
    minWidth: 150,
    search: true,
  }, {
    "prop": "sex",
    "type": "input",
    "label": "性别",
    dicData: [{
      label: '女',
      value: 0,
    }, {
      label: '男',
      value: 1,
    }],
  }, {
    "prop": "birthday",
    "type": "input",
    "label": "出生日期"
  }, {
    "prop": "role",
    "type": "select",
    "label": "角色",
    dicData: [{
      label: '出租方、承租方',
      value: "11",
    }, {
      label: '出租方',
      value: "10",
    }, {
      label: '承租方',
      value: "01",
    }],
  }, {
    "prop": "familyType",
    "type": "select",
    "label": "家庭类型",
    dicData: getEnumArr('FamilyType'),
    minWidth: 120,
  }, {
    "prop": "twUserId",
    "type": "input",
    "label": "天威用户",
    minWidth: 170,
  }, {
    "prop": "orderNumber",
    "type": "input",
    "label": "天威用户实名认证订单号",
    minWidth: 180,
  }, {
    "prop": "lockFlag",
    "type": "select",
    "label": "状态",
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
  }],
  "gutter": 0,
  "stripe": true,
  "menuBtn": true,
  "emptyBtn": true,
  "emptyText": "清空",
  "menuAlign": "center",
  "submitBtn": true,
  "indexLabel": "序号",
  "labelWidth": 120,
  "submitText": "提交",
  "labelSuffix": "：",
  "menuPosition": "center",
  "searchMenuSpan": 6
}
