// // let changeColor = document.getElementById('changeColor');
// let changeColor = document.getElementById('changeColor');
// // let changeColor = document.getElementsByTagName('input');
// console.log(changeColor);
let execute = document.getElementById('execute');

// chrome.storage.sync.get('color', function(data) {
// // changeColor.style.backgroundColor = data.color;
// // changeColor.setAttribute('value', data.color);
// // changeColor.setAttribute('value', '#3aa757');
// });

//  changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };

//  // changeColor.onclick = function(element) {
//  //    let color = element.target.value;
//  //    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//  //      chrome.tabs.executeScript(
//  //          tabs[0].id,
//  //          // console.log("suhhhhh"),
//  //          f = $x('//*[@id="input_firstName"]'),
//  //    //       f.change(function () {
//  //  		// 	f.val("wqerghvjbkn");
// 	// 	  // }),

//  //          // {code: 'document.body.style.backgroundColor = "' + color + '";'});
//  //          //{code: 'document.body.style.bb-textfield__wrapper. = "' + color + '";'});

//  //    });
//  //  };

// window.onload = function(){



 execute.onclick = function(element) {
    // let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
      	{file: 'myscript.js'}
      	// tabs[0].id,
      	// {code:'var myUsername = \'Katherine\''},
      	// {code:'var loginField = document.getElementById(\'input_firstName\')'});
    )});
  };

// }





