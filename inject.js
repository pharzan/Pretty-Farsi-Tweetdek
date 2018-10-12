// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
    var div = document.createElement('div');
    div.setAttribute("class","watermark");
	div.style.position = 'fixed';
	div.textContent = 'pretty farsi tweetdeck.';
	document.body.appendChild(div);

	console.log('inserted');

})();