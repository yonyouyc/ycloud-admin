import ko from 'knockout'
import template from './fromcategory.html'
function init (params) {
  // 选中的供应商
  this.invitedSupplyList = params.invitedSupplyList || ko.observableArray()
  this.supplyLevelList = ko.observableArray()
  this.supplyLevel = ko.observable({})
  this.levelList = ko.observableArray()
  this.levels = ko.observableArray()
  this.isShowSearch = ko.observable(true)
  this.registerMoney = ko.observable()
  this.levelDisabled = ko.observable(true)
  this.targetOrgVisible = ko.observable(false)
  this.targetOrg = ko.observable(1)
  this.supplyRows = ko.observableArray()
  this.supplyCols = [
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
      width: '12%'
    }, {
      title: '资质',
      field: 'types',
      width: '13%'
    }
  ]
  this.materialList = params.materialList || ko.observableArray()
  this.handleSearch = function () {
    this.isShowSearch(false)
  }.bind(this)
  this.handleEditCondition = function () {
    this.isShowSearch(true)
  }.bind(this)
  this.searchCols = [
    {
      title: '物料名称',
      field: 'productName',
      width: 120
    }, {
      title: '采购数量',
      field: 'purchaseamount',
      width: 120
    }, {
      title: '需求说明',
      field: 'productDesc',
      width: 120
    }, {
      title: '资质要求',
      field: 'productName',
      width: 120
    }
  ]
  this.targetOrg.subscribe(function (val) {
    if (val === 1) {
      this.targetOrgVisible(false)
    } else {
      this.targetOrgVisible(true)
    }
  }.bind(this))
  // 选中的id
  this.selectedIds = ko.computed(function () {
    return this.invitedSupplyList().map(function (supply) {
      return supply.id
    })
  }.bind(this))
  this.serviceArea = [{
    value: 1,
    label: '能购服务需求组织的供应商'
  }, {
    value: 2,
    label: '指定组织'
  }]
  // 供应商等级体系选择
  this.supplyLevelChange = function (val) {
    this.loadLevelList(val)
  }.bind(this)
  // 获取供应商等级体系列表
  this.loadSupplyLevelList = function () {
    this.supplyLevelList.push({
      value: '1',
      label: '等级体系1'
    })
    this.supplyLevelList.push({
      value: '2',
      label: '等级体系2'
    })
  }.bind(this)
  // 获取等级列表（根据等级体系选项）
  this.loadLevelList = function (val) {
    if (val) {
      this.levelDisabled(false)
    } else {
      this.levelDisabled(true)
    }
    this.levelList.push({
      value: '1',
      label: '等级1'
    })
    this.levelList.push({
      value: '2',
      label: '等级2'
    })
  }.bind(this)
  this.loadSupplyLevelList()
}
ko.components.register('y-fromcategory', {
  viewModel: init,
  template: template
})
