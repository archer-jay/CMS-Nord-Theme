const styleLocs = document.createElement('link')
styleLocs.rel = "stylesheet"
styleLocs.type = "text/css"
styleLocs.href = chrome.runtime.getURL('nord-theme-bulk-updater.css');

const style = document.createElement('link')
style.rel = "stylesheet"
style.type = "text/css"
style.href = chrome.runtime.getURL('nordcmstheme.css');

console.log(style.href);
document.body.appendChild(styleLocs);
document.body.appendChild(style);