// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    // for the current tab, inject the "inject.js" file & execute it
    
alert(JSON.stringify(tab))
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
chrome.browserAction.enable.addListener(function (tab) {
    alert(JSON.stringify(tab))
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});

