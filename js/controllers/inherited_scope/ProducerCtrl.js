App.controller("InheritedScope.ProducerCtrl", [
  "$scope",
  function($scope) {

    $scope.producerPerson = $scope.parentPerson;

  }
]);
