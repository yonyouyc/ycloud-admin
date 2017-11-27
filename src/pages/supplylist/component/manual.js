import ko from 'knockout'
import template from './manual.html'
function init (params) {
  this.columns = [
    {
      title: '供应商名称',
      field: 'name',
      width: '26%'
    }, {
      title: '所属行业',
      field: 'industry',
      width: '20%'
    }, {
      title: '所属地区',
      field: 'area',
      width: '16%'
    }, {
      title: '经营模式',
      field: 'types',
      width: '27%'
    }, {
      field: 'id',
      title: '操作',
      type: 'operation',
      operationList: [
        {
          title: '邀请',
          click: function (row) {
            row._selected(true)
            this.invitedSupplyList.push(row)
          }.bind(this),
          visible: function (row) {
            return !row._selected()
          }
        },
        {
          title: '已邀请',
          click: function (row, evt) {
            row._selected(false)
            var index = this.invitedSupplyList.indexOf(row)
            this.invitedSupplyList.splice(index, 1)
          }.bind(this),
          visible: function (row) {
            return row._selected()
          }
        }]
    }
  ]
  this.rows = ko.observableArray()
  this.supplyList = [{
    value: 1,
    label: '已交易供应商'
  }, {
    value: 2,
    label: '自有合格供应商'
  }, {
    value: 3,
    label: '供货目录供应商'
  }, {
    value: 4,
    label: '待准入供应商'
  }, {
    value: 5,
    label: '盘外供应商'
  }]
  this.areaList = [{
    value: 1,
    label: '北京'
  }, {
    value: 2,
    label: '上海'
  }, {
    value: 3,
    label: '天津'
  }]
  // 选中的供应商
  this.invitedSupplyList = params.invitedSupplyList || ko.observableArray()
  // 选中的id
  this.selectedIds = ko.computed(function () {
    return this.invitedSupplyList().map(function (supply) {
      return supply.id
    })
  }.bind(this))
  this.setDataSelected = function (selectedIds, data) {
    data.forEach(function (item) {
      data._selected = (selectedIds.indexOf(data.id) >= 0)
    })
  }
  this.loadData = function (params) {
    let data = [
      {
        id: 1,
        name: '用友网络科技股份有限公司',
        industry: 'IT，软件，硬件，云服务',
        area: '北京',
        types: '服务方式'
      }
    ]
    this.setDataSelected(this.selectedIds(), data)
    this.rows(data)
  }.bind(this)
  this.loadData()
}
ko.components.register('y-manual', {
  viewModel: init,
  template: template
})
