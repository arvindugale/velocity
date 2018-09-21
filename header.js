/**
 * Header Component
 */
(function(moduleName){
  var app = angular.module(moduleName);
  var controller = function($scope,$location,employeeService){
      $scope.goToHome = function(){
        console.log($location.path())
        if($location.path()!="/"){
          $location.path("/");
          employeeService.setEmployee(null)
        }
      }
  }
  app.component('header', {
    templateUrl: 'header.html',
    controller : controller
  });
})(window.moduleName);