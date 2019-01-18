const colors = require('colors/safe');
var Speaker = require('audio-speaker/stream');
var Generator = require('audio-generator/stream'); 
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('world')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

console.log(colors.random('зачем все это???'));

Generator(function (time) {
    //panned unisson effect
    var τ = Math.PI * 2;
    return [Math.sin(τ * time * 441), Math.sin(τ * time * 439)];
})
.pipe(Speaker({
    //PCM input format defaults, optional.
    channels: 2,
    sampleRate: 44100,
    byteOrder: 'LE',
    bitDepth: 16,
    signed: true,
    float: false,
    interleaved: true,
}));