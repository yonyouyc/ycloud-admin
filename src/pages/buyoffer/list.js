import ko from 'knockout'
import template from './list.html'
/* global u */
function init () {
  var dt = new u.DataTable({
    meta: {
      id: '',
      name: '',
      projName: '',
      endtime: '',
      material: '',
      createtime: '',
      state: ''
    }
  })
  let vm = {
    id: ko.observable('id'),
    curStateIndex: ko.observable(1),
    totalCount: ko.observable(12),
    stateTabsItems: ko.observableArray([
      {
        title: '未发布',
        state: 1,
        num: 2
      },
      {
        title: '接受报价中',
        state: 2,
        num: 10
      },
      {
        title: '报价已截止',
        state: 3,
        num: 7
      },
      {
        title: '已推荐供应商',
        state: 4,
        num: 1
      },
      {
        title: '已定标',
        state: 5,
        num: 2
      },
      {
        title: '已流标',
        state: 6,
        num: 0
      },
      {
        title: '定标履行',
        state: 7,
        num: 0
      }
    ]),
    stateTabsHandler: function (item) {
      console.log(item)
    },
    rows: dt.rows,
    columns: [
      {
        title: '序号',
        width: 70,
        type: 'index'
      },
      {
        title: '寻源项目',
        width: '15%',
        field: 'projName'
      },
      {
        title: '寻源物料',
        width: '15%',
        field: 'material'
      },
      {
        title: '创建时间',
        width: '15%',
        field: 'createtime',
        dataType: 'date'
      },
      {
        title: '报价截止时间',
        width: '15%',
        field: 'endtime',
        dataType: 'date'
      },
      {
        title: '状态',
        width: '15%',
        field: 'state',
        type: 'render',
        renderFn: function (row) {
          switch (row.getValue('state')) {
            case 1: return '未发布'
            case 2: return '接受报价中'
            case 3: return '已开标'
            case 4: return '报价已截止'
            default: return ''
          }
        }
      },
      {
        field: 'id',
        title: '操作',
        type: 'operation',
        operationList: [
          {
            title: '修改',
            click: function (row) {

            },
            visible: function (row) {
              return row.getValue('state') === 1
            }
          },
          {
            title: '开标',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          },
          {
            title: '调整开启',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          },
          {
            title: '代报价',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          },
          {
            title: '项目看板',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          }
        ]
      }
    ]
  }
  setTimeout(() => {
    dt.setSimpleData([{
      id: '1',
      name: '1',
      projName: '广泛寻源20170212',
      endtime: '2017-12-06',
      material: '应答机',
      createtime: '2017-05-06',
      state: 1
    }, {
      id: '1',
      name: '1',
      projName: '广泛寻源20170213',
      endtime: '2017-12-06',
      material: '应答机',
      createtime: '2017-05-06',
      state: 3
    }, {
      id: '1',
      name: '1',
      projName: '广泛寻源20170214',
      endtime: '2017-12-06',
      material: '广播系统',
      createtime: '2017-05-06',
      state: 2
    }, {
      id: '1',
      name: '1',
      projName: '广泛寻源20170215',
      endtime: '2017-11-06',
      material: '办公用品',
      createtime: '2017-03-16',
      state: 4
    }, {
      id: '1',
      name: '1',
      projName: '广泛寻源20170216',
      endtime: '2017-12-06',
      material: '应答机',
      createtime: '2017-05-06',
      state: 2
    }, {
      id: '1',
      name: '1',
      projName: '广泛寻源20170212',
      endtime: '2017-12-06',
      material: '应答机',
      createtime: '2017-05-06',
      state: 2
    }])
  })
  ko.applyBindings(vm, document.getElementById('app'))
}
export default {
  init: init,
  template: template
}
