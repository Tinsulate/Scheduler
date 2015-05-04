//noinspection JSLint
'use strict'; // jshint ignore:line

angular
    .module('ddApp', ['lvl.directives.dragdrop', 'ngRoute']) // register the directive with your app module
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'ddController'
        });
    }])
    .controller('ddController', ['$scope' , function($scope){ // function referenced by the drop target
        $scope.dropped = function(dragEl, dropEl) {
            //this is application logic, for the demo we just want to color the grid squares
            //the directive provides a native dom object, wrap with

            var drop = angular.element((document.getElementById(dropEl)));
            var drag = angular.element((document.getElementById(dragEl)));
            //clear the previously applied color, if it exists
            var bgClass = drop.attr('data-color');
            if (bgClass) {
                drop.removeClass(bgClass);
            }

            //add the dragged color
            bgClass = drag.attr("data-color");
            drop.addClass(bgClass);
            drop.attr('data-color', bgClass);

            //if element has been dragged from the grid, clear dragged color
            if (drag.attr("x-lvl-drop-target")) {
                drag.removeClass(bgClass);
            }
        }
    }]);



