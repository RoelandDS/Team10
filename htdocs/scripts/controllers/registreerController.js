angular.module("hackthefuture").controller("registreerController",['$scope','registreerFactory', function($scope,registreerFactory){

	var self = this;

	self.register = function(team, lid1, lid2) {
		registreerFactory.registreer(team, lid1, lid2).success(function(data){

		})

		
	}

	$scope.register = function(){
		self.register($scope.team,$scope.lid1,$scope.lid2);
	}




	
}])