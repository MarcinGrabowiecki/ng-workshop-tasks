// TODO: ButtonCtrl
App.controller("ButtonCtrl", [
    "$scope",
    function($scope) {

        var klop = {
            name: "Bob"
        };

        $scope.klop = klop;
        $scope.visible=true;
        var counter=0;

        $scope.toggle = function() {
            if(counter++%2==0) {
                $scope.visible = false
                $scope.class = "alert"
                $scope.buttonText="bla"
            } else {
                $scope.visible = true
                $scope.class = "xxx"
                $scope.buttonText="bli"

            }

        };


    }
]);