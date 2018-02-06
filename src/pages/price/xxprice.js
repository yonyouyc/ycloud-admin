import ko from 'knockout'
import template from './xxprice.html'
function init (params) {
  this.row = params.row
}
ko.components.register('xx-price', {
  viewModel: init,
  template: template
})
