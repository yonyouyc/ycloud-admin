import ko from 'knockout'
import template from './index.html'
function init () {
  let viewmodel = {
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
