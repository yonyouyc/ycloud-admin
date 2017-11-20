import ko from 'knockout'
import template from './index.html'
import './memo'
/* eslint-disable */
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
    lockheadcols: [{
      title: '寻源项目',
      field: 'filed1'
    }, {
      title: '寻源物料',
      field: 'filed2'
    }, {
      title: '创建方式',
      field: 'filed3'
    }, {
      title: '状态',
      field: 'filed4'
    }],
    lockheadrows: ko.observableArray([
      {filed1: '广泛寻源A001', filed2: '共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A002', filed2: '摩拜', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A003', filed2:'滴滴', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A004', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A005', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A006', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A007', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A008', filed2:'共享单车', filed3:'原材料', filed4: '修改'},
      {filed1: '广泛寻源A009', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A010', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A011', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'},
      {filed1: '广泛寻源A012', filed2:'共享单车', filed3:'原材料', filed4: '待发布'}
    ]),
    selectList: ko.observableArray([
      {value: 1, label: '北京'},
      {value: 2, label: '上海'},
      {value: 3, label: '天津'},
      {value: 4, label: '附件'},
      {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'},
      {value: 6, label: 'Blaskdf'}
    ]),
    rows: ko.observableArray([
      {
        title: '列表',
        memo: ko.observable('xxxxxxxadf')
      },
      {
        title: 1,
        memo: ko.observable('北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海')
      }
    ]),
    rowspancol: ko.observableArray([
      {
        title: '第一列',
        width: '100',
        field: 'field1',
        type: 'render',
        renderFn: function (row) {
          let template = `<div>${row.field1}</div>
          <span>第一列是由多列组成</span>
        `
          return template
        }
      }, {
        title: '第二列',
        width: '100',
        field: 'field2'
      }, {
        title: '第三列',
        width: '400',
        field: 'field3'
      }, {
        title: '第四列折行的列名',
        width: '100',
        field: 'field4',
        align: 'right'
      }, {
        title: '第五列',
        width: '300',
        field: 'field5'
      }, {
        title: '第六列',
        width: '300',
        field: 'field6'
      }
    ]),
    rowspanrows: ko.observableArray([
      {
        field1: 'A',
        field2: 'A',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'A',
        field2: 'A',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F1'
      }, {
        field1: 'A',
        field2: 'C',
        field3: 'D',
        field4: 'D',
        field5: 'E',
        field6: 'F2'
      }, {
        field1: 'A',
        field2: 'C',
        field3: 'E',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }
    ]),
    columnsEdit: ko.observableArray([
      {
        title: '',
        field: '',
        type: 'checkbox',
        hidden: false,
        width: 50
      }, {
        title: 'y-input',
        hidden: false,
        align: 'left',
        width: '20%',
        type: 'component',
        compFn: function (row) {
          return {
            name: 'y-input',
            params: {
              type: 'text',
              value: row.name,
              disabled: row._disabled
            }
          }
        }
      },
      {
        title: 'component',
        hidden: false,
        width: '20%',
        type: 'component',
        compFn: function (row) {
          return {
            name: 'y-select',
            params: {
              placeholder: '多选下拉',
              dataList: viewmodel.selectList,
              clearable: true,
              label: row.name,
              id: row.id
            }
          }
        }
      }, {
        field: 'id',
        title: 'operationList',
        type: 'operation',
        operationList: [
          {
            title: '保存',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          }, {
            title: '编辑',
            click: function (row, evt) {
              row._disabled(false)
              return false
            },
            visible: function (row) {
              return row._disabled()
            }
          }
        ]
      }
    ]),
    rowsEdit: ko.observableArray([
      {id: ko.observable(1), name: ko.observable('张三')},
      {id: ko.observable(2), name: ko.observable('张李四')},
      {id: ko.observable(3), name: ko.observable('张李')}
    ])
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
/* eslint-disable */
export default {
  init: init,
  template: template
}
