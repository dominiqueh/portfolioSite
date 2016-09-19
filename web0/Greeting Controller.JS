angular.module('domApp',[]).controller('GreetingController', function($scope){
  $scope.now = new Date()
  $scope.helloMessages = ['Welcome to my site, ', 'Bienvenue a mon site, ', 'Wilkommen ', 'Watashi no ho-mupe-ji e youkoso,', 'Bienvenido a mi pagina']
  $scope.greeting = $scope.helloMessages[0]
  $scope.getRandomHelloMessage = function () {
    $scope.greetin = $scope.helloMessages[parseInt((Math.random() * scope.helloMessages.length))]
  }
})
