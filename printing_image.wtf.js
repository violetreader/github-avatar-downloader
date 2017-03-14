var aURL = 'https://www.youtube.com/watch?v=i9a01TQrXlE';
var fs = require('fs');
var path = './thisIsATest.html';
var request = require('request');


//an event happens when you the stream finds data ? so shouldn't a variable
//holding data like a link or string/number be considered an event if its
//being used as a readable stream

//what makes a stream a stream
function downloadImageByUrl(url, filepath) {
  var stream = request(url);
  stream.pipe(fs.createWriteStream(filepath));
}


downloadImageByUrl(aURL, path);