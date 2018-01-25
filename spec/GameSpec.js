"use strict";

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("starts with ten pins to aim at", function() {
    expect(game.showPins()).toEqual(10)
  });

});
