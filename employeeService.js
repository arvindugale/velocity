/**
 * Employee Service
 */
(function(moduleName) {
  var app = angular.module(moduleName);

  app.service('employeeService', function($http) {
    var employee;
    //Get All employees
    this.getEmployees = function() {
      return $http.get('employee.json');
    };
    //Store the employee
    this.setEmployee = function(employee) {
      this.employee = employee;
    }
    //Get the stored employee
    this.getEmployee = function() {
      return this.employee;
    }
  });
})(window.moduleName);