import ko from 'knockout'
import './component/supplychoose'
import template from './index.html'
function init () {
  let dt = new window.DataTable({
    meta: {
      id: '',
      supplyName: '',
      belong: '',
      area: '',
      manageMode: '',
      state: '',
      priceArea: ''
    }
  })
  let viewmodel = {
    id: ko.observable(),
    checkboxValue: ko.observableArray(),
    isShowRefer: ko.observable(false),
    priceAreaValue: ko.observable(),
    handleSupplyApplyChange () {
      viewmodel.isShowRefer(true)
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
    columns: [{
      title: '供应商',
      field: 'supplyName',
      width: '20%'
    }, {
      title: '所属行业',
      field: 'belong',
      width: '20%'
    }, {
      title: '所属地区',
      field: 'area',
      width: '15%'
    }, {
      title: '经营模式',
      field: 'manageModel',
      width: '15%'
    }, {
      title: '已分配/采购',
      field: 'state',
      width: '15%'
    }, {
      title: '报价范围',
      field: 'priceArea',
      width: '15%'
    }]
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
  window.vm = viewmodel
}

export default {
  init: init,
  template: template
}
