describe("BooksCtrl", function() {
  var BooksCtrl;

  beforeEach(function() {
    BooksCtrl = $h.$controller("BooksCtrl");
  });

  describe("books", function() {
    it("should initialize books collection", function() {
      $h.$scope.books.length.should.equal(3);
    });
  });

  describe("create()", function() {
    var title;

    beforeEach(function() {
      title = "test title";
      $h.$scope.create(title);
    });

    it("should increase books collection by 1", function() {
      $h.$scope.books.length.should.equal(4);
    });

    it("should push new book to books collection", function() {
      var lastBook = _($h.$scope.books).last();
      lastBook.title.should.equal(title);
    });

    it("shoud reemove one element",function(){
      var lenBefore=$h.$scope.books.length;
      $h.$scope.remove($h.$scope.books[1]);
      var lenAfter=$h.$scope.books.length;
      lenAfter.should.equal(lenBefore-1);
    });



    it("shoud update book",function(){
      $h.$scope.update($h.$scope.books[1],"dupa")
      $h.$scope.books[1].title.should.equal("dupa")
    });


    it("shoud add one book",function(){
      var lenBefore=$h.$scope.books.length;
      $h.$scope.create("dupa");
      var lenAfter=$h.$scope.books.length;
      lenAfter.should.equal(lenBefore+1);
      console.log()
      $h.$scope.books.map(function(b){return b.title}).should.contain("dupa");

    });

  });

});
