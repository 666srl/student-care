'use strict';

/**
 * @ngdoc overview
 * @name studentSystemApp
 * @description
 * # studentSystemApp
 *
 * Main module of the application.
 */
angular
  .module('studentSystemApp', ['ui.router']).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
  	$stateProvider.state("login",{
  		url:"/login",
  		templateUrl:"views/login.html"
  	})
	
	
	.state("class",{
  		url:"/class",
  		templateUrl:"views/class.html"
  	})
  	
  	.state("evaluate",{
  		url:"/evaluate",
  		templateUrl:"views/evaluate.html"
  	})
  	
  	.state("punishment",{
  		url:"/punishment",
  		templateUrl:"views/punishment.html"
  	})
  	
  	.state("studentdetcils",{
  		url:"/studentdetcils",
  		templateUrl:"views/studentdetcils.html"
  	})
  	
  	.state("studentlist",{
  		url:"/studentlist",
  		templateUrl:"views/studentlist.html"
  	})
  	
	$urlRouterProvider.otherwise("/login");
  }]);;
