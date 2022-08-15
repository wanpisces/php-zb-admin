import {
  getEnumArr
} from "@/util/enumData";
import count from "@/util/count";
import {
  getStore
} from "@/util/store.js";
//大于50，小于100的数字
var validate50dayunum100 = (rule, value, callback) => {
  let regName = /^\+?[1-9]\d*$/
  if (!regName.test(value) || value < 50 || value > 100) {
    callback(new Error("请输入大于50，小于100的整数!"));
  } else {
    callback();
  }
};
//大于0的整数
var validate0dayunum = (rule, value, callback) => {
  let regName = /^\+?[1-9]\d*$/
  if (!regName.test(value) ) {
    callback(new Error("请输入大于0的整数!"));
  } else {
    callback();
  }
};
export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  labelWidth: 160,
  "stripe": true,
  searchLabelWidth: 100,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  menuWidth: '268px',
  column: [{
    prop: 'fullName',
    label: '项目名称',
    display: false,
  }, {
    prop: 'simpleName',
    label: '项目简称',
    display: false
  }, {
    prop: 'agencyId',
    label: '所属代持机构',
    minWidth: 100,
    search: false,
    display: false,
    props: {
      label: 'fullName',
      value: 'id'
    },
    dicUrl: '/manager/agency/all',
    dicMethod: 'get',
  }, {
    prop: 'areaId',
    type: 'select',
    label: '所属地区',
    display: false,
    search: true,
    display: false,
    dicMethod: 'get',
    dicUrl: '/manager/org/area/all',
    props: {
      label: 'name',
      value: 'id'
    },
  }, {
    prop: 'street',
    label: '所属街道',
    search: true,
    display: false
  }, {
    prop: 'ratioUser',
    label: '产权比例(个人:代持机构)',
    minWidth: 160,
    display: false,
    slot: true,
  }, {
    prop: 'rent',
    label: '市场参考租金',
    append: '元/平/月',
    minWidth: 100,
    display: false
  },
  // {
  //   prop: 'minRentFloor',
  //   label: '最低租金下限',
  //   display: false
  // }, 
  {
    prop: 'createTime',
    label: '创建时间',
    minWidth: 140,
    display: false
  }
  ],
  group: [{
    label: '基础数据',
    "column": [{
      prop: 'fullName',
      type: 'input',
      label: '项目名称',
      search: true,
      maxlength: 50,
    }, {
      "type": "input",
      "label": "预售许可证号",
      "prop": "preSaleLicenseNumber",
      maxlength: 100,
    },
    {
      prop: 'agencyId',
      label: '所属代持机构',
      type: "select",
      minWidth: 100,
      search: true,
      props: {
        label: 'fullName',
        value: 'id'
      },
      rules: [{
        message: '所属代持机构必须选择',
        required: true
      }],
      dicUrl: '/manager/agency/all',
      dicMethod: 'get',
    }, {
      "type": "input",
      "label": "项目简称",
      "prop": "simpleName",
      search: true,
      maxlength: 50,
      rules: [{
        message: '项目简称必须填写',
        required: true
      }],
    }, {
      prop: 'areaId',
      type: 'select',
      label: '所属地区',
      dicMethod: 'get',
      dicUrl: '/manager/org/area/all',
      props: {
        label: 'name',
        value: 'id'
      },
      rules: [{
        message: '所属地区必须填写',
        required: true
      }],
    }, {
      prop: 'street',
      type: 'input',
      label: '所属街道',
      rules: [],
      display: true,
      maxlength: 50,
      rules: [{
        message: '所属街道必须填写',
        required: true
      }],
    }, {
      prop: 'address',
      type: 'textarea',
      label: '项目坐落地址',
      maxlength: 300,
      'show-word-limit': true,
      span: 24,
      rules: [{
        required: false,
      }],
      display: true
    },
    {
      "type": "input",
      "label": "个人产权占比",
      "prop": "ratioUser",
      append: '%',
      required: false,
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      "type": "input",
      "label": "代持机构产权占比",
      "prop": "ratioAgency",
      append: '%',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
      display: true
    }, {
      precision: 2,
      "label": "市场参考租金",
      "prop": "rent",
      append: '元/平/月',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    },
    // {
    //   "type": "number",
    //   precision: 2,
    //   "label": "最低租金下限",
    //   "prop": "minRentFloor",
    //   append: '元/平/月',
    //   rules: [{
    //     message: '此项必须填写',
    //     required: true
    //   }],
    // },
    {
      "type": "number",
      "label": "项目经度",
      "prop": "longitude",
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      "type": "number",
      "label": "项目纬度",
      "prop": "latitude",
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    },
    {
      "type": "select",
      "label": "趸租租金折扣",
      "prop": "discount",
      rules: [{
        required: true,
        validator: validate50dayunum100,
        trigger: "blur"
      }],
      dicData:count.discountSelect(),
      display: true
    },
    // {
    //   "type": "input",
    //   "label": "趸租租金标准",
    //   "prop": "discountStandard",
    //   disabled:false,
    //   append: '元',
    //   rules: [{
    //     required: true,
    //     validator: validate0dayunum,
    //     trigger: "blur"
    //   }],
    //   display: true
    // },
    {
      prop: 'remarks',
      type: 'textarea',
      label: '备注',
      maxlength: 300,
      'show-word-limit': true,
      span: 24,
      rules: [{
        required: false,
      }],
      display: true
    },
      // {
      //   type: 'dynamic',
      //   "label": "政府产权份额比例租金定额收益",
      //   "prop": "governmentIncomes",
      //   span: 24,
      //   value: [{}],
      //   rules: [{
      //     required: false,
      //     message: '请输入租金收益',
      //   }],
      //   children: {
      //     align: 'center',
      //     headerAlign: 'center',
      //     column: [{
      //       label: '套型选择',
      //       prop: "name",
      //       type: 'select',
      //       rules: [{
      //         required: false,
      //         message: '请选择套型',
      //       }],
      //       dicData: getEnumArr('NestTypeEnum'),
      //     }, {
      //       type: 'input',
      //       label: '租金收益',
      //       prop: "value",
      //       append: '元/月',
      //       rules: [{
      //         required: false,
      //         message: '请输入租金收益',
      //       }],
      //     }],
      //   }
      // },

    ]
  }, {
    label: '详细信息',
    "column": [{
      "type": "input",
      "label": "房屋总套数",
      "prop": "totalHouses",
      append: '套',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      "type": "input",
      "label": "楼栋总数",
      "prop": "buildingCount",
      append: '栋',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      "type": "number",
      precision: 2,
      "label": "房屋总面积",
      "prop": "totalArea",
      append: 'm²',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    },
    {
      type: 'dynamic',
      "label": "房屋套数分布情况",
      "prop": "setDistribution",
      span: 24,
      value: [{}],
      rules: [{
        required: false,
        message: '请输入房屋套数分布情况',
      }],
      children: {
        align: 'center',
        headerAlign: 'center',
        column: [{
          label: '套型选择',
          prop: "name",
          type: 'select',
          rules: [{
            required: false,
            message: '请选择套型',
          }],
          dicData: getEnumArr('UnitTypeRoomEnum'),
        }, {
          type: 'number',
          label: '套型数量',
          prop: "value",
          append: '个',
          rules: [{
            required: false,
            message: '请输入套型数量',
          }],
        }]
      }
    }, {
      "type": "input",
      "label": "装修情况",
      "prop": "renovationCondition",
      maxlength: 50,
    }, {
      "type": "input",
      "label": "物业公司",
      "prop": "propertyCompany",
      maxlength: 50,
      rules: [{
        message: '该项必须填写',
        required: true
      }],
    }, {
      "type": "input",
      "label": "物业费标准",
      "prop": "propertyCosts",
      append: '元/平/月',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      label: '取暖方式',
      prop: "heatingMethod",
      type: 'select',
      rules: [{
        required: false,
        message: '请选择',
      }],
      dicData: getEnumArr('HeatingMethodEnum'),
    }, {
      "type": "input",
      "label": "取暖费标准",
      "prop": "heatingCosts",
      append: '元/平/采暖季',
    }, {
      "type": "input",
      "label": "开发商名称",
      "prop": "developer",
      maxlength: 50,
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    },
    {
      label: '交付状态',
      prop: "deliveryStatus",
      type: 'select',
      rules: [{
        required: true,
        message: '请选择',
      }],
      dicData: getEnumArr('DeliveryStatusEnum'),
    },
    {
      prop: 'firstBatchDeliveryDate',
      type: 'date',
      label: '首批（预）交付日期',
      rules: [{
        required: true,
        message: '此项必须填写'
      }],
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd'
    },
    {
      prop: 'completionYear',
      type: 'dynamic',
      label: '竣工验收备案年份',
      rules: [{
        required: false,
        message: '请选择竣工验收备案年份'
      }],
      span: 24,
      value: [{}],
      children: {
        align: 'center',
        headerAlign: 'center',
        column: [{
          label: '竣工验收备案年份',
          prop: "name",
          format: 'yyyy',
          valueFormat: 'yyyy',
          type: 'year',
          rules: [{
            required: false,
            message: '请选择',
          }],
        }, {
          type: 'input',
          label: '备注说明',
          prop: "value",
          rules: [{
            required: false,
            message: '请输入',
          }],
        }]
      }
    },
    {
      precision: 2,
      "label": "容积率",
      "prop": "volumeRate",
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      label: '建筑类型',
      prop: "projectType",
      type: 'select',
      rules: [{
        required: false,
        message: '请选择',
      }],
      dicData: getEnumArr('ProjectTypeEnum'),
    }, {
      "type": "input",
      "label": "车位配比",
      "prop": "parkingSpaceRatio",
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    },
    {
      prop: 'salesStartYear',
      type: 'year',
      label: '启动销售年份',
      rules: [{
        required: false,
        message: '此项必须填写'
      }],
      format: 'yyyy',
      display: true,
      valueFormat: 'yyyy'
    },
    {
      "type": "number",
      precision: 2,
      "label": "销售单价",
      "prop": "unitPrice",
      append: '元',
      rules: [{
        message: '此项必须填写',
        required: true
      }],
    }, {
      "type": "textarea",
      "label": "项目介绍",
      "prop": "introduction",
      maxlength: 500,
      showWordLimit: true,
      span: 24
    }
    ]
  }, {
    label: '户型信息',
    editDisplay: true,
    "column": [{
      addDisplay: false,
      "type": "upload",
      "label": "户型图",
      "prop": "unitTypeList",
      propsHttp: {
        fileName: 'multipartFile', //传入后台字段名
        home: getStore({ //文件服务器地址
          name: 'fileConfig'
        }),
        res: 'data', //返回结果字段
        url: 'fullPath' //图片地址
      },
      rules: [{
        message: '此项必须上传',
        required: true
      }],
      span: 24,
      listType: 'picture-card',
      tip: '只能上传jpg/png文件，且不超过10M',
      action: "/file/image/upload/web?category=IMG",
      formslot: true,

    }]
  }, {
    label: '项目图片(请务必按照标题上传相对应的图片)',
    "column": [{
      labelPosition: 'top',
      limit: 1,
      "type": "upload",
      "label": "全景图",
      "prop": "panorama",
      listType: 'picture-img',
      span: 6,
      rules: [{
        message: '此项必须上传',
        required: true
      }],
      propsHttp: {
        fileName: 'multipartFile', //传入后台字段名
        home: getStore({ //文件服务器地址
          name: 'fileConfig'
        }),
        res: 'data', //返回结果字段
        url: 'fullPath' //图片地址
      },
      action: "/file/image/upload/web?category=IMG"
    },
    {
      labelPosition: 'top',
      limit: 1,
      "type": "upload",
      "label": "小区正门",
      "prop": "frontDoor",
      listType: 'picture-img',
      span: 6,
      rules: [{
        message: '此项必须上传',
        required: true
      }],
      propsHttp: {
        fileName: 'multipartFile',
        home: getStore({
          name: 'fileConfig'
        }),
        res: 'data',
        url: 'fullPath'
      },
      action: "/file/image/upload/web?category=IMG"
    },
    {
      labelPosition: 'top',
      limit: 1,
      "type": "upload",
      "label": "小区环境",
      "prop": "communityEnvironment",
      listType: 'picture-img',
      span: 6,
      rules: [{
        message: '此项必须上传',
        required: true
      }],
      propsHttp: {
        fileName: 'multipartFile',
        home: getStore({
          name: 'fileConfig'
        }),
        res: 'data',
        url: 'fullPath'
      },
      action: "/file/image/upload/web?category=IMG"
    }, {
      labelPosition: 'top',
      limit: 1,
      "type": "upload",
      "label": "楼宇图",
      "prop": "buildingPlans",
      listType: 'picture-img',
      span: 6,
      rules: [{
        message: '此项必须上传',
        required: true
      }],
      propsHttp: {
        fileName: 'multipartFile',
        home: getStore({
          name: 'fileConfig'
        }),
        res: 'data',
        url: 'fullPath'
      },
      action: "/file/image/upload/web?category=IMG"
    }, {
      labelPosition: 'top',
      limit: 4,
      "type": "upload",
      "label": "其他图(限4张)",
      "prop": "otherRealPictures",
      listType: 'picture-card',
      span: 24,
      propsHttp: {
        fileName: 'multipartFile',
        home: getStore({
          name: 'fileConfig'
        }),
        res: 'data',
        url: 'fullPath'
      },
      action: "/file/image/upload/web?category=IMG",
      formslot: true,
    }
    ]
  }]

}
export const floorFormOption = {
  editBtn: false,
  delBtn: false,
  submitBtn: false,
  emptyBtn: false,
  labelPosition: "left",
  labelWidth: 100,
  menuBtn: true,
  menuPosition: "center",
  menuAlign: "center",
  align: "center",
  column: [{
    label: "房间号",
    prop: "roomNum",
    span: 6,
    disabled: true
  },
  {
    label: "套型",
    span: 6,
    disabled: true,
    prop: "nestType",
    type: "select",
    props: {
      label: "label",
      value: "value",
    },
    dicData: getEnumArr("UnitTypeRoomEnum"),
  },
  {
    span: 6,
    disabled: true,
    label: "房屋面积",
    prop: "buildingArea",
  },
  {
    span: 12,
    labelWidth: 200,
    disabled: true,
    label: "产权比例(个人:代持机构)",
    prop: "ratioUser",
    formslot: true,
    minWidth: 160
  },
  {
    label: "交易记录",
    prop: "soldHistory",
    type: "dynamic",
    span: 24,
    disabled: true,
    value: [],
    children: {
      align: "center",
      headerAlign: "center",
      column: [{
        label: "网签时间",
        prop: "handleTime",
      },
      {
        label: "成交价格（元/平）",
        prop: "amont",
      },
      {
        label: "购房人",
        prop: "handleUser",
      },
      ],
    },
  },
  {
    label: "出租记录",
    prop: "letHistory",
    type: "dynamic",
    span: 24,
    disabled: true,
    value: [],
    children: {
      align: "center",
      headerAlign: "center",
      column: [{
        label: "出租时间",
        prop: "handleTime",
      },
      {
        label: "出租价格(元/月)",
        prop: "amont",
      },
      {
        label: "承租人",
        prop: "handleUser",
      },
      {
        label: "终止时间",
        prop: "dueTime",
      },
      ],
    },
  },
  ],
}
