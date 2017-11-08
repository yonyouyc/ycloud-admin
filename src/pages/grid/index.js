import ko from 'knockout'
import template from './index.html'
import './memo'
function init () {
  let viewmodel = {
    b: ko.observable('i am ucloud-ko-fileupload'),
    id: ko.observable('随意绑定一个id'),
    columns: [
      {
        title: '标题1',
        field: 'title',
        width: '70%'
      }, {
        title: '备注',
        field: 'memo',
        width: '30%',
        type: 'component',
        compFn: function (row) {
          return {
            name: 'y-memocomp',
            params: {
              value: row.memo
            }
          }
        }
      }
    ],
    rows: ko.observableArray([
      {
        title: '列表',
        memo: ko.observable('xxxxxxxadf')
      },
      {
        title: 1,
        memo: ko.observable('北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海')
      }
    ])
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
