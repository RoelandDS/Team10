angular.module('hackthefuture').factory('registreerFactory', ['$http', function($http) {
	const URL = 'https://hackthefuture.herokuapp.com/dashboard/team'
	var r = {};

	r.registreer  = function(team, lid1, lid2) {
		return $http.put(URL, { "name": team,"members": [{"name": lid1},{"name": lid2}] });
	};
	
	return r;

	}])