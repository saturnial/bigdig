'use strict';

/* Services */

angular.module('bigdig.services', []).
  factory('ProjectData', ['$http', function($http) {
   return {
      getProject: function(id, callback) {
        $http.get('/api/projects/' + id).success(callback);
      },
      getProjects: function(callback) {
        $http.get('/api/projects/').success(callback);
      }
   }
  }]);
