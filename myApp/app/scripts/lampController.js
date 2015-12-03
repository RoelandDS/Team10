angular.module("hackthefuture").controller("hueController",['$scope','lampservice', function($scope,lampservice){

	var self = this;

	self.getLampInfo = function(){
		lampservice.getInfoLamp().success(function(data){
			$scope.lamp = data;
			console.log(data);
		});
	}

	self.getLampInfo();


	
}])