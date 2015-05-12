App.directive("magicBox", [
  function() {
    var directiveDefinition = {
      restrict: "AE",
      template: "<div class='magic-box'>Magic! Prrrr...</div>"
    };

   return directiveDefinition;
  }
]);
