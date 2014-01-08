'use strict';

/* Services */

angular.module('bigdig.services', []).
  factory('ProjectData', ['$http', function($http) {
   return {
      getProject: function(id, callback) {
        $http.get('/api/projects/' + id).success(callback);
      },
      getProjects: function(callback) {
        $http.get('/api/projects/').success(callback);
      }
   }
  }]).
  factory('GoogleMaps', ['$http', '$q', function($http, $q) {
   var map;
   var geocoder;
   var mapService = {};

   mapService.initializeMap = function(element, mapOptions) {
     geocoder = new google.maps.Geocoder();
     map = new google.maps.Map(element,
       mapOptions);
     return map;
   }

   mapService.centerMapTo = function(latitude, longitude) {
     var latLng = new google.maps.LatLng(latitude, longitude);
     map.setCenter(latLng);
   }

   mapService.addMarker = function(latitude, longitude) {
     var latLng = new google.maps.LatLng(latitude, longitude);
     return new google.maps.Marker({
       position: latLng,
       map: map
     }); 
   }

   mapService.geoCodeAddress = function(address) {
    var deferred = $q.defer();
    setTimeout(function () {
      geocoder.geocode( {'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        //map.setCenter(results[0].geometry.location);
        //var marker = new google.maps.Marker({
        //    map: map,
        //    position: results[0].geometry.location
        //});
        var latitude = results[0].geometry.location.nb;
        var longitude = results[0].geometry.location.ob;
        var geoCodeResult = {latitude: latitude,
                       longitude: longitude};
        deferred.resolve(geoCodeResult)
      } else {
        deferred.reject("Geocode was not successful for the following reason: " + status);
      }
      });
    }, 1000);
    return deferred.promise;
  }

   mapService.reverseGeoCode = function(latitude, longitude) {
     var deferred = $q.defer();
     setTimeout(function() {
       var latLng = new google.maps.LatLng(latitude, longitude);
       geocoder.geocode({'latLng': latLng}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           deferred.resolve(results);
         } else {
          deferred.reject("Reverse Geocode was not successful for the following reason: " + status);
         }
       });
     }, 1000)
     return deferred.promise;
   }
  return mapService; 
  }])
  .factory('Facebook', function ($rootScope) {
    return {
        getLoginStatus:function () {
            FB.getLoginStatus(function (response) {
                $rootScope.$broadcast("fb_statusChange", {'status':response.status});
            }, true);
        },
        login:function () {
            FB.getLoginStatus(function (response) {
                switch (response.status) {
                    case 'connected':
                        $rootScope.$broadcast('fb_connected', {facebook_id:response.authResponse.userID});
                        break;
                    case 'not_authorized':
                    case 'unknown':
                        FB.login(function (response) {
                            if (response.authResponse) {
                                $rootScope.$broadcast('fb_connected', {
                                    facebook_id:response.authResponse.userID,
                                    userNotAuthorized:true
                                });
                            } else {
                                $rootScope.$broadcast('fb_login_failed');
                            }
                        }, {scope:'read_stream, publish_stream, email'});
                        break;
                    default:
                        FB.login(function (response) {
                            if (response.authResponse) {
                                $rootScope.$broadcast('fb_connected', {facebook_id:response.authResponse.userID});
                                $rootScope.$broadcast('fb_get_login_status');
                            } else {
                                $rootScope.$broadcast('fb_login_failed');
                            }
                        });
                        break;
                }
            }, true);
        },
        logout:function () {
            FB.logout(function (response) {
                if (response) {
                    $rootScope.$broadcast('fb_logout_succeded');
                } else {
                    $rootScope.$broadcast('fb_logout_failed');
                }
            });
        },
        unsubscribe:function () {
            FB.api("/me/permissions", "DELETE", function (response) {
                $rootScope.$broadcast('fb_get_login_status');
            });
        }
    };
});
