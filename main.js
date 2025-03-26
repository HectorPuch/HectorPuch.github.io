let counter = 1; 
let maxAttempts = 10; // Número máximo de intentos
	
let random_number = Math.floor(Math.random()*100)+1;
	
function compare_number ()
	{
		let button_input = document.getElementById("field-button");
		button_input.value = "Guess! ("+counter+")";
		
		let my_num_input = document.getElementById("field-number");
		let my_num = my_num_input.value;
		
		let result = document.getElementById("number-result");
		
		my_num_input.classList.remove("input-error"); // Eliminamos la clase input-error al comenzar cada vez
		
		if (isNaN(my_num) || my_num == "") {
			my_num_input.classList.add("input-error"); // Añade borde rojo si es incorrecto
			console.log("Error 1: Your number it's empty or is not a number.");
			return;
		}
		else if (my_num < 1 || my_num > 100) {
			my_num_input.classList.add("input-error"); // Añade borde rojo si está fuera del rango
			console.log("Error 2: Your number is smaller than 1 or bigger than 100.");
			return;
		}
		else {
			counter++;
			
			// Si el contador es mayor que el número máximo de intentos
			if (counter > maxAttempts) {
				button_input.disabled = true; // Desactivamos el botón
				console.log("Error 3: You've reached the maximum number of attempts."); // Envíamos a la consola
				my_num_input.classList.remove("input-error"); // Quitamos la clase input-error 
				result.innerHTML = "<strong class='error'>Game over! You've reached the maximum number of attempts.</strong>"; // Mostramos el mensaje de que se han terminado los intentos
				return;
			}
			
			if (my_num > random_number) {
				result.innerHTML = "<em class=\"error\">The number to be guessed is <strong>less</strong> than "+my_num+".</em>";
				my_num_input.classList.add("input-error"); // Añadimos la clase input-error 
				//my_num_input.style.border = "#ff0000";
			}
			else if (my_num < random_number) {
				result.innerHTML = "<em class=\"error\">The number to be guessed is <strong>greater</strong> than "+my_num+".</em>";
				my_num_input.classList.add("input-error"); // Añadimos la clase input-error
				//my_num_input.style.border = "#ff0000";
			}
			else {
				result.innerHTML = "<strong class=\"you-win\">You got it right, it was "+my_num+"!</strong>";
				my_num_input.classList.remove("input-error"); // Quitamos la clase input-error 
				//result.style.color = "#00ff00";
			}
			
			my_num_input.value = "";
			
			my_num_input.focus();
		}
		
	}
