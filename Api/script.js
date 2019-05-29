var pokemon = angular.module ("pokemon",[] )
pokemon.controller("pokemon",function($Scope,$rootScope,$http){
  $http({
  	method: "GET",
  	url: "https://pokeapi.co/api/v2/pokemon/35"
  }).then(function callbacksucess(y){
  	console.log(y);
  })
})