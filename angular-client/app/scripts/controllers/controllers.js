'use strict';

/* Controllers */

angular.module('bigdig.controllers', ['angularFileUpload'])

  .controller('ProjectCtrl', ['$scope', '$location', 'project',
              function($scope, $location, project) {
    $scope.project = project;
    if (project.id) {
      $scope.save = function() {
        $scope.project.$update(function(project) {
          $location.path('/view/' + project.id);
        });
      };
    } else {
      $scope.save = function() {
        $scope.project.$save(function(project) {
          $location.path('/add-photo/' + project.id);
        });
      };
    }
  }])

  .controller('ViewProjectsCtrl', ['$scope', 'projects', function($scope, projects) {
      $scope.projects = projects;
  }])

  .controller('ProjectDetailsCtrl', ['$scope', '$location', 'GoogleMaps',
              'project',function($scope, $location, GoogleMaps, project) {
      $scope.project = project;
      $scope.project.hasLocation = project.latitude && project.longitude;

      $scope.remove = function() {
        $scope.project.$remove(function() {
          $location.path('/view-projects');
        });
      };

      $scope.edit = function() {
        $location.path('/edit-project/' + project.id);
      };

      if (project.latitude && project.latitude) {
        var latitude = project.latitude;
        var longitude = project.longitude;
        var mapOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 18
        }
        GoogleMaps.initializeMap(document.getElementById("project-map"), mapOptions);
        GoogleMaps.addMarker(latitude, longitude);
        var locationPromise = GoogleMaps.reverseGeoCode(latitude, longitude);
        locationPromise.then(function(locationResults) {
          $scope.project.location = locationResults[3].formatted_address;
        });
      }
  }])

  .controller('AddLocationCtrl', ['$scope', '$http', '$location', '$routeParams',
              'GoogleMaps', function($scope, $http, $location, $routeParams, GoogleMaps) {
    var mapOptions = {
          center: new google.maps.LatLng(37.7833, -122.4167),
          zoom: 12};
    GoogleMaps.initializeMap(document.getElementById("map-canvas"),
          mapOptions);
    $scope.addLocation = function() {
      var address = document.getElementById("location").value;
      var promise = GoogleMaps.geoCodeAddress(address); 
      promise.then(function(geoCodeResults) {
      var coordinates = {latitude: geoCodeResults.latitude,
                         longitude: geoCodeResults.longitude}
      $http({
          url: '/api/projects/' + $routeParams.projectId,
          method: "PUT",
          data: coordinates,
          headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
          $location.path("/view/" + data.id);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });
    });
    };
  }])

  .controller('AddPhotoCtrl', ['$scope', '$routeParams', '$upload', '$location', function($scope, $routeParams, $upload, $location) {
    $scope.uploadRightAway = false;
    $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.progress = [];
      $scope.upload = $upload.upload({
        url: '/api/photos/', //upload.php script, node.js route, or servlet url
        method: 'POST', // POST or PUT,
        // headers: {'headerKey': 'headerValue'}, withCredential: true,
        data: {'project': '/api/projects/' + $routeParams.projectId + '/', 'image': file},
        file: file,
        // file: $files, //upload multiple files, this feature only works in HTML5 FromData browsers
        /* set file formData name for 'Content-Desposition' header. Default: 'file' */
        //fileFormDataName: myFile,
        /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
        //formDataAppender: function(formData, key, val){} 
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        $location.path('/add-location/' + $routeParams.projectId + '/');
      })
      .error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
          console.log('FAILURE!');
          console.log(data);
      });
      //.then(success, error, progress); 
    }
  };
}]);
