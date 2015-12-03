angular.module('hackthefuture').factory('lampservice', ['$http', function($http) {
	var lamp = {};

	lamp.getInfoLamp()  = function() {
		return $http.get('http://10.0.1.3/api/75820762a36da731bb0edaa750bb/lights/11');
	};
}