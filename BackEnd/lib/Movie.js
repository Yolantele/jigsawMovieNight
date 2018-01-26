'use strict';


class Movie {
  constructor() {
    this.title = '';
    this.poster = '';
    this.overview = '';
  }

  showTitle() {
    return this.title;
  }
  showPoster() {
    return this.poster;
  }
  showOverview() {
    return this.overview;
  }
}

module.exports = Movie;
