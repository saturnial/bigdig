'use strict';

angular.module('angularClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


// 'use strict';

// // Declare app level module which depends on filters, and services
// angular.module('bigdig', [
//   'ngCookies',
//   'ngResource',
//   'ngSanitize',
//   'ngRoute',
//   'ui'
// ])
//   .config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: '/static/app/partials/view_projects.html',
//         controller: 'ViewProjectsCtrl'
//       });
//     $routeProvider
//       .when('/add-project', {
//         templateUrl: '/static/app/partials/add_project.html',
//         controller: 'AddProjectCtrl'
//       });
//     $routeProvider
//       .otherwise({
//         redirectTo: '/'
//       });
//   }]).
//   run(function run($http, $cookies) {
//       // For CSRF token compatibility with Django
//       $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
//   });
