chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'enable_elements') {
	  console.log('Elements enabled called!');
    var elements = document.querySelectorAll('input, select, textarea, button, kat-textarea, kat-dropdown, kat-input, kat-button, kat-predictive-input');
    elements.forEach(function(element) {
		console.log(element);
      //element.disabled = false;
	  element.removeAttribute("disabled");
	  //element.setAttribute("disabled", false);

    });
  }
});
