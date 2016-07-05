chrome.webRequest.onBeforeRequest.addListener(function() { 
	return {cancel: true}; },
	{urls: ["https://2ksb.onlinebusiness.american.edu/static/compatibility/1.0.5/scripts/capability.combined.min.js"]},
	["blocking"]
);