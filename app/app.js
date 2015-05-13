'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'ddApp',
  'myApp.version',
  'dataModule',
  'lvl.directives.dragdrop',
  'destegabry.timeline'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


var dataModule = angular.module('dataModule',[])
.factory('mainInfo', function($http) {
    return $http.get('helsinki_tourism_poi.json');
});

