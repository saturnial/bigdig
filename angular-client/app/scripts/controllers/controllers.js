'use strict';

/* Controllers */

angular.module('bigdig.controllers', [])

  .controller('AddProjectCtrl', ['$scope', '$http', '$location', 'ProjectData', 'GoogleMaps', function($scope, $http, $location, ProjectData, GoogleMaps) {
    var mapOptions = {
          center: new google.maps.LatLng(37.7833, -122.4167),
          zoom: 12};
    GoogleMaps.initializeMap(document.getElementById("map-canvas"),
          mapOptions);
    $scope.addProject = function() {
      if (!$scope.title || !$scope.description || !$scope.funding_goal) {
        return;
      }
      var address = document.getElementById("location").value;
      var promise = GoogleMaps.geoCodeAddress(address); 
      promise.then(function(geoCodeResults) {
        var newProject = {title: $scope.title,
                          description: $scope.description,
                          funding_goal: $scope.funding_goal,
                          latitude: geoCodeResults.latitude,
                          longitude: geoCodeResults.longitude}
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
    });
    };
  }])
  .controller('ViewProjectsCtrl', ['$scope', 'ProjectData', function($scope, ProjectData) {
      ProjectData.getProjects(function(data) {
        $scope.projects = data;
      });
  }])
  .controller('ProjectDetailsCtrl', ['$scope', '$routeParams',  'ProjectData', 'GoogleMaps', function($scope,
      $routeParams, ProjectData, GoogleMaps) {
    
      ProjectData.getProject($routeParams.projectId, function(projectData) {
        $scope.project = projectData;
        var latitude = $scope.project.latitude;
        var longitude = $scope.project.longitude;
        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 18};
        GoogleMaps.initializeMap(document.getElementById("project-details-map"),
            mapOptions);
        GoogleMaps.addMarker(latitude, longitude);
        var locationPromise = GoogleMaps.reverseGeoCode(latitude, longitude);
        locationPromise.then(function(locationResults) {
          $scope.project.location = locationResults[3].formatted_address;
        } )
      });
  }]);
