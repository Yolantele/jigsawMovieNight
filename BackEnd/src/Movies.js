"use strict";

function Movies() {
 this._list = []
}

Movies.prototype.showList = function () {
  return this._list
};


module.exports = Movies;
