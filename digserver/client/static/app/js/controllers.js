'use strict';

/* Controllers */

angular.module('bigdig.controllers', [])

  .controller('AddProjectCtrl', ['$scope', '$http', '$location', 'ProjectData', function($scope, $http, $location, ProjectData) {

    $scope.addProject = function() {
      if (!$scope.title || !$scope.description || !$scope.funding_goal) {
        return;
      }

      var newProject = {title: $scope.title,
                        description: $scope.description,
                        funding_goal: $scope.funding_goal}

      $http({
          url: '/api/projects/',
          method: "POST",
          data: newProject,
          headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          $location.path("/");
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });
    };
  }])

  .controller('ViewProjectsCtrl', ['$scope', 'ProjectData', function($scope, ProjectData) {
      ProjectData.getProjects(function(data) {
        $scope.projects = data;
      });
  }]);
