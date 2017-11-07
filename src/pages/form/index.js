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
    ]),
    selectList: ko.observableArray([
     {value: 1, label: '北京'},
     {value: 2, label: '上海'},
     {value: 3, label: '天津'},
     {value: 4, label: '附件'},
     {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'},
     {value: 6, label: 'Blaskdf'}]),
    treeData: ko.observable([
      {
        id: 1,
        name: '北京总公司',
        children: [
          {
            id: 2,
            name: '上海分公司',
            children: []
          },
          {
            id: 3,
            name: '福建分公司',
            children: [
              {
                id: 4,
                name: '福州分公司',
                children: []
              },
              {
                id: 5,
                name: '厦门分公司',
                children: []
              }
            ]
          }
        ]
      }
    ]),
    datepicker: ko.observable(),
    cascaderValue: ko.observable({}),
    cascaderData: ko.observableArray([
      {
        id: 1,
        name: '1'
      }, {
        id: 2,
        name: '有下级',
        children: [
          {
            id: 3,
            name: '4'
          }, {
            id: 4,
            name: '有下级',
            children: [
              {
                id: 5,
                name: '4'
              }, {
                id: 6,
                name: '有下级',
                children: [
                  {
                    id: 7,
                    name: '4'
                  }, {
                    name: '有下级'
                  }
                ]
              }
            ]
          }
        ]
      }, {
        id: 8,
        name: '3'
      }
    ])
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}

export default {
  init: init,
  template: template
}
