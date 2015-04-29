'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

//noinspection CommaExpressionJS
app.value =('attractions',
{'name': 'Pelimuseo',
    'description': 'T‰‰ll‰ on tietokonepelej‰ sun muuta.',
    'address': 'Kaarikatu 12 A 5'},
{'name': 'Vakoilumuseo',
    'description': 'Vakoilujuttuja t‰‰ll‰. Kallis hinta.',
    'address': 'Satakunnantie 4 A 33100 Tampere'},
{'name': 'Nanda Devi',
    'snippet': 'Ruokailumesta josta saa Intialaista ruokaa. Monenlaisia palkintoja.',
    'address': 'Anttilankatu 4 B 33100 Tampere'}
);
