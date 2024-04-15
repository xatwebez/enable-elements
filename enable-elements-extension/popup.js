document.addEventListener('DOMContentLoaded', function () {
	// ��ҳ�����ʱ��鱾�ش洢���Ƿ�����֤�ɹ���״̬
  var isVerified = localStorage.getItem('isVerified');
  if (isVerified === 'true') {
    showActionButton();
  } else {
    hideActionButton();
  }
	document.getElementById('submitButton').addEventListener('click', verifyPassword);
  document.getElementById('enableButton').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'enable_elements'}, function(response) {
        console.log('Elements enabled!');
      });
    });
  });
});


function verifyPassword() {
  var password = document.getElementById("passwordInput").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://154.29.138.42:7689/Password", true); // ���˴��ĵ�ַ����Ϊ��ķ�������ַ
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Password verification successful, enable extension features
          //document.getElementById("message").textContent = "Password verified. Extension enabled.";
		  
		  // ����֤�ɹ���״̬���浽���ش洢��
          localStorage.setItem('isVerified', 'true');
		   showActionButton(); // ��ʾ��ť
        } else {
          // Password verification failed, display error message
          document.getElementById("message").textContent = "Invalid password.";

     	  hideActionButton(); // ���ذ�ť

        }
      } else {
        // Handle server error
        document.getElementById("message").textContent = "Error: " + xhr.status;
      }
    }
  };
  xhr.send(JSON.stringify({ password: password }));
}


function showActionButton() {
  document.getElementById("passwordInput").style.display = "none";//�������룬��ʾ
  		  document.getElementById("submitButton").style.display = "none";//�������룬��ʾ
		  document.getElementById("message").style.display = "none";//�������룬��ʾ
		  document.getElementById("enableButton").style.display = "block"; // ��ʾ��ť
}

function hideActionButton() {
  	      document.getElementById("enableButton").style.display = "none"; // ���ذ�ť
}