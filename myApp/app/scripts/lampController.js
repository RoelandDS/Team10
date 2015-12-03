angular.module("hackthefuture").controller("hueController",['$scope','lampService', function($scope,lampService){

	var self = this;

	self.getLampInfo = function(){
		lampService.getInfoLamp().succes(function(date){
			$scope.lamp = data;
		});
	}

	self.getLampinfo();
	
}])