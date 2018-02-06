webpackJsonp([1],[,,,,,,,,,,function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={rows:r.default.observableArray([{materialName:"硫酸钾",num:2e3,unit:"吨",reqOrg:"广东那方是你优先公司",spec:"XLLL 1号 #UIO 型号，历史采购档次一致",product:"",taxrate:17,price:200,acceptance:205,amount:4e5,reqDate:r.default.observable(""),holdDate:r.default.observable(""),remark:""},{materialName:"硫酸钾",num:200,unit:"吨",reqOrg:"广东那方是你优先公司",spec:"XLLL 1号 #UIO 型号，历史采购档次一致",product:"",taxrate:17,price:220,acceptance:215,amount:4e5,reqDate:r.default.observable(""),holdDate:r.default.observable(""),remark:"报价企业请确保资质，要求现金付款，不拖欠，要具备远距离运输的能力，不接受第三方物流！报价须知"},{materialName:"硫酸钾k2O3",num:1e3,unit:"吨",reqOrg:"广东那方是你优先公司",spec:"XLLL 1号 #UIO 型号，历史采购档次一致",product:"",taxrate:17,price:"",acceptance:"",amount:"",reqDate:r.default.observable(""),holdDate:r.default.observable(""),remark:"报价企业请确保资质，要求现金付款，不拖欠，要具备远距离运输的能力，不接受第三方物流！报价须知"}]),columns:r.default.observableArray([{width:"20%",title:"品牌产地/材质",field:"product",_show:!0,summaryType:"comp",summaryFn:function(e){return{name:"summary-row",params:{row:e}}},type:"component",compFn:function(e){return{name:"y-input",params:{placeholder:"产品/品牌/材质",value:e.product}}}},{width:"10%",title:"税率",field:"taxrate",align:"right",_show:!0,type:"component",compFn:function(e){return{name:"y-input",params:{placeholder:"税率",value:e.taxrate,align:"right"}}}},{width:"15%",title:"无税单价(元)",align:"right",field:"price",_show:!0,type:"component",compFn:function(e){return{name:"xx-price",params:{row:e}}}},{width:"15%",title:"金额",align:"right",field:"amount",_show:!0,type:"component",compFn:function(e){return{name:"y-input",params:{value:e.amount,align:"right"}}}},{width:"15%",title:"交货期",field:"reqDate",type:"component",compFn:function(e){return{name:"y-datepicker",params:{palceholder:"交货期",data:e.reqDate}}},_show:!0},{width:"15%",title:"保质期（月）",field:"holdDate",type:"component",compFn:function(e){return{name:"y-input",params:{placeholder:"保质期（月）",data:e.holdDate}}},_show:!0},{width:"20%",title:"备注",field:"remark",_show:!0,type:"component",compFn:function(e){return{name:"y-input",params:{placeholder:"备注",value:e.remark}}}}])};r.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=_interopRequireDefault(a),i=n(18),o=_interopRequireDefault(i);n(19),n(21),t.default={init:init,template:o.default}},,,,,,,,function(e,t){e.exports='<y-box>\n  <y-breadcrumb params="data:[{text:\'首页\',link:\'#/\'},\n  {text:\'报价单\',link:\'#buyofferlist\'},\n  {text:\'报价详细\'}],"></y-breadcrumb>\n  <y-boxsticky params="title:\'xxx询价\'">\n    <div class="pull-right">\n      <y-button params="type:\'primary\'">保存</y-button>\n      <y-button params="type:\'blank\'">返回</y-button>\n    </div>\n  </y-boxsticky>\n  <y-boxcontent params="title:\'询价方\'">\n    <h4>云采采购商</h4>\n    <y-form params="labelWidth: \'100px\'">\n      <y-formitem params="label:\'联系人\'">\n        李采购\n      </y-formitem>\n      <y-formitem params="label:\'联系电话\'">\n        18618477108\n      </y-formitem>\n    </y-form>\n  </y-boxcontent>\n  <y-boxcontent params="title:\'要求\'">\n\n    <y-form params="labelWidth: \'100px\'">\n      <div class="row">\n        <div class="col-md-4">\n        <y-formitem params="label:\'报价人\'">\n          CPT采购\n        </y-formitem>\n        </div>\n        <div class="col-md-4">\n        <y-formitem params="label:\'联系电话\'">\n          13911026336\n        </y-formitem>\n      </div>\n      </div>\n      <div class="row">\n        <div class="col-md-4">\n        <y-formitem params="label:\'收货地址\'">\n          北京北京北京市朝阳区\n        </y-formitem>\n        </div>\n        <div class="col-md-4">\n        <y-formitem params="label:\'交货条件\'">\n          无\n        </y-formitem>\n        </div>\n    </div>\n    <div class="row">\n      <div class="col-md-4">\n        <y-formitem params="label:\'付款方式\'">\n          现金\n        </y-formitem>\n      </div>\n      <div class="col-md-4">\n      <y-formitem params="label:\'询价类型\'">\n        框架协议\n      </y-formitem>\n      </div>\n    </div>\n    </y-form>\n    <h5><b>报价数据:</b></h5>\n    <y-editgrid id="editgrid" params="rows: $root.rows,columns: $root.columns">\n    </y-editgrid>\n  </y-boxcontent>\n</y-box>\n<style>\n  .y-form-item.y-form-validate{\n    margin-bottom: 5px;\n  }\n  #editgrid .y-grid table td{\n    vertical-align: top;\n    padding-top: 4px;\n  }\n</style>\n'},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.row=e.row}var a=n(0),r=_interopRequireDefault(a),i=n(20),o=_interopRequireDefault(i);r.default.components.register("summary-row",{viewModel:init,template:o.default})},function(e,t){e.exports='<div class="y-relative">\n  <div>\n    <span style="font-weight: bold" data-bind="text: row.materialName"></span>\n    <span style="margin-left:200px">数量：</span><span style="color:red" data-bind="text: row.num + row.unit"></span>\n    <span style="margin-left:50px">需求组织：<span data-bind="text:row.reqOrg"></span>\n    </span>\n  </div>\n  <div>\n    规格：<span data-bind="text:row.spec"></span>\n  </div>\n  <div>\n    备注：<span data-bind="text:row.remark"> </span>\n  </div>\n  <div class="row-refuse" style="position: absolute;right: 20px;top: 27%;">\n    <y-button params="">拒绝</y-button>\n  </div>\n</div>\n<style>\n  .row-refuse{\n    display: none;\n  }\n  .y-relative:hover .row-refuse{\n    display: inline-block;\n  }\n</style>\n'},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.row=e.row}var a=n(0),r=_interopRequireDefault(a),i=n(22),o=_interopRequireDefault(i);r.default.components.register("xx-price",{viewModel:init,template:o.default})},function(e,t){e.exports="<div>\n  <y-input params=\"placeholder:'现金',value: row.price,align:'right'\"></y-input>\n  <y-input style=\"margin:4px 0;display: inline-block\" params=\"placeholder:'承兑',value: row.acceptance,align:'right'\"></y-input>\n</div>\n"}]);
//# sourceMappingURL=1.libs.js.map