"use strict";

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("starts with ten pins", function() {
    expect(game.showPins()).toEqual(10);
  });

  it("can throw a roll", function() {
    game.throw(2);
    expect(game.showPins()).toEqual(8);
  });

  it("can throw two throws", function() {
    game.throw(2);
    game.throw(4);
    expect(game.showPins()).toEqual(4);
  });

  it("can store a score from a single roll", function() {
    game.throw(6);
    expect(game.goScore()).toEqual([6]);
  });

  it("can store a score from 2 rolls", function() {
    game.throw(3);
    game.throw(4);
    expect(game.goScore()).toEqual([3,4]);
  });

});
