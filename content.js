//content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
var currentURL = window.location.href;
var uriEncode = encodeURIComponent(currentURL);

console.log(currentURL);
console.log(uriEncode);

 chrome.runtime.sendMessage({"message": "open_new_tab", "url": "http://saulify.me/clean?u=" + uriEncode});
 }
  }
);