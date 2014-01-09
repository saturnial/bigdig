'use strict';

/* Services */

var services = angular.module('bigdig.services', ['ngResource']);

services.factory('Project', ['$resource', function($resource) {
  return $resource('/api/projects/:id', {id: '@id',}, {
    update: { method: 'PUT' }
  });
}]);

services.factory('ProjectLoader', ['Project', '$route', '$q', function(Project, $route, $q) {
  return function() {
    var delay = $q.defer();
    Project.get({id: $route.current.params.projectId}, function(project) {
      delay.resolve(project);
    }, function() {
      delay.reject('Unable to fetch project ' + $route.current.params.projectId);
    });
    return delay.promise;
  };
}]);

services.factory('MultiProjectLoader', ['Project', '$q', function(Project, $q) {
  return function() {
    var delay = $q.defer();
    Project.query(function(projects) {
      delay.resolve(projects);
    }, function() {
      delay.reject('Unable to fetch projects');
    });
    return delay.promise;
  };
}]);
