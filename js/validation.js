// find the form
var registrationForm = document.querySelector('#registration');

// wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// count how many errors there are
	var totalErrors = 0;

	// get references to the input fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");

	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");

	var campusMessage = document.querySelector("#campus-message");
	var campusOptions = document.querySelectorAll("[name=campus]");

	// check the username
	if(usernamePattern.test(usernameInput.value)) {
		// username is valid
		usernameMessage.innerHTML = "";
	} else {
		// username is invalid
		usernameMessage.innerHTML = "Username is invalid.";
		totalErrors++;
	}

	if(namePattern.test(nameInput.value)) {
		nameMessage.innerHTML = "";
	} else {
		nameMessage.innerHTML = "Name is invalid.";
		totalErrors++;
	}

	// loop over all the campus options
	var campusIsSelected = false;

	for(var i=0; i<campusOptions.length; i++) {
		// check if this campus has been selected
		if(campusOptions[i].checked) {
			campusIsSelected = true;
		}
	}

	// if campusIsSelected is still false
	if(campusIsSelected == false) {
		campusMessage.innerHTML = "Please select a campus.";
		totalErrors++;
	} else {
		campusMessage.innerHTML = "";
	}

	// if the total errors are greater than 0
	if(totalErrors > 0) {
		// stop the form from submiting
		event.preventDefault();
	}	

}