const czackis = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	czackis[request.url] = request.count
})