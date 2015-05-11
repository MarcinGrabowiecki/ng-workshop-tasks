App.controller("BooksCtrl", [
  "$scope",
  function($scope) {
    $scope.books = [
      {title: "Książka Telefoniczna"},
      {title: "Kajko & Kokosz"},
      {title: "Winnetou"}
    ];

    $scope.dupa="xxxxxxxxxx"

    $scope.create = function(title) {
      $scope.books.push({title: title});
    };

    $scope.update = function(book, title) {
      book.title = title;
    };

    $scope.remove = function(book) {
      var index = $scope.books.indexOf(book);
      if (index > -1) {
        $scope.books.splice(index, 1);
      }
    };
  }
]);
