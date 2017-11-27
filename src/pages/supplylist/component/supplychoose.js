import ko from 'knockout'
import template from './supplychoose.html'
import './manual'
import './fromcategory'
function init (params) {
  this.curIndex = ko.observable(0)
  this.tabIndex = ko.observable(1)
  this.isShowRefer = params.isShowRefer
  this.materialList = params.materialList || ko.observableArray()
  this.handleFinish = function () {
    this.isShowRefer(false)
  }.bind(this)
  this.items = ko.observableArray([
    {
      title: '手工选择',
      state: 1
    },
    {
      title: '从供货目录选择',
      state: 2
    }
  ])
  // 和items 两项值对应
  this.handleTabChange = function (item) {
    this.tabIndex(item.state)
  }.bind(this)
  this.invitedSupplyList = params.invitedSupplyList || ko.observableArray([])
  this.allSupplyCount = ko.computed(function () {
    return this.invitedSupplyList().length
  }.bind(this))
}
ko.components.register('y-supplychoose', {
  viewModel: init,
  template: template
})
