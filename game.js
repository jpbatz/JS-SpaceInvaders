(function() {

  var Game = function(canvasID) {

    console.log("hi");
    // var canvas = document.getElementByID(canvasID);
    
    // var screen = canvas.getContext('2d');
    // var gameSize = { 
    //     x: canvas.width, 
    //     y: canvas.height 
    //   };


    // var self = this;
    // var tick = function() {
    //   self.update();
    //   self.draw(screen, gameSize);
    // };

    // tick();

  };

  Game.prototype = {

  //   update: function() {
      // console.log("hi");
  //   },

  //   draw: function() {
      // console.log("hi");
  //   }

  };

  window.onload = function() {    
    new Game("screen");
  };

})();