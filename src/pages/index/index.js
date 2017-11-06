import ko from 'knockout'
import template from './index.html'
function init () {
  let viewmodel = {
    b: ko.observable('i am ucloud-ko-fileupload'),
    id: ko.observable('随意绑定一个id'),
    list: ko.observableArray([
      {
        id: 1,
        title: '2'

      }, {
        id: 2,
        title: '3'
      }
    ])
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
