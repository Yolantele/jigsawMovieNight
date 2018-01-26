
describe("Movies", () => {
  var Movies = require('../lib/Movies');
  var movies;
  var movie = {};

  beforeEach(() => {
    movies = new Movies();

  });

  describe("initialise", () => {
    it("has an empty movies list", () => {
      expect(movies.showList()).toEqual([]);
    });
  });
  it('adds a movie to list', () => {
    movies.add(movie);
    expect(movies.list.length).toEqual(1);
  });
  it('finds chosen movie', () => {
    movies.add(movie);
    movies.findMovie(movie);
    expect(movies.currentMovie).toEqual([movie])
  });
});
