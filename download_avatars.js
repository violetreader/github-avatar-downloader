var request = require('request');

// console.log('Welcome to the GitHub Avatar Downloader!');
var GITHUB_USER = 'violetreader';
var GITHUB_TOKEN = 'cf46a8eff5c7535abed2cc1ad13eb39073c4a5b9';

//cb is your ASYNCH callback function to handle results of your images in
//each new file?
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});