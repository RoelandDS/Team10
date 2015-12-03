angular.module('hackthefuture').factory('lampservice', ['$http', function($http) {
	
	const URL = 'http://10.0.1.3/api/75820762a36da731bb0edaa750bb/lights/11';
	var lamp = {};

	lamp.getInfoLamp  = function() {
		return $http.get(URL);
	};

	lamp.aan  = function() {
		return $http.put(URL + '/state', { "on": true });
	};
	lamp.uit  = function() {
		return $http.put(URL + '/state', { "on": false });
	};

	lamp.color  = function(sat, bri, hue) {
		return $http.put(URL + '/state', { "on": true,"sat": sat, "bri": bri, "hue": hue });
	};
	
	return lamp;

	}])