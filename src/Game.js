"use strict";

function Game() {
  this.INITIAL_PINS = 10
}

Game.prototype.showPins = function() {
  return this.INITIAL_PINS;
};

Game.prototype.roll = function(number) {
  this.INITIAL_PINS -= number;
}
