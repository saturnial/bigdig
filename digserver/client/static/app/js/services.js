'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('ProjectData', function() {
  	return [{title: 'Bike lane', description: 'Widen bike lane'}];
  });
