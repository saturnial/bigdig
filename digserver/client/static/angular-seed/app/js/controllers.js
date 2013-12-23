'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('AddProjectCtrl', ['$scope', '$location', 'ProjectData', function($scope, $location, ProjectData) {

    $scope.projects = ProjectData;

  	$scope.addProject = function() {
  		// $http.post('/project', project).success(
  		if (!$scope.title || !$scope.description) {
  			return;
  		}
		$scope.projects.push({title: $scope.title, description: $scope.description});
  		// );
  		$scope.title = '';
  		$scope.description = '';
      $location.path("/");
  	};    
  }])

  .controller('ViewProjectsCtrl', ['$scope', 'ProjectData', function($scope, ProjectData) {

    // $http.get('/projects').success();
    $scope.projects = ProjectData;

  }]);