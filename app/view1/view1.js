//noinspection JSLint
'use strict'; // jshint ignore:line


angular.module('myApp.view1', ['ngRoute', 'dataModule', 'lvl.directives.dragdrop', 'ui.bootstrap', 'mc.resizer', 'destegabry.timeline']) // jshint ignore:line

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', ['$scope', '$filter', 'attractions', function(sc, fl, attractions) {
      var newDate;
      var curDate = new Date().getTime();
      sc.items = [];
      for (var i = 0; i < 24; i++) {
        newDate = new Date(curDate + (i*60*60*1000));
        sc.items.push(fl('date')(newDate, "short"));
      }

    sc.dropped = function(dragEl, dropEl) { // function referenced by the drop target
        //this is application logic, for the demo we just want to color the grid squares
        //the directive provides a native dom object, wrap with jqlite
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
    };
        sc.attractions = attractions;

        sc.data = [];
        sc.data.push({
            'start': new Date(2010, 7, 15),
            'end': new Date(2010, 8, 2),  // end is optional
            'content': 'Trajectory A'
            // Optional: a field 'group'
            // Optional: a field 'className'
            // Optional: a field 'editable'
        });

        sc.options = {
            "width":  "100%",
            "height": "auto",
            "style": "box",
            "editable": true
        };

    sc.addAttraction = function(attraction) {
            sc.data.push({
                'start': new Date(2010, 7, 13),
                'end': new Date(2010, 7, 20),  // end is optional
                'content': attraction.name
                // Optional: a field 'group'
                // Optional: a field 'className'
                // Optional: a field 'editable'
            });
        console.log(sc.data);
    }
}])

    .controller('DatepickerCtrl', function ($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
    });



