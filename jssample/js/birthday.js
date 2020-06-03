document.getElementById("btn-submit").addEventListener("click", function() {
	var birthday = new Date(document.getElementById("birthday").value);
	
	var today = new Date();
	var age = today.getFullYear() - birthday.getFullYear();
	
	if (isNaN(age)) {
		alert("please enter birthday correct format.");
		return false;
	}
	
	if (today < birthday.setFullYear(today.getFullYear())) {
		age--;
	}
	
	document.getElementById("age").textContent = age;
	return true;
});