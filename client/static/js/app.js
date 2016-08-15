
var myApp = angular.module('myApp', ['ngRoute'])
console.log('in angular config')
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'static/partials/home.html',
		controller: 'HomeController',
		controllerAs: 'HC'
	})
	.otherwise({
		redirectTo: '/'
	})
})
