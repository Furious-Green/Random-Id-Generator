// Find the first h1 tag
let h1Tag = document.querySelector('h1');

if (h1Tag) {
    let h1Content = h1Tag.textContent;

    // Send the content back to the extension's background page (if you have one) 
    chrome.runtime.sendMessage({ tag: 'h1', content: h1Content });
} else {
    console.log('No h1 tag found.');
}