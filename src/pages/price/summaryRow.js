import ko from 'knockout'
import template from './summaryRow.html'
function init (params) {
  this.row = params.row
}
ko.components.register('summary-row', {
  viewModel: init,
  template: template
})
