// this is the code which will be injected into a given page...

(function () {
    var styleNode = document.createElement("style");
    styleNode.type = "text/css";
    styleNode.textContent = "@font-face { font-family: irSans; src: url('" +
        chrome.extension.getURL("assets/IRANSansWeb(FaNum).woff") +
        "'); }";
    document.head.appendChild(styleNode);
        var styleNode = document.createElement("style");
        styleNode.type = "text/css";
        styleNode.textContent = "@font-face { font-family: raleway; src: url('" +
            chrome.extension.getURL("assets/Raleway-Regular.ttf") +
            "'); }";
        document.head.appendChild(styleNode);
    // just place a div at top right
    // var div = document.createElement('div');
    // div.style.position = 'fixed';
    // div.style.top = 0;
    // div.style.right = 0;
    // div.textContent = 'Injected!';
    // document.body.appendChild(div);

    // console.log('inserted self... giggity');

var arabic = /[\u0600-\u06FF]/;

var id = setInterval(function () {
    var el = document.querySelectorAll('.column-heading')

    if (el.length > 0) {
        clearInterval(id)
        makeFarsi();
    }

}, 100)

var makeFarsi = function () {
    var el = document.querySelectorAll('.attach-compose-buttons')
    console.log(el[0])
    el[0].addEventListener("click", function () {
        console.log("hi")
    });
    var textArea = document.getElementsByTagName('textarea')[0];


    textArea.addEventListener("input", function (e) {
        var textArea = document.getElementsByTagName('textarea')[0];
        textArea.setAttribute('lang', 'en')
        var tweetContent = textArea.value

        if (arabic.test(tweetContent)) {
            textArea.setAttribute('lang', 'fa')
        }

    })
}


})();