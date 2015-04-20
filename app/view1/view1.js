'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', function(sc, fl) {

      var date = new Date();
      sc.items = [];
      for (var i = 0; i < 24; i++) {
        var newDate = new Date(date.getTime() + (i*60*60*1000));
        sc.items.push(fl('date')(newDate, "short"));
      }

    }]);



