'use strict';

// Declare app level module which depends on filters, and services
angular.module('bigdig', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'bigdig.controllers',
  'bigdig.services',
  'bigdig.directives',
  'bigdig.geo_service'
])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/view-projects', {
        templateUrl: '/views/view_projects.html',
        controller: 'ViewProjectsCtrl',
        resolve: {
          projects: function(MultiProjectLoader) {
            return MultiProjectLoader();
          }
        }
      })
      .when('/add-project', {
        templateUrl: '/views/add_project.html',
        controller: 'AddProjectCtrl'
      })
      .when('/edit-project/:projectId', {
        templateUrl: '/views/add_project.html',
        controller: 'EditProjectCtrl',
        resolve: {
          project: function(ProjectLoader) {
            return ProjectLoader();
          }
        }
      })
      .when('/add-photo/:projectId', {
        templateUrl: '/views/add_photo.html',
        controller: 'AddPhotoCtrl'
      })
      .when('/add-location/:projectId', {
        templateUrl: '/views/add_location.html',
        controller: 'AddLocationCtrl'
      })
      .when('/view/:projectId', {
        templateUrl: '/views/project_detail.html',
        controller: 'ProjectDetailsCtrl',
        resolve: {
          project: function(ProjectLoader) {
            return ProjectLoader();
          }
        }
      })
      .when('/', {
        templateUrl: '/views/main.html',
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
