/**
 * Employee Detail Controller Component
 */
(function(moduleName) {
  var app = angular.module(moduleName);
  var controller = function($scope, $routeParams, employeeService) {
    $scope.name = 'EmployeeDetailController';
    $scope.params = $routeParams;
    $scope.employee = employeeService.getEmployee();
    $scope.messages = new Array();
    $scope.fullHearts = $scope.employee.rating;
    $scope.emptyHearts = 5 - parseInt($scope.fullHearts);
    $scope.likesNum = $scope.employee.Likes.length;
    $scope.dislikesNum = $scope.employee.Dislikes.length;
    $scope.totalRows = ($scope.likesNum >= $scope.dislikesNum) ? $scope.likesNum : $scope.dislikesNum;
    $scope.getNumber = function(num) {
      return new Array(num);
    }
    $scope.sendMessage = function() {
      var retVal = prompt("Enter your message : ", "");
      if (retVal) {
        $scope.messages.push(retVal);
      }
    }
  }
  app.controller('EmployeeDetailController', controller);
})(window.moduleName);