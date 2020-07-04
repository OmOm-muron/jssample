var id = window.setInterval(function () {
	document.getElementById("timer").innerHTML = new Date().toLocaleString();
}, 1000);

window.setTimeout(function() {
	clearInterval(id);
}, 10000);
