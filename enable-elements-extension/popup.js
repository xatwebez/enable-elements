document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('enableButton').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'enable_elements'}, function(response) {
        console.log('Elements enabled!');
      });
    });
  });
});
