"use strict";

describe("Movies", function() {

  var Movies;
  var movies;

  beforeEach(function() {
    movies = new Movies();
  });

  describe("initialise", function() {
    it("should be an instance of movies", function() {
      expect(movies).toEqual(new Movies);
    });
  });
});
