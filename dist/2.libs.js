webpackJsonp([2],{12:function(t,e){t.exports='<y-box>\n  <y-boxfilter params="title:\'寻源管理\'">\n    <div class="pull-right">\n      <y-input class="" params="placeholder:\'请输入标题名称\',iconClass:\'fa fa-search\'">\n      </y-input>\n    </div>\n  </y-boxfilter>\n  <y-boxcontent>\n    <y-state-tabs params="index:$root.curStateIndex,items:$root.stateTabsItems,handler: $root.stateTabsHandler"></y-state-tabs>\n    <y-grid params="minheight:\'484px\',maxheight:\'auto\',isStripe: true,columns:$root.columns,rows: $root.rows,isDataTable:true,pagination:true,totalCount: $root.totalCount">\n      <div data-bind="text:row.ref(\'name\')"></div>\n    </y-grid>\n  </y-boxcontent>\n</y-box>\n'},9:function(t,e,a){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function init(){var t=new u.DataTable({meta:{id:"",name:"",projName:"",endtime:"",material:"",createtime:"",state:""}}),e={id:n.default.observable("id"),curStateIndex:n.default.observable(1),totalCount:n.default.observable(12),stateTabsItems:n.default.observableArray([{title:"未发布",state:1,num:2},{title:"接受报价中",state:2,num:10},{title:"报价已截止",state:3,num:7},{title:"已推荐供应商",state:4,num:1},{title:"已定标",state:5,num:2},{title:"已流标",state:6,num:0},{title:"定标履行",state:7,num:0}]),stateTabsHandler:function(t){console.log(t)},rows:t.rows,columns:[{title:"序号",width:70,type:"index"},{title:"寻源项目",width:"15%",field:"projName"},{title:"寻源物料",width:"15%",field:"material"},{title:"创建时间",width:"15%",field:"createtime",dataType:"date"},{title:"报价截止时间",width:"15%",field:"endtime",dataType:"date"},{title:"状态",width:"15%",field:"state",type:"render",renderFn:function(t){switch(t.getValue("state")){case 1:return"未发布";case 2:return"接受报价中";case 3:return"已开标";case 4:return"报价已截止";default:return""}}},{field:"id",title:"操作",type:"operation",operationList:[{title:"修改",click:function(t){},visible:function(t){return 1===t.getValue("state")}},{title:"开标",click:function(t,e){return t._disabled(!0),!1},visible:function(t){return!t._disabled()}},{title:"调整开启",click:function(t,e){return t._disabled(!0),!1},visible:function(t){return!t._disabled()}},{title:"代报价",click:function(t,e){return t._disabled(!0),!1},visible:function(t){return!t._disabled()}},{title:"项目看板",click:function(t,e){return t._disabled(!0),!1},visible:function(t){return!t._disabled()}}]}]};setTimeout(function(){t.setSimpleData([{id:"1",name:"1",projName:"广泛寻源20170212",endtime:"2017-12-06",material:"应答机",createtime:"2017-05-06",state:1},{id:"1",name:"1",projName:"广泛寻源20170213",endtime:"2017-12-06",material:"应答机",createtime:"2017-05-06",state:3},{id:"1",name:"1",projName:"广泛寻源20170214",endtime:"2017-12-06",material:"广播系统",createtime:"2017-05-06",state:2},{id:"1",name:"1",projName:"广泛寻源20170215",endtime:"2017-11-06",material:"办公用品",createtime:"2017-03-16",state:4},{id:"1",name:"1",projName:"广泛寻源20170216",endtime:"2017-12-06",material:"应答机",createtime:"2017-05-06",state:2},{id:"1",name:"1",projName:"广泛寻源20170212",endtime:"2017-12-06",material:"应答机",createtime:"2017-05-06",state:2}])}),n.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=_interopRequireDefault(i),r=a(12),l=_interopRequireDefault(r);e.default={init:init,template:l.default}}});
//# sourceMappingURL=2.libs.js.map