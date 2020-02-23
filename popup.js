let execute = document.getElementById('execute');

 execute.onclick = function(element) {
    // let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
      	// tabs[0].id,
      	{file: 'myscript.js'}
      	// tabs[0].id,
      	// {code:'var myUsername = \'Katherine\''},
      	// {code:'var loginField = document.getElementById(\'input_firstName\')'});
    )});
  };

// }





