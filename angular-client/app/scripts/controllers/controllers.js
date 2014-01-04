'use strict';

/* Controllers */

angular.module('bigdig.controllers', [])

  .controller('AddProjectCtrl', ['$scope', '$http', '$location', '$q', 'ProjectData', function($scope, $http, $location, $q, ProjectData) {
    // TODO(jmylen): Move this to a service.
    function codeAddress() {
    var deferred = $q.defer();
    
    setTimeout(function () {
      $scope.$apply(function() {
        var address = document.getElementById("location").value;
        geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
          var latitude = results[0].geometry.location.nb;
          var longitude = results[0].geometry.location.ob;
          var geoCodeResult = {latitude: latitude,
                         longitude: longitude};
          deferred.resolve(geoCodeResult)
        } else {
            deferred.reject("Geocode was not successful for the following reason: " + status);
        }
        });
      });
    }, 1000);
    return deferred.promise;
  }
    $scope.addProject = function() {
      if (!$scope.title || !$scope.description || !$scope.funding_goal) {
        return;
      }
      var promise = codeAddress(); 
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
  .controller('ProjectDetailsCtrl', ['$scope', '$routeParams',  'ProjectData', function($scope,
      $routeParams, ProjectData) {
      ProjectData.getProject($routeParams.projectId, function(projectData) {
        $scope.project = projectData;
      });
  }]);
