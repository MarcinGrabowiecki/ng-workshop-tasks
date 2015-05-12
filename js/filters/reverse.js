App.filter("reverse", [
  function() {
    var reverseFilter = function(text) {
      text = text || "";
      return text.split("").reverse().join("");
    };

    return reverseFilter;
  }
]);


App.filter("reverseSplit", [
  function() {
    var reverseFilter = function(text,joiner) {
      text = text || "";
      return text.split("").reverse().join(joiner);
    };

    return reverseFilter;
  }
]);
