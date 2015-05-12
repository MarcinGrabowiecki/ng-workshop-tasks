App.directive("twitterWidget", [
    function() {
        var directiveDefinition = {
            restrict: "AE",
            templateUrl: 'templates/directives/twitter_widget.html',
            replace: true
        };

        return directiveDefinition;
    }
]);
