// var dhApp = angular.module('dhApp', ['ui.router'])

var dhApp = angular.module('dhApp',[])

dhApp.controller('MainDHController',['$scope','$http',function ($scope,$http) {
	$scope.message = ""
	$scope.sendMessage = function (name, email, message) {
		var payload = {
			subject : name,
			from : email,
			text : message,
		}
		$http.post('/sendMessage', payload).then(function (response) {
			console.log("RESPONSE: ",response.data)
		})
	}
}])



  // ================================================
  // === START OF ANGULAR ROUTING ================
  // ================================================

// dhApp.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: "/",
//       templateUrl: "partials/home.html"
//     })
//     .state('about', {
//       url: "/about",
//       templateUrl: "partials/about.html"
//     })
//     .state('portfolio', {
//       url: "/portfolio",
//       templateUrl: "partials/portfolio.html"
//     })
//     .state('contact', {
//       url: "/contact",
//       templateUrl: "partials/contact.html"
//     })
//     $urlRouterProvider.otherwise('/')
// })
//
