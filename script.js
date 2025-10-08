//your JS code here. If required.
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let existing = document.getElementById("existing");

let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if(savedPassword && savedUsername) {
	existing.style.display = "block";
}

form.addEventListener("submit", function(e) {
	e.preventDefault();

	let name = username.value.trim();
	let pass = password.value.trim();

	if(!name || !pass ) {
		return;
	}

	alert(`Logged in as ${name}`);

	if(checkbox.checked) {
		localStorage.setItem("name", name);
		localStorage.setItem("password", pass);
		existing.style.display = "block";
	} else {
		localStorage.removeItem("name");
		localStorage.removeItem("password");
		existing.style.display = "none";
	}
	form.reset();
})

existing.addEventListener("click", function() {
	let storedName = localStorage.getItem("name");
	if (storedName) {
		alert(`Logged in as ${storedName}`);
	}
})