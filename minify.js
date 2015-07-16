var fs = require('fs');
var Readable = require('stream').Readable;
var util = require('util');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));
//read the command line for the input

console.log('the input', argv['input']);
console.log('the input', argv['output']);


//read input file


// function getReadableStreamSomehow(){
//   fs.readFile(THE INPUT FROM THE COMMAND LINE, function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     return data;
//   });

// }


// var readable = getReadableStreamSomehow();
// readable.on('data', function(chunk) {
//   console.log('got %d bytes of data', chunk.length);
// });





//minify it
//remove all the spaces


//