'use strict';


// Declare app level module which depends on filters, and services
angular.module('bigdig', [
  'ngRoute',
  'bigdig.filters',
  'bigdig.services',
  'bigdig.directives',
  'bigdig.controllers',
  'ui.bootstrap',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/static/app/partials/view_projects.html', controller: 'ViewProjectsCtrl'});
  $routeProvider.when('/add-project', {templateUrl: '/static/app/partials/add_project.html', controller: 'AddProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
