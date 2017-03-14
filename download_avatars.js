var request = require('request');

// console.log('Welcome to the GitHub Avatar Downloader!');

//cb is your ASYNCH callback function to handle results of your images in
//each new file?
function getRepoContributors(repoOwner, repoName, cb) {

}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});