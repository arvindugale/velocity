(function() {
  /**
   * Put Module name globally so that it can be used across files
   * We are running it in plnkr so it is being used via global scope
   * Ideal Approach - Declare the module and export it via require.js
   * or any module bundler.
   */
  window.moduleName = 'velocityExercise';
  /**
   * Configuration of Base Tag according to 
   * Plnkr URL being opened.
   */
  var configureBaseTag = function() {
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
  };
  /**
   * Configure Routes
   */ 
  var config = function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/employee/:employee', {
    templateUrl: 'employeeDetail.html',
    controller: 'EmployeeDetailController'
  })
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}
  /**
   * Initialize the application
   */
  var initialize = function() {
    configureBaseTag();
    /**
     * Declaration of Main Module
     */
    angular.module(moduleName, ['ngRoute']).config(config);
  }
  initialize();
})();