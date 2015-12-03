angular.module("hackthefuture").controller("hueController",['$scope','lampservice', function($scope,lampservice){

	var self = this;

	self.getLampInfo = function(){
		lampservice.getInfoLamp().success(function(data){
			$scope.lamp = data;
			console.log(data);
		});
	}

	self.getLampInfo();

	$scope.uit = function(){
		lampservice.uit().success(function(data){

		});
	}

	$scope.aan = function(){
		lampservice.aan().success(function(data){

		});
	}

	self.color = function(sat, bri ,hue){
		lampservice.color(sat,bri,hue).success(function(data){

		});
	}

	$scope.rood = function(){
		self.color(254,254,0);
	}

	$scope.groen = function(){
		self.color(254,254,20388);
	}

	$scope.geel = function(){
		self.color(254,254,11286);
	}

	$scope.blauw = function(){
		self.color(254,254,43325);
	}


	
}])