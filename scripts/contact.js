let name_field;
let birthday_field;
let color_field;
let message_field;
let checkbox_field;
let contact_form;

// DOM content loaded
document.addEventListener("DOMContentLoaded", (event) => {
	name_field = document.getElementById("name-field");
	birthday_field = document.getElementById("birthday-field");
	color_field = document.getElementById("color-field");
	message_field = document.getElementById("message-field");
	checkbox_field = document.getElementById("checkbox-field");
	contact_form = document.getElementById("contact-form");
    
	// Checkbox click
	checkbox_field.addEventListener("click", (event) => {
	if (event.target.checked) {
    	console.log("Ha ha ha! Your soul is mine.");
	}
	else {
    	console.log("Don't go please");   	 
	}
	});
    
	// Submit form
	contact_form.addEventListener("submit", (event) => {
    	let send = true;
   	 
		// Name check
    	if (name_field.value.length <= 2 || name_field.value.length > 32) {
        	send = false;
        	name_field.style.border = "1px solid red";
    	}
    	else {
        	name_field.style.border = "1px solid green";
    	}
		
		// Birthday check
    	console.log(birthday_field.value);
    	if (birthday_field.value == "" || birthday_field.value.length != 10) {
        	send = false;
        	birthday_field.style.border = "1px solid red";
    	}
    	else {
        	let date = birthday_field.value.split("-");
       	 
        	console.log(date);
       	 
        	let year = parseInt(date[0]);
        	let month = parseInt(date[1]);
        	let day = parseInt(date[2]);
       	 
        	console.log(date[0], date[1], date [2]);
        	console.log(year, month, day);
       	 
        	if (isNaN(year) || isNaN(month) || isNaN(day)) {
            	send = false;
            	birthday_field.style.border = "1px solid red";
        	}
        	else{
        	if (year <= 0 || year > 2025) {
            	send = false;
            	birthday_field.style.border = "1px solid red";
        	}
        	else if (month <= 0 || month > 12) {
            	send = false;
            	birthday_field.style.border = "1px solid red";
        	}
        	else if (day <= 0 || day > 31) {
            	send = false;
            	birthday_field.style.border = "1px solid red";
        	}
        	else {
            	birthday_field.style.border = "1px solid green";
        	}
        	}
    	}
    	
    	// Color check
    	if(color_field.value.length != 7 || color_field.value[0] != "#") {
        	send = false;
        	color_field.style.border = "1px solid red";
    	}
        else {
            	color_field.style.border = "1px solid green";
        }
    	
    	
		// Message check
    	if(message_field.value.length < 5 || message_field.value.length > 255) {
        	send = false;
        	message_field.style.border = "1px solid red";
    	}
    	else {
        	let tmp = message_field.value.replace(/'/g, "\\'");
       	 
        	message_field.value = tmp;

			message_field.style.border = "1px solid green";
    	}
   	 
    	if (!send) {
            	event.preventDefault();
    	}
   	 
	});
    
});


