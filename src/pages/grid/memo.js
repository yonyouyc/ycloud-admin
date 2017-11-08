import ko from 'knockout'
import './memo.css'
import template from './memo.html'
function init (params) {
  this.value = params.value
  this.visible = ko.observable(true)
  this.handleClick = () => {
    this.visible(!this.visible())
  }
}
ko.components.register('y-memocomp', {
  viewModel: init,
  template: template
})
