angular
  .module("Test", [])
  .controller("test1Controller", [
    "$scope",
    "$http",
    function ($scope, $http) {
      $scope.list = [];

      $scope.handleClick = function () {
        // do something
      };
    },
  ])
  .controller("test2Controller", [
    "$scope",
    function ($scope) {
      $scope.input1 = 0;
      $scope.result1 = "No";

      $scope.input2 = 0;
      $scope.result2 = "No";

      $scope.input3 = "";
      $scope.result3 = "0";

      $scope.submit = function () {
        // do something
      };
    },
  ]);
