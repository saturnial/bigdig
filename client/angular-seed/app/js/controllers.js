'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.testVariable = 'hello there';

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

  .controller('MyCtrl2', ['$scope', function($scope) {
	$scope.testVariable2 = 'hello there'; 

  }]);