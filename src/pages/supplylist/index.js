import ko from 'knockout'
import './component/supplychoose'
import './component/supplylistoper'
import template from './index.html'
function init () {
  let dt = new window.DataTable({
    meta: {
      id: '',
      name: '',
      industry: '',
      area: '',
      types: '',
      state: '',
      priceArea: ''
    }
  })
  let dtAssign = new window.DataTable({
    meta: {
      id: '',
      materialName: ''
    }
  })
  let viewmodel = {
    id: ko.observable(),
    checkboxValue: ko.observableArray(),
    isShowRefer: ko.observable(false),
    isShowAssigned: ko.observable(false),
    priceAreaValue: ko.observable(2),
    invitedSupplyList: ko.observableArray(),
    MaterialList: ko.observableArray(),
    handleSupplyApplyChange () {
      viewmodel.isShowRefer(true)
    },
    handleInviteSupplier () {
      viewmodel.isShowRefer(true)
    },
    handleAssignArea () {
      viewmodel.isShowAssigned(true)
    },
    priceAreaList: [
      {
        value: 1,
        label: '按供货目录分配'
      }, {
        value: 2,
        label: '手动分配'
      }, {
        value: 3,
        label: '不限定报价范围'
      }
    ],
    rows: dt.rows,
    rowsAssign: dtAssign.rows,
    columnsAssign: [{
      title: '',
      type: 'checkbox',
      width: 60
    }, {
      title: '物料名称',
      width: '20%',
      field: 'productName',
      type: 'render',
      renderFn: function (row) {
        var template = '<div>' + row.productName + '</div>'
        template += '<div class="y-text-assist">' + row.productDesc() + '</div>'
        return template
      }
    }, {
      title: '采购数量',
      width: '10%',
      field: 'purchaseamount',
      type: 'render',
      renderFn: function (row) {
        return row.purchaseamount + row.unit
      }
    }, {
      title: '建议供应商',
      width: '10%',
      field: 'suggestSupplierName'
    }, {
      title: '需求组织/计划员/计划部门',
      width: '20%',
      field: 'reqOrgName'
    }, {
      title: '需求时间',
      width: '10%',
      field: 'reqdate'
    }, {
      title: '备注',
      width: '20%',
      field: 'bmemo'
    }],
    columns: [{
      title: '',
      type: 'checkbox',
      width: 60
    }, {
      title: '供应商',
      field: 'name',
      width: '20%'
    }, {
      title: '所属行业',
      field: 'industry',
      width: '20%'
    }, {
      title: '所属地区',
      field: 'area',
      width: '15%'
    }, {
      title: '经营模式',
      field: 'types',
      width: '15%'
    }, {
      title: '已分配/采购',
      field: 'state',
      width: '15%',
      type: 'component',
      compFn: function (row) {
        return {
          name: 'y-supplylistoper',
          params: {
            row: row
          }
        }
      }
    }, {
      title: '',
      field: 'priceArea',
      width: '15%',
      type: 'operation',
      operationList: [
        {
          title: '取消邀请',
          click: function (row, evt) {
            alert('无法取消')
            return false
          }
        }
      ]
    }]
  }
  // 模拟后端数据
  viewmodel.MaterialList.push({
    productName: 'PROD002901',
    pritemid: '101',
    productDesc: ko.observable('物料描述'),
    purchaseamount: 12,
    unit: '元',
    suggestSupplierName: '建议供应闪',
    id: ko.observable('1'),
    plannerName: '计划员',
    planDeptName: '计划部门',
    reqdate: ko.observable('2014-01-01'),
    bmemo: ko.observable('行备注'),
    reqOrgName: ko.observable('需求组织名称'),
    puorgDocName: ko.observable('采购组织名称'),
    pureqid: ko.observable(1),
    productSpec: ko.observable('商品规格'),
    productType: ko.observable('商品型号'),
    quotaUnit: ko.observable('报价单位'),
    productCode: '物料编码'
  })
  viewmodel.invitedSupplyList.subscribe(function (val) {
    dt.setSimpleData(val)
  })
  viewmodel.priceAreaValue.subscribe(function (val) {
    if (val === 2) {
      window.ycloud.$refs['invitedGrid'].setColVisibleByField('state', true)
    } else {
      window.ycloud.$refs['invitedGrid'].setColVisibleByField('state', false)
    }
  })
  ko.applyBindings(viewmodel, document.getElementById('app'))
  window.vm = viewmodel
}

export default {
  init: init,
  template: template
}
