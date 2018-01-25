"use strict";

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("starts with ten pins to aim at", function() {
    expect(game.showPins()).toEqual(10);
  });

  it("can throw a roll", function() {
    game.roll(2);
    expect(game.showPins()).toEqual(8);
  });

  it("can throw two rolls", function() {
    game.roll(2);
    game.roll(4);
    expect(game.showPins()).toEqual(4);
  });

  it("can store a score from the roll", function() {
    game.roll(6);
    expect(game.getScore()).toEqual([6]);
  });

});
