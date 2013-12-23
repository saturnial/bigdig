'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('ProjectData', ['$http', function($http) {
   return {
      getProjects: function(callback) {
        $http.get('/api/projects/').success(callback);
      }
   }
  }]);
