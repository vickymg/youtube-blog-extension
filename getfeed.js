$(document).ready(function(){
  $("#feed").PaRSS("http://feeds.feedburner.com/youtube/PKJx",
  5,
  "M jS g:i a",
  true);

  window.addEventListener('click', function(e) {
    if (e.target.href !== undefined) {
      chrome.tabs.create({ url: e.target.href })
    }
  });
});
