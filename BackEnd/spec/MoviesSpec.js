
describe("Movies", function() {
  // var Movies;
  var movies;

  beforeEach(function() {
    movies = new Movies();
  });

  describe("initialise", function() {
    it("has an empty movies list", function() {
      expect(movies.showList()).toEqual([]);
    });
  });
});
