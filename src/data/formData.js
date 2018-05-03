//demo1 form

var data = {};

var form1 = {
  "inline": false,
  "labelPosition": "right",
  "labelWidth": "80px",
  "size": "small",
  "statusIcon": true,
  "formItemList": [
    {
      "type": "input",
      "label": "文本",
      "disable": false,
      "readonly": false,
      "value": "",
      "placeholder": "请输入一些文本",
      "rules": [
        {
          "required": true,
          "message": "不能为空",
          "trigger": "blur"
        },
        {
          "min": 1,
          "max": 8,
          "type": "string",
          "message": "长度在1~8个字符",
          "trigger": "blur"
        },
        {
          "pattern": "^[\\w\\u4e00-\\u9fa5-_]+$",
          "message": "正则验证失败:^[\\w\\u4e00-\\u9fa5-_]+$",
          "trigger": "blur"
        }
      ],
      "key": "28a09ef0-8bea-4a5d-af59-546fb229bd5c",
      "subtype": "text"
    },
    {
      "type": "input",
      "label": "文本",
      "disable": false,
      "readonly": false,
      "value": "",
      "placeholder": "请输入一些文本",
      "rules": [
        {
          "required": true,
          "message": "不能为空",
          "trigger": "blur"
        },
        {
          "min": 1,
          "max": 8,
          "message": "长度在 1 到 8 个字符",
          "trigger": "blur"
        },
        {
          "pattern": "^[\\w\\u4e00-\\u9fa5-_]+$",
          "message": "正则验证失败:^[\\w\\u4e00-\\u9fa5-_]+$",
          "trigger": "blur"
        }
      ],
      "key": "872227c3-f1da-444f-9bd4-51ee78c75670",
      "subtype": "password"
    },
    {
      "type": "number",
      "label": "数字",
      "value": 16,
      "decimal1": 2,
      "min": 0,
      "max": 99998,
      "prepend": "￥",
      "append": "元",
      "rules": [
        {
          "required": true
        }],
      "key": "2c0cb759-2904-4c3d-ae8c-2ba3af2d9eef"
    },
    {
      "type": "switch",
      "label": "开关",
      "appearance": "switch",
      "value": true,
      "rules": [
        {
          "required": true
        }],
      "key": "d8722a2a-41fc-4f7d-b512-898da2e491d0"
    },
    {
      "type": "radio",
      "label": "单选",
      "value": "",
      "button": false,
      "border": false,
      "rules": [
        {
          "required": true,
          "message": "请选择一项",
          "trigger": "blur"
        }
      ],
      "key": "88da89cc-d027-48aa-942b-d708b6ed3696",
      "options": [
        {
          "value": "a",
          "label": "0",
          "disabled": false
        },
        {
          "value": "b",
          "label": "1",
          "disabled": false
        },
        {
          "value": "c",
          "label": "2",
          "disabled": false
        }
      ]
    },
    {
      "type": "checkbox",
      "label": "多选",
      "value": [],
      "border": false,
      "button": false,
      "rules": [
        {
          "required": true,
          "message": "必填项",
          "trigger": "blur"
        }
      ],
      "key": "iiiiiii",
      "options": [
        {
          "value": "0",
          "label": "a",
          "disabled": false
        },
        {
          "value": "1",
          "label": "b",
          "disabled": false
        },
        {
          "value": "2",
          "label": "c",
          "disabled": false
        },
        {
          "value": "3",
          "label": "d",
          "disabled": false
        },
        {
          "value": "4",
          "label": "e",
          "disabled": false
        }
      ]
    },
    {
      "type": "select",
      "label": "下拉",
      "value": "",
      "disabled": false,
      "multiple": false,
      "placeholder": "请选择",
      "rules": [],
      "key": "6fd63c3b-3a24-4554-be80-73f99bb95f8a",
      "options": [
        {
          "value": "yaogao",
          "label": "蒸羊羔",
          "disabled": false
        }
      ]
    },
    {
      "type": "date",
      "value": "2018-04-03 21:38:52",
      "disabled": false,
      "rules": [
        {
          "required": "true",
          "message": "此项为必填项"
        }
      ],
      "placeholder": "请选择",
      "key": "e7ba7777-51eb-4d72-b82a-cf4b4b3c90af",
      "subtype": "datetime",
      "label": "日期时间",
      "valueFormat": "yyyy-MM-dd HH:mm:ss"
    },
    {
      "type": "cascader",
      "label": "级联选择",
      "disabled": false,
      "filterable": false,
      "value": null,
      "placeholder": "请选择",
      "rules": [
        {
          "required": true,
          "type": "array",
          "min": 1,
          "message": "请选择"
        }
      ],
      "key": "700e6d63-02bb-4b64-81b7-bb832def9075",
      "areaShortcut": "regionData"
    }/*,
    {
      "type": "file",
      "label": "头像",
      "value": null,
      "key": "700e6d63-02bb-4b64-81b7-bb832def9665"
    }*/
  ]
}

data.form1 = form1;

var form2 =  [
        {
          $type: 'input',
          $id: 'name',
          label: '活动名称',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }, {
          $type: 'select',
          $id: 'region',
          label: '活动区域',
          $options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }],
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }, {
          $type: 'date-picker',
          $id: 'date',
          label: '活动时间',
          $el: {
            type: 'datetime',
            placeholder: '请选择'
          },
          rules: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ]
        }, {
          $type: 'switch',
          $id: 'delivery',
          label: '即时配送'
        }, {
          // 增加的 enableWhen 示例, 与 element 无关
          $type: 'input',
          $id: 'enableWhenDelivery',
          $el: {
            placeholder: '如果你选择即时配送就看到我啦'
          },
          label: '隐藏项demo',
          $enableWhen: { delivery: true }
        }, {
          $type: 'checkbox-group',
          $id: 'type',
          label: '活动性质',
          $default: [],
          $options: [{
            label: '美食/餐厅线上活动'
          }, {
            label: '地推活动'
          }, {
            label: '线下主题活动'
          }, {
            label: '单纯品牌曝光'
          }],
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
        }, {
          $type: 'radio-group',
          $id: 'resource',
          label: '特殊资源',
          $options: [{
            label: '线上品牌商赞助'
          }, {
            label: '线下场地免费'
          }],
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        }, {
          $type: 'input',
          $id: 'desc',
          label: '活动形式',
          $el: {
            type: 'textarea'
          },
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      ]

data.form2 = form2;

export default data