document.addEventListener('DOMContentLoaded', function () {
	// 在页面加载时检查本地存储中是否有验证成功的状态
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
  xhr.open("POST", "http://154.29.138.42:7689/Password", true); // 将此处的地址更改为你的服务器地址
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Password verification successful, enable extension features
          //document.getElementById("message").textContent = "Password verified. Extension enabled.";
		  
		  // 将验证成功的状态保存到本地存储中
          localStorage.setItem('isVerified', 'true');
		   showActionButton(); // 显示按钮
        } else {
          // Password verification failed, display error message
          document.getElementById("message").textContent = "Invalid password.";

     	  hideActionButton(); // 隐藏按钮

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
  document.getElementById("passwordInput").style.display = "none";//隐藏密码，提示
  		  document.getElementById("submitButton").style.display = "none";//隐藏密码，提示
		  document.getElementById("message").style.display = "none";//隐藏密码，提示
		  document.getElementById("enableButton").style.display = "block"; // 显示按钮
}

function hideActionButton() {
  	      document.getElementById("enableButton").style.display = "none"; // 隐藏按钮
}