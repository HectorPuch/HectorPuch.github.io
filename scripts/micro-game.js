const MIN_NUMBER = 1; // Es una constante porque no va a cambiar
const MAX_NUMBER = 100; // Es una constante porque no va a cambiar 

let counter = 1; // Contador
let max_attempts = 10; // Número máximo de intentos
	
let random_number = Math.floor(Math.random()*MAX_NUMBER)+MIN_NUMBER; // Número random generado
	
function compare_number () // Función comparadora de números
	{
		let button_input = document.getElementById("button-field");
		button_input.value = "Guess! ("+counter+")";
		
		let my_num_input = document.getElementById("number-field");
		let my_num = my_num_input.value;
		
		let result = document.getElementById("number-result");
		
		if (isNaN(my_num) || my_num == "") {
			my_num_input.classList.add("input-error"); // Añade borde rojo si es incorrecto
			console.log("Error 1: Your number it's empty or is not a number."); // Envíamos el error a la consola
			return;
		}
		else if (my_num < MIN_NUMBER || my_num > MAX_NUMBER) {
			my_num_input.classList.add("input-error"); // Añade borde rojo si está fuera del rango
			console.log("Error 2: Your number is smaller than 1 or bigger than 100."); // Envíamos el error a la consola
			return;
		}
		else {
			counter++;
			
			// Si el contador es mayor que el número máximo de intentos
			if (counter > max_attempts) {
				button_input.disabled = true; // Desactivamos el botón
				console.log("Error 3: You've reached the maximum number of attempts."); // Envíamos el error a la consola
				my_num_input.classList.remove("input-error"); // Quitamos la clase input-error 
				result.innerHTML = "<em class=\"error\"><strong>Game over!</strong> You've reached the maximum number of attempts."; // Mostramos el mensaje de que se han terminado los intentos
				return;
			}
			
			if (my_num > random_number) {
				result.innerHTML = "<em class=\"error\">The number to be guessed is <strong>less</strong> than "+my_num+".</em>"; // Añadimos la clase error
				my_num_input.classList.add("input-error"); // Añadimos la clase input-error 
				//my_num_input.style.border = "#ff0000"; Otra manera de añadir un borde rojo
			}
			else if (my_num < random_number) {
				result.innerHTML = "<em class=\"error\">The number to be guessed is <strong>greater</strong> than "+my_num+".</em>"; // Añadimos la clase error
				my_num_input.classList.add("input-error"); // Añadimos la clase input-error
				//my_num_input.style.border = "#ff0000"; Otra manera de añadir un borde rojo
			}
			else {
				result.innerHTML = "<strong class=\"success\">You got it right, it was "+my_num+"!</strong>";
				my_num_input.classList.remove("input-error"); // Quitamos la clase input-error
				my_num_input.classList.add("input-success"); // Añadimos la clase input-success
				//result.style.border = "#00ff00"; Otro manera añadir un borde verde
			}
			
			my_num_input.value = "";
			
			my_num_input.focus();
		}
		
	}