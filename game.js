;(function() {

  var Game = function(canvasID) {

    var canvas = document.getElementById(canvasID);
    
    var screen = canvas.getContext('2d');
    var gameSize = { 
        x: canvas.width, 
        y: canvas.height 
      };

    this.bodies = [new Player(this, gameSize)];

    var self = this;
    var tick = function() {
      self.update();
      self.draw(screen, gameSize);
      requestAnimationFrame(tick);
    };

    tick();

  };

  Game.prototype = {

    update: function() {
      // console.log("hi");
    },

    draw: function(screen, gameSize) {
      // screen.fillRect(30, 30, 40, 40);
      for(var i=0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i]);
      }
    }

  };

  var Player = function(game, gameSize) {

    this.game = game;
    this.size = {
      x: 15,
      y: 15
    };

    this.center = {
      x: gameSize.x/2,
      y: gameSize.y - this.size.x
    };

  };

  Player.prototype = {
    update: function() {

    }
  };

  var drawRect = function(screen, body) {
    screen.fillRect(
      body.center.x - body.size.x/2,
      body.center.y - body.size.y/2,
      body.size.x,
      body.size.y
    );
  };

  window.onload = function() {    
    new Game("screen");
  };

})();