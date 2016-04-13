// find the form
var registrationForm = document.querySelector('#registration')

// wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// patterns to use in validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");
	var namePattern = new RegExp("^[a-zA-Z '.-]{1,30}$")

	// get references to the input fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message")

	var nameInput = document.querySelector("#full-name")
	var nameMessage = document.querySelector("#full-name-message")

	// check the username
	if(usernamePattern.test(usernameInput.value)) {
		// username is valid
		usernameMessage.innerHTML = "";
	} else {
		// username is invalid
		usernameMessage.innerHTML = "Username is invalid. Usernames must only contain the characters 0-9 A-Z a-z ; . -  with a length of 3-15 characters.";
	}

	if(namePattern.test(nameInput.value)) {
		nameMessage.innerHTML = "";
	} else {
		nameMessage.innerHTML = "Name is invalid. Names must only contain the characters A-Z a-z ; . -";
	}

	// stop the form from submiting
	event.preventDefault();

}