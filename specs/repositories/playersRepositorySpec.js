describe("playersRepository", function() {
  var playersRepository, playersJSON;

  beforeEach(function() {
    playersJSON = [
      {id: 1, name: "batman"},
      {id: 2, name: "bob"},
      {id: 3, name: "ed"}
    ];
    playersRepository = $h.$inject("playersRepository");
  });

  describe("getAll()", function() {
    var callback;

    beforeEach(function() {
      $h.$http.whenGET("server/players.json").respond(playersJSON);
      callback = sinon.spy();
      playersRepository.getAll(callback);
      $h.$http.flush();
    });

    xit("should call callback function once", function() {
      callback.should.be.calledOnce;
    });

    xit("should call callback with data", function() {
      callback.should.be.calledWith(playersJSON);
    });
  });

  xdescribe("getById()", function() {
    xit("should TODO", function() {
      //TODO
    });
  });
});
