element = document.querySelector('div.support');
main = document.querySelector('div#onlineCampusApp.ng-scope');
element.parentElement.removeChild(element);

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
if (msg.support == true) {
  main.appendChild(element);
} else if (msg.support == false) {
  element.parentElement.removeChild(element);
}
});