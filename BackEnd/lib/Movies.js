"use strict";

class Movies {
  constructor () {
    this._list = []
  }
  showList () {
    return this._list
  }

  add(movie) {
    this._list.push(movie);
  }
}




module.exports = Movies;
