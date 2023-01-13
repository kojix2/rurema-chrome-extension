"use strict";

// On Chrome Install
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "https://rurema.clear-code.com/" });
  }
});

chrome.contextMenus.create({
  id: "quick_rurema_search",
  type: "normal",
  title: "るりまサーチ",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  var base_url = "https://rurema.clear-code.com/";
  var query = "query:" + info.selectionText;
  var url = encodeURI(base_url + query + "/");
  chrome.tabs.create({ url: url }, function (tab) {});
});
