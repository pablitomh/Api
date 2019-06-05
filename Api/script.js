var pokemon = angular.module("pokemon",[])
pokemon.controller("pokemon",function($rootScope,$scope,$http){
	$scope.pokemon = [];
	for (var i = 0; i <= 100; i++) {
    $http({
	method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	}).then(function callbackSuccess(y){
		$scope.pokemon.push(y);
	})
  }
})