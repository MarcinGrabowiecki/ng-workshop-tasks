App.factory("booksCollections", [
    function() {

        var books = [
            {title: "Ksi¹¿ka Telefoniczna"},
            {title: "Kajko & Kokosz"},
            {title: "Winnetou"}
        ];


        books.create = function(title) {
            books.push({title: title});
        };

        books.update = function(book, title) {
            book.title = title;
        };

        books.remove = function(book) {
            var index = books.indexOf(book);
            if (index > -1) {
                books.splice(index, 1);
            }
        };

        return books;




    }
]);
