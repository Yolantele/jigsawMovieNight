'use strict';

class Movies {
  constructor() {
    this.list = [];
    this.currentMovie = []
  }

  showList() {
    return this.list;
  }

  add(movie) {
    this.list.push(movie);
  }
  findMovie(chosenMovie) {
    this.list.forEach((movie) => {
      if (movie === chosenMovie) {
        this.currentMovie.push(movie);
      }
    });
    return this.currentMovie
  }
}


module.exports = Movies;
