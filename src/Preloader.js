// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,

// physics: {
//     default: 'arcade',
//     arcade: {
//         gravity: { y: 300 },
//         debug: false
//     }
// },

//     scene: {

//         create: create,

//     }
// };


// var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', '../assets/images/background.png');

    this.load.image('ground', '../assets/images//platform.png');
    this.load.image('star', '/assets/images/star.png');
    this.load.image('bomb', '/assets/images/bomb.png');
    this.load.spritesheet('dude', '/assets/images/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
    // this.load.audio('mainGameAudio', ['/assets/audio/bros.mp3']);
    // this.load.audio('bgAudio', ['/assets/audio/Sputnik1.mp3']);
}

// function create() {

//     this.sound.play('bgAudio'); // Play music

// }

// var create = function() {
//     this.start('./Level1.js');
// }












// Gamepad.Preloader = function(game) {
//     this.preloadBar = null;
// }

// Gamepad.Preloader.prototype = {
//     preload: function() {

//         this.preloadBar.anchor.setTo(0.5, 0.5);
//         this.time.advancedTiming = true;
//         this.load.setPreloadSprite(this.preloadBar);

//         //Load all assets
//     },

//     create: function() {
//         this.state.start('Level1');
//     }
// }