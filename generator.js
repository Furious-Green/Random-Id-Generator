function getNewsContent() {
    newsContent = ""
    /*
    let pList = document.getElementsByClassName("c-news__body")[0].getElementsByTagName("p")
    let newsContent = ""
    for (let i = 0; i < pList.length; i++) {
        if (pList.item(i).classList.length == 0) {
            console.log(pList.item(i).innerHTML)
            newsContent += pList.item(i).innerHTML
        }
    }
        */
    return newsContent

}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.tag) {
        document.getElementById('tagType').textContent = message.tag;
        document.getElementById('textContent').textContent = message.content;
    }
});

document.getElementById('generate').addEventListener('click', function () {
    document.querySelector('#content').innerHTML = getNewsContent();
});