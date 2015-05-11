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
.value('attractions',
    [{'name': 'Pelimuseo',
            'description': 'T‰‰ll‰ on tietokonepelej‰ sun muuta.',
            'address': 'Kaarikatu 12 A 5',
            'reserved': false},
        {'name': 'Vakoilumuseo',
            'description': 'Vakoilujuttuja t‰‰ll‰. Kallis hinta.',
            'address': 'Satakunnantie 4 A 33100 Tampere',
            'reserved': false},
        {'name': 'Nanda Devi',
            'description': 'Ruokailumesta josta saa Intialaista ruokaa. Monenlaisia palkintoja.',
            'address': 'Anttilankatu 4 B 33100 Tampere',
            'reserved': false},
        {'name': 'Kohteen nimi',
            'description': 'Kohteen kuvaus, hieman historiaa sun muuta juttua',
            'address': 'Kohteen osoite, t‰rke‰ juttu ehk‰ tai sitten ei',
            'reserved': false},
        {'name': 'Kohteen nimi',
            'description': 'Kohteen kuvaus, hieman historiaa sun muuta juttua',
            'address': 'Kohteen osoite, t‰rke‰ juttu ehk‰ tai sitten ei',
            'reserved': false},
        {'name': 'Kohteen nimi',
            'description': 'Kohteen kuvaus, hieman historiaa sun muuta juttua',
            'address': 'Kohteen osoite, t‰rke‰ juttu ehk‰ tai sitten ei',
            'reserved': false},
        {'name': 'Kohteen nimi',
            'description': 'Kohteen kuvaus, hieman historiaa sun muuta juttua',
            'address': 'Kohteen osoite, t‰rke‰ juttu ehk‰ tai sitten ei',
            'reserved': false}]
        );

