function empty_field_checker(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let isValid = true; // Variable para verificar si hay errores

    let my_name_input = document.getElementById("name-field");
    let my_email_input = document.getElementById("email-field"); 
    let my_message_input = document.getElementById("message-field");
    let my_checkbox_input = document.getElementById("checkbox-field");

    // Verifica si los campos están vacíos y agrega o quita la clase "input-error"
    if (my_name_input.value.trim() === "") {
        my_name_input.classList.add("input-error");
        console.log("Error: Empty name!");
        isValid = false;
    } else {
        my_name_input.classList.remove("input-error");
    }

    if (my_email_input.value.trim() === "") {
        my_email_input.classList.add("input-error");
        console.log("Error: Empty email!");
        isValid = false;
    } else {
        my_email_input.classList.remove("input-error");
    }

    if (my_message_input.value.trim() === "") {
        my_message_input.classList.add("input-error");
        console.log("Error: Empty message!");
        isValid = false;
    } else {
        my_message_input.classList.remove("input-error");
    }

    if (!my_checkbox_input.checked) {
        console.log("Error: You must accept the terms and conditions!");
        isValid = false;
    }

    // Si no hay errores, enviamos el formulario
    if (isValid) {
        document.querySelector("form").submit();
    }
}

// Asigna la función al botón de enviar cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-field").addEventListener("click", empty_field_checker);
});
