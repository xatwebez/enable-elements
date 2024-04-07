chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'enable_elements') {
    var elements = document.querySelectorAll('input, select, textarea, button');
    elements.forEach(function(element) {
      element.disabled = false;
    });
  }
});
