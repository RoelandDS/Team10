angular.module('hackthefuture').factory('registreerFactory', ['$http', function($http) {
	var r = {};

	r.registreer  = function(team, lid1, lid2) {
		return $http.put('https://hackthefuture.herokuapp.com/dashboard/team', { "name": team,"members": [{"name": lid1},{"name": lid2}] });
	};
	
	return r;

	}])