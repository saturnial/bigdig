'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('AddProjectCtrl', ['$scope', function($scope) {

  	$scope.projects = [
  		{title: 'Bike lane', description: 'Widen bike lane'}
  	];

  	$scope.addProject = function() {
  		// $http.post('/project', project).success(
  		if (!$scope.title || !$scope.description) {
  			return;
  		}
		$scope.projects.push({title: $scope.title, description: $scope.description});
  		// );
  		$scope.title = '';
  		$scope.description = '';
  	};
  }])

  .controller('ViewProjectsCtrl', ['$scope', function($scope) {

    $http.get('/projects').success();

  }]);
