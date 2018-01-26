
describe("Movies", () => {
  var Movies = require('../lib/Movies')
  var movies;

  beforeEach(() => {
    movies = new Movies();
  });

  describe("initialise", () => {
    it("has an empty movies list", () => {
      expect(movies.showList()).toEqual([]);
    });
  });
  it('adds a movie to list', () => {
    movie = {}
    movies.add(movie)
    expect(movies._list.length).toEqual(1)
  })
});
