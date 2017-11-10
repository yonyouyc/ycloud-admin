import ko from 'knockout'
import template from './index.html'
function init () {
  let viewmodel = {
    selectList: ko.observableArray([
     {value: 1, label: '北京'},
     {value: 2, label: '上海'},
     {value: 3, label: '天津'},
     {value: 4, label: '附件'},
     {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'},
     {value: 6, label: 'Blaskdf'}
    ]),
    multiselect: ko.observableArray(),
    modalVisible: ko.observable(false),
    showModal: function () {
      viewmodel.modalVisible(true)
    },
    loadSelectData: function (params, cb) {
      if (params) {
        setTimeout(() => {
          var remotedata = [{value: '1', label: 'ABCCEFGH'}, {value: '2', label: '我们都是中国人'}]
          var result = remotedata.filter((item) => {
            return item.label.toLowerCase().indexOf(params.toLowerCase()) >= 0
          })
          cb(result)
        }, 300)
      } else {
        let result = [{
          email: '',
          enterpriseId: 30,
          value: 31703,
          moblie: '',
          organizationId: 41,
          organizationName: '北京采购部',
          personCode: 'kbczy',
          label: '开标操作员',
          suporgCode: 'p01',
          suporgName: '1网上商城运营方',
          userId: 889,
          userName: 'newtest'
        }]
        cb(result)
      }
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
