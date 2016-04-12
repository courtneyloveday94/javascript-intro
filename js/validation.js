// find the form

var registrationForm = document.querySelector('#registration')

// wait for the user to submit the form
registrationForm.onsubmit = function() {
	alert('submitted');
}