//noinspection JSLint
'use strict'; // jshint ignore:line


angular.module('myApp.view1',
['ngRoute',
'dataModule',
'lvl.directives.dragdrop',
'ui.bootstrap',
'mc.resizer',
'destegabry.timeline']) // jshint ignore:line

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', ['$scope', '$filter', 'mainInfo', function(sc, fl, mainInfo) {
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

        sc.attractions = [];

        mainInfo.success(function(data) {
            data.rss.channel.item.forEach(function(entry) {
                sc.attractions.push(
                    {
                        'name': entry.title,
                        'description': entry.description,
                        'address': entry.address.__text,
                        'link': entry.link,
                        'reserved': false,
                        'type': entry.type1.__text
                    }
                )
            });
        });

        sc.data = [];

        sc.options = {
            "width":  "100%",
            "height": "auto",
            "style": "box",
            "editable": true
        };

        sc.setAttractionVisible = function(timelineobject) {
            timelineobject.attraction.reserved = false;
        };

        sc.addAttractionToTimeline = function(attraction) {

            var start = setStart();
            var end = setEnd(start);
            attraction.reserved = true;
            sc.data.push({
                'start': start,
                'end': end,  // end is optional
                'content': attraction.name,
                'group': '',
                'attraction': attraction
                // Optional: a field 'className'
                // Optional: a field 'editable'
            });

            function setStart() {
                var start = new Date();
                if (sc.data.length > 0) {
                    start = sc.data.length > 0 ? getLastEndtime() : new Date();
                }
                return start;
            }

            function setEnd(start) {
                var end = new Date();
                end.setHours(end.getHours() + 1);
                if (sc.data.length > 0) {
                    end = new Date(start.getTime());
                    end.setHours(start.getHours() + 1);
                }
                return end;
            }

            //we just need the last ending time for our purposes
            function getLastEndtime() {
                var sorted = sc.data.sort(function (a, b) {
                    var dateToCompareB = b.end ? b.end : b.start;
                    var dateToCompareA = a.end ? a.end : a.start;
                    return dateToCompareA > dateToCompareB ? 1 : dateToCompareA < dateToCompareB ? -1 : 0;
                });

                var endsLast = sorted[sorted.length - 1];
                return endsLast.end ? new Date(endsLast.end.getTime()) : new Date(endsLast.start.getTime());
            }
        }

}]);



