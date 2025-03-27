function empty_field_checker(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let my_name_input = document.getElementById("name-field");
    let my_email_input = document.getElementById("email-field"); 
    let my_message_input = document.getElementById("message-field");
    let my_checkbox_input = document.getElementById("checkbox-field");

    // Verifica si los campos están vacíos y agrega la clase "input-error" para cambiar el color
    if (my_name_input.value.trim() === "") { // El .trim para evitar que un usuario ingrese solo espacios y pase la validación por error
        my_name_input.classList.add("input-error");
    } 
	else {
        my_name_input.classList.remove("input-error");
    }

    if (my_email_input.value.trim() === "") { // El triple igual compara tanto el valor como el tipo de datos
        my_email_input.classList.add("input-error");
    } 
	else {
        my_email_input.classList.remove("input-error");
    }

    if (my_message_input.value.trim() === "") {
        my_message_input.classList.add("input-error");
    } 
	else {
        my_message_input.classList.remove("input-error");
    }

    if (!my_checkbox_input.checked) { // .checked es una propiedad booleana que devuelve true si el checkbox está marcado
        my_checkbox_input.classList.add("input-error");
    } 
	else {
        my_checkbox_input.classList.remove("input-error");
    }
}

// Asigna la función al botón de enviar cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-field").addEventListener("click", empty_field_checker);
});

