'use strict';

/* Controllers */

angular.module('bigdig.controllers', [])

  .controller('AddProjectCtrl', ['$scope', '$http', '$location', 'ProjectData', function($scope, $http, $location, ProjectData) {
    var geoCodeResult; 
    var deferred = $q.defer();

    function codeAddress() {
    var result = 0;
    var address = document.getElementById("location").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        latitude = results[0].geometry.location.nb;
        longitude = results[0].geometry.location.ob;
        geoCodeResult = {latitude: latitude,
                         longitude: longitude};
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
    $scope.addProject = function() {
      if (!$scope.title || !$scope.description || !$scope.funding_goal) {
        return;
      }
      codeAddress(); 
      alert(geoCodeResults);
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
    };
  }])

  .controller('ViewProjectsCtrl', ['$scope', 'ProjectData', function($scope, ProjectData) {
      ProjectData.getProjects(function(data) {
        $scope.projects = data;
      });
  }]);
