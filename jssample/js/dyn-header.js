window.addEventListener("scroll", function(e) {
	var px_page_y = 300;
	var header = document.getElementById("site-header");
	if(window.pageYOffset > px_page_y) {
		header.classList.add("smaller");
	} else if(header.classList.contains("smaller")) {
		header.classList.remove("smaller");
	}
});