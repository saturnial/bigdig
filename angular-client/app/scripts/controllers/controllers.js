'use strict';

/* Controllers */

angular.module('bigdig.controllers', ['angularFileUpload'])

  .controller('AddProjectCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
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
          $location.path("/add-photo/" + data.id);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });
    };
  }])

  .controller('AddLocationCtrl', ['$scope', '$http', '$location', '$routeParams', 'GoogleMaps', function($scope, $http, $location, $routeParams, GoogleMaps) {
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

  .controller('ViewProjectsCtrl', ['$scope', 'ProjectData', function($scope, ProjectData) {
      ProjectData.getProjects(function(data) {
        $scope.projects = data;
      });
  }])

  .controller('ProjectDetailsCtrl', ['$scope', '$routeParams', 'ProjectData', 'GoogleMaps', function($scope,
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
  }])

  .controller('uploadFileCtrl', ['$scope', '$routeParams', '$upload', function($scope, $routeParams, $upload) {
    $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: '/api/photos/', //upload.php script, node.js route, or servlet url
        method: POST, // POST or PUT,
        // headers: {'headerKey': 'headerValue'}, withCredential: true,
        data: {myObj: $scope.myModelObj},
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
        console.log(data);
      });
      //.error(...)
      //.then(success, error, progress); 
    }
  };
}]);
