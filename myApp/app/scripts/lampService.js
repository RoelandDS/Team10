angular.module('hackthefuture').factory('lampservice', ['$http', function($http) {
	var lamp = {};

	lamp.getInfoLamp  = function() {
		return $http.get('http://10.0.1.3/api/75820762a36da731bb0edaa750bb/lights/11');
	};

	lamp.aan  = function() {
		return $http.put('http://10.0.1.3/api/75820762a36da731bb0edaa750bb/lights/11/state', { "on": true });
	};
	lamp.uit  = function() {
		return $http.put('http://10.0.1.3/api/75820762a36da731bb0edaa750bb/lights/11/state', { "on": false });
	};
	
	return lamp;

	}])