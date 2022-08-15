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
        if ($scope.input1 === null) {
          return false;
        }

        if ($scope.input2 === null) {
          return false;
        }

        if ($scope.input3 === null) {
          return false;
        }

        if ($scope.input1 % 2 !== 0) {
          $scope.result1 = "Yes";
        } 

        if ($scope.input2 > 18) {
           $scope.result2 = "Yes";
        }

        $scope.result3 = $scope.input3.length;

      };
    },
  ]);
