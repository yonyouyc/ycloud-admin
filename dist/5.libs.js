webpackJsonp([5],{12:function(e,a,l){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={b:r.default.observable("i am ucloud-ko-fileupload"),id:r.default.observable("随意绑定一个id"),list:r.default.observableArray([{id:1,title:"2"},{id:2,title:"3"}]),selectList:r.default.observableArray([{value:1,label:"北京"},{value:2,label:"上海"},{value:3,label:"天津"},{value:4,label:"附件"},{value:5,label:"超过二十个字的参照超过二十个字的参照超过二十个字的参照"},{value:6,label:"Blaskdf"}]),treeData:r.default.observable([{id:1,name:"北京总公司",children:[{id:2,name:"上海分公司",children:[]},{id:3,name:"福建分公司",children:[{id:4,name:"福州分公司",children:[]},{id:5,name:"厦门分公司",children:[]}]}]}]),datepicker:r.default.observable(),cascaderValue:r.default.observable({}),cascaderData:r.default.observableArray([{id:1,name:"1"},{id:2,name:"有下级",children:[{id:3,name:"4"},{id:4,name:"有下级",children:[{id:5,name:"4"},{id:6,name:"有下级",children:[{id:7,name:"4"},{name:"有下级"}]}]}]},{id:8,name:"3"}])};r.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(a,"__esModule",{value:!0});var t=l(0),r=_interopRequireDefault(t),n=l(27),i=_interopRequireDefault(n);a.default={init:init,template:i.default}},27:function(e,a){e.exports="<y-box>\n  <y-boxfilter params=\"title:'表单'\">\n  </y-boxfilter>\n  <y-boxcontent params=\"title: '基本信息'\">\n    <div class=\"row\">\n    <y-form params=\"labelWidth: '120px'\">\n      <div class=\"col-md-4\">\n        <y-formitem params=\"label:'输入框'\">\n          <y-input params=\"placeholder:'请输入文字'\"></y-input>\n        </y-formitem>\n        <y-formitem params=\"label:'下拉框'\">\n          <y-select params=\"dataList:$root.selectList\"></y-select>\n        </y-formitem>\n        <y-formitem params=\"label:'日期'\">\n          <y-datepicker params=\"placeholder:'请选择日期',data: $root.datepicker\"></y-datepicker>\n        </y-formitem>\n        <y-formitem params=\"label:'时间'\">\n          <y-datetimepicker params=\"placeholder:'请选择时间',data: $root.datepicker\"></y-datetimepicker>\n        </y-formitem>\n        <y-formitem params=\"label:'带图标input'\">\n          <y-input params=\"type:'text', iconClass:'fa fa-search'\"></y-input>\n        </y-formitem>\n        <y-formitem params=\"label:'开关'\">\n          <y-switch params=\"dataList:[{label:'男', value:'1'},{label:'女', value:'2'}]\"></y-switch>\n        </y-formitem>\n      </div>\n      <div class=\"col-md-4\">\n        <y-formitem params=\"label:'多选'\">\n          <y-checkbox params=\"dataList:[{label:'一级', value:'1'},{label:'二级', value:'2'},{label:'三级', value:'3'}]\"></y-checkbox>\n        </y-formitem>\n        <y-formitem params=\"label:'单选'\">\n          <y-radio params=\"dataList:[{label:'男', value:'1'},{label:'女', value:'2'}]\"></y-radio>\n        </y-formitem>\n        <y-formitem params=\"label:'级联'\">\n          <y-cascader params='data: $root.cascaderData,selectedValue: $root.cascaderValue, clearable: true'>\n          </y-cascader>\n        </y-formitem>\n      </div>\n      <div class=\"col-md-12\">\n        <y-formitem params=\"label:''\">\n          <y-button params=\"type:'primary'\">&nbsp;&nbsp;提交&nbsp;&nbsp;</y-button>\n          <y-button params=\"\">&nbsp;&nbsp;取消&nbsp;&nbsp;</y-button>\n        </y-formitem>\n      </div>\n    </y-form>\n    </div>\n  </y-boxcontent>\n</y-box>\n"}});
//# sourceMappingURL=5.libs.js.map