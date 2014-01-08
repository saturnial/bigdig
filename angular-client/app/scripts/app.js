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
      .when('/view-projects', {
        templateUrl: '/views/view_projects.html',
        controller: 'ViewProjectsCtrl'
      })
      .when('/add-project', {
        templateUrl: '/views/add_project.html',
        controller: 'AddProjectCtrl'
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
        controller: 'ProjectDetailsCtrl'
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
  .run(function run($http, $cookies, $rootScope) {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '1430066343890925',
        status:true,
        cookie:true,
        xfbml:true,
      });

      FB.Event.subscribe('auth.statusChange', function(response) {
        $rootScope.$broadcast('fb_statusChange', {'status': response.status});
      });
    }; 

    (function(d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      ref.parentNode.insertBefore(js, ref);
     }(document));
      
// For CSRF token compatibility with the Django server $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
  });
