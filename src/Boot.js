var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    // scene: {
    //     create: create,
    // }
};

var game = new Phaser.Game(config);



var create = function() {
    this.start('./Preloader.js');
}










// var Game = {};

// Game.Boot = function(game) {

// };

// Game.Boot.protopype = {
//     init: function() {
//         this.input.maxPointer = 1; //This set tab intensity on mobile, on desctop is cursor

//         this.stage.disableVivibilityChange = true; //This avoid game interuption
//     },

//     create: function() {
//         this.state.start('Preloader');
//     }
// };