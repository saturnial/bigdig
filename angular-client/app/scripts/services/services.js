'use strict';

/* Services */

angular.module('bigdig.services', []).
  factory('ProjectData', ['$http', function($http) {
   return {
      getProjects: function(callback) {
        $http.get('/api/projects/').success(callback);
      }
   }
  }]);
