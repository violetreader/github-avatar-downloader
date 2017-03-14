var request = require('request');
var fs = require('fs');
// var args = process.argv;

var GITHUB_USER = 'violetreader';
var GITHUB_TOKEN = 'cf46a8eff5c7535abed2cc1ad13eb39073c4a5b9';

//cb is your ASYNCH callback function to handle results of your images in
//each new file?
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  //typed in curl -I requestURL and couldnt find my added user-agent key-value pair there??
  request({url: requestURL, headers: {'User-Agent': 'request'}}, (error, response, body) => {
    if (error) {
      console.log('WTF, error', error);
      return false;
    }
    if (response && response.statusCode !== 200) {
      console.log('Response was not 200!', response);
      return false;
    }
    // console.log('this is body', body);
    let data = JSON.parse(body);
    // console.log('this is data: ', data);

    //if statement below is making sure data exist
    if (data && data.length) {
      // console.log('i am working');
      var totalRequests = data.length;
      data.forEach(aCallback);
    }
    function aCallback(contributor) {
      console.log(contributor);
      var avatURL = contributor.avatar_url;
      var login = contributor.login;
        //.on is throwing errors
      request.get(avatURL)
      .on('error', function(error) {
        throw err;
      })
      .on('response', function(response){
      // console.log('Downloading image...');
      console.log('Response Status Message: ', response.statusMessage);
      console.log('Response Headers: ', response.headers['content-type'])
      // console.log('Download Complete.');
      })
      .on('end', function(end) {
        totalRequests -= 1;
        console.log('finished downloading ' + totalRequests)
        // if(totalRequests === 0) {
        //   cb(null, 'All images downloaded');
        // }
      })
      .pipe(fs.createWriteStream('./avatars/' + login + '.jpg'));
    }
  })
}

//function (err, result) is the callback function?
//or this param just needs to be a function, it can be any function?
getRepoContributors(process.argv[2], process.argv[3], function(error, result) {
  console.log("Errors:", error);
  console.log("Result:", result);
});

// "jquery", "jquery",









