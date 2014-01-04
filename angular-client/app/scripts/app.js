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
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'ViewProjectsCtrl'
      })
      .when('/view/:projectId', {
        templateUrl: '/views/project_detail.html',
        controller: 'ProjectDetailsCtrl'
      })
      .when('/add-photo/:projectId', {
        templateUrl: '/views/add_photo.html',
        controller: 'AddPhotoCtrl'
      })
      .when('/view-projects', {
        templateUrl: '/views/view_projects.html',
        controller: 'ViewProjectsCtrl'
      })
      .when('/add-project', {
        templateUrl: '/views/add_project.html',
        controller: 'AddProjectCtrl'
      })
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'ViewProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true).hashPrefix('#');
  })
  .run(function run($http, $cookies) {
      // For CSRF token compatibility with the Django server
      $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
  });
