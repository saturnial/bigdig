'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/view_projects.html', controller: 'ViewProjectsCtrl'});
  $routeProvider.when('/add-project', {templateUrl: 'partials/add_project.html', controller: 'AddProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
