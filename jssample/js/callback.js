function exec(callbackFunc) {
	callbackFunc();
}

var myCallback = function () {
	document.getElementById("message").textContent = "Complete Callback.";
}

exec(myCallback);
