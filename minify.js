var fs = require('fs');
var Readable = require('stream').Readable;
var util = require('util');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

var reader = fs.createReadStream(argv['input'], {encoding : 'utf8'});
var writer = fs.createWriteStream(argv['output'], {encoding : 'utf8'});

var Transform = require('stream').Transform;

util.inherits(Minifying, Transform);

function Minifying(data){
  Transform.call(this, {objectMode: true});
}

Minifying.prototype._transform = function(chunk, encoding, done){
  chunk = chunk.replace(/(\s+)/gm,'');
  this.push(chunk);
  done();
};

var shrinker = new Minifying();

reader.pipe(shrinker).pipe(writer);