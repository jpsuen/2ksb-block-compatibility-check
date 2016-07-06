chrome.webRequest.onBeforeRequest.addListener(function() { 
	return {cancel: true}; },
	{urls: ["https://2ksb.onlinebusiness.american.edu/static/compatibility/1.0.5/scripts/capability.combined.min.js"]},
	["blocking"]
);
bool = false;
chrome.browserAction.onClicked.addListener( function(tab) {
  bool = !bool;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {support: bool}, function(response) {});
  });
});

