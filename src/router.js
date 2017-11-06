import ko from 'knockout'
import $ from 'jquery'
import buyofferlist from './pages/buyoffer/list'
import index from './pages/index/index'
function initPage (page) {
  ko.cleanNode(document.getElementById('bodycontent'))
  $('#app').html(page.template)
  page.init()
}
var routesList = {
  '/buyofferlist': buyofferlist,
  '/': index
}
var routes = {}
Object.keys(routesList).forEach(item => {
  routes[item] = function () {
    initPage(routesList[item])
  }
})
var route = window.Router(routes)
route.init()
