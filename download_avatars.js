var request = require('request');
//do we need below????
// var fs = require('fs');


var GITHUB_USER = 'violetreader';
var GITHUB_TOKEN = 'cf46a8eff5c7535abed2cc1ad13eb39073c4a5b9';

//cb is your ASYNCH callback function to handle results of your images in
//each new file?
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  // console.log(requestURL);

  request({url: requestURL, headers: {'User-Agent': 'request'}}, (error, response, body) => {
    if (error) {
      console.log('WTF, error', error);
      return false;
    }
    if (response && response.statusCode !== 200) {
      console.log('Response was not 200!', response);
      return false;
    }
    let data = JSON.parse(body);
    // console.log('this is body', body);
    console.log('this is data: ', data);

    //if statement below is making sure data exist
    if (data && data.length) {

      //write cb as a function and it wil b a function
      data.forEach(cb);
    }
    //this is where to write the cb functions bc its in scope where the param
    //was created and also in the scope where its being referenced
  })
}

//function (err, result) is the callback function?
//or this param just needs to be a function, it can be any function?
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});





