/**
 * Employee List Component
 */
(function(moduleName) {
  var app = angular.module(moduleName);
  var controller = function($scope, $location, employeeService, $timeout) {
    var vm = this;
    employeeService.getEmployees().then(function(response) {
      vm.employees = response.data.People.map(function(obj, index) {
        obj.id = index;
        return obj;
      });
      $scope.viewEmployee(vm.employees[0])
    });
    $scope.viewEmployee = function(employee) {
      employeeService.setEmployee(employee);
      $scope.selectedEmployee = employee;
      $location.path('/employee/' + employee.name);
    };
    /**
     * Reset Employee on Location change
     * This will be triggered also on search
     */
    $scope.$on('$locationChangeSuccess', function() {
      if ($location.path() == '/') {
        $timeout(function() {
          $scope.$apply(function() {
            employeeService.setEmployee(null);
            $scope.selectedEmployee = null;
          });
        });
      }
    });
    
  };

  app.component('employeeList', {
    templateUrl: 'employeeList.html',
    controller: controller,
    controllerAs: 'vm',
  });
})(window.moduleName);
