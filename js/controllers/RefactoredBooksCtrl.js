App.controller("RefactoredBooksCtrl", [
  "$scope",
  "booksCollection",
  function($scope, booksCollection) {
    $scope.books = booksCollection;

    $scope.create = function(title) {
      $scope.books.create(title);
    };

    $scope.update = function(book, title) {
      $scope.books.update(book, title);
    };

    $scope.remove = function(book) {
      $scope.books.remove(book);
    };
  }
]);
