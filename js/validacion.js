document.getElementById("regBtn").addEventListener("click", function() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre && apellido && email && password1.length >= 6 && password1 === password2 && terminos) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});

function showAlertSuccess() {
    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.classList.add("show");
    setTimeout(() => alertSuccess.classList.remove("show"), 5000); // Ocultar la alerta después de 5 segundos
}

function showAlertError() {
    const alertError = document.getElementById("alert-danger");
    alertError.classList.add("show");
    setTimeout(() => alertError.classList.remove("show"), 5000); // Ocultar la alerta después de 5 segundos
}
