import ko from 'knockout'
import template from './index.html'
import './summaryRow'
import './xxprice'
function init () {
  let viewmodel = {
    rows: ko.observableArray([
      {
        materialName: '硫酸钾',
        num: 2000,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: 200.00,
        acceptance: 205.00,
        amount: 400000.00,
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: ''
      }, {
        materialName: '硫酸钾',
        num: 200,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: 220.00,
        acceptance: 215.00,
        amount: 400000.00,
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: '报价企业请确保资质，要求现金付款，不拖欠，要具备远距离运输的能力，不接受第三方物流！报价须知'
      }, {
        materialName: '硫酸钾k2O3',
        num: 1000,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: '',
        acceptance: '',
        amount: '',
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: '报价企业请确保资质，要求现金付款，不拖欠，要具备远距离运输的能力，不接受第三方物流！报价须知'
      }
    ]),
    columns: ko.observableArray([
      {
        width: '20%',
        title: '品牌产地/材质',
        field: 'product',
        _show: true,
        summaryType: 'comp',
        summaryFn: (row) => {
          return {
            name: 'summary-row',
            params: {
              row: row
            }
          }
        },
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              placeholder: '产品/品牌/材质',
              value: row.product
            }
          }
        }
      }, {
        width: '10%',
        title: '税率',
        field: 'taxrate',
        align: 'right',
        _show: true,
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              placeholder: '税率',
              value: row.taxrate,
              align: 'right'
            }
          }
        }
      }, {
        width: '15%',
        title: '无税单价(元)',
        align: 'right',
        field: 'price',
        _show: true,
        type: 'component',
        compFn: (row) => {
          return {
            name: 'xx-price',
            params: {
              row: row
            }
          }
        }
      }, {
        width: '15%',
        title: '金额',
        align: 'right',
        field: 'amount',
        _show: true,
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.amount,
              align: 'right'
            }
          }
        }
      }, {
        width: '15%',
        title: '交货期',
        field: 'reqDate',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-datepicker',
            params: {
              palceholder: '交货期',
              data: row.reqDate
            }
          }
        },
        _show: true
      }, {
        width: '15%',
        title: '保质期（月）',
        field: 'holdDate',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              placeholder: '保质期（月）',
              data: row.holdDate
            }
          }
        },
        _show: true
      }, {
        width: '20%',
        title: '备注',
        field: 'remark',
        _show: true,
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              placeholder: '备注',
              value: row.remark
            }
          }
        }

      }
    ])
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
