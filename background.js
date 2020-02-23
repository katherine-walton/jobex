  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#ffc0cb'}, function() {
    // chrome.storage.sync.set({color: 'Katherine'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          // pageUrl: {hostEquals: 'https://boards.greenhouse.io/lightstep/*'},
          pageUrl: { hostContains: 'boards.greenhouse.io' }
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });