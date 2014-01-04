'use strict';

// Declare app level module which depends on filters, and services
angular.module('bigdig', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'bigdig.controllers',
  'bigdig.services'
])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true).hashPrefix('#');
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'ViewProjectsCtrl'
      })
       .when('/view/:projectId', {
        templateUrl: '/views/project_detail.html',
        controller: 'ProjectDetailsCtrl'
      })
      .when('/view-projects', {
        templateUrl: '/views/view_projects.html',
        controller: 'ViewProjectsCtrl'
      })
      .when('/add-project', {
        templateUrl: '/views/add_project.html',
        controller: 'AddProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function run($http, $cookies) {
      // For CSRF token compatibility with the Django server
      $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
  });
