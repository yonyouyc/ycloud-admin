import ko from 'knockout'
import $ from 'jquery'
const buyofferlist = resolve => require(['./pages/buyoffer/list'], resolve)
const index = resolve => require(['./pages/index/index'], resolve)
const form = resolve => require(['./pages/form/index'], resolve)
const grid = resolve => require(['./pages/grid/index'], resolve)
function initPage (page) {
  page(function (item) {
    ko.cleanNode(document.getElementById('bodycontent'))
    $('#app').html(item.default.template)
    item.default.init()
  })
}
var routesList = {
  '/buyofferlist': buyofferlist,
  '/': index,
  '/form': form,
  '/grid': grid
}
var routes = {}
Object.keys(routesList).forEach(item => {
  routes[item] = function () {
    initPage(routesList[item])
  }
})
var route = window.Router(routes)
route.init()
