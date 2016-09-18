(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.submit = function(){

  	if($scope.input == undefined || $scope.input == ""){
  		$scope.message = "Please enter data first";
  		$scope.style = {"color":"red", "border":"1px solid red"};
  		return;
  	}

  	var input = $scope.input.replace(/\s/g, '').split(',');

  	var len = input.length;

  	for(var i = 0; i < input.length; i++){
  		if(input[i] == ""){
  			len--;
  		}
  	}

  	if(len > 3){
  		$scope.message = "Too much!";
  		$scope.style = {"color":"green", "border":"1px solid green"};
  	}
  	else if(len < 1){
  		$scope.message = "Please enter data first";
  		$scope.style = {"color":"red", "border":"1px solid red"};
  	}
  	else{
  		$scope.message = "Enjoy!"
  		$scope.style = {"color":"green", "border":"1px solid green"};
  	}
  	console.log(input);
  }

}

})();