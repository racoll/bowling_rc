"use strict";

function Game() {
  this.INITIAL_PINS = 10
  this.score = [];
}

Game.prototype.showPins = function() {
  return this.INITIAL_PINS;
};

Game.prototype.throw = function(number) {
  this.INITIAL_PINS -= number;
  this.score.push(number)
  return number
};

Game.prototype.goScore = function() {
  return this.score;
};
