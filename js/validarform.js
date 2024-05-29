document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    // Obtener los campos de entrada
    var fullnameField = document.querySelector('input[name="fullname"]');
    var emailField = document.querySelector('input[name="email"]');
    var phoneField = document.querySelector('input[name="phone"]');
    var messageField = document.querySelector('textarea[name="message"]');

    // Definir patrones de validación
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phonePattern = /^\+?[0-9]{10,15}$/;

    // Función para validar el nombre completo
    function validateFullname() {
      if (fullnameField.value.trim() === "") {
        document.getElementById("error-fullname").classList.add("active");
        fullnameField.classList.add("error-input");
        return false;
      } else {
        document.getElementById("error-fullname").classList.remove("active");
        fullnameField.classList.remove("error-input");
        return true;
      }
    }

    // Función para validar el correo electrónico
    function validateEmail() {
      if (!emailPattern.test(emailField.value)) {
        document.getElementById("error-email").classList.add("active");
        emailField.classList.add("error-input");
        return false;
      } else {
        document.getElementById("error-email").classList.remove("active");
        emailField.classList.remove("error-input");
        return true;
      }
    }

    // Función para validar el teléfono
    function validatePhone() {
      if (!phonePattern.test(phoneField.value)) {
        document.getElementById("error-phone").classList.add("active");
        phoneField.classList.add("error-input");
        return false;
      } else {
        document.getElementById("error-phone").classList.remove("active");
        phoneField.classList.remove("error-input");
        return true;
      }
    }

    // Función para validar el mensaje
    function validateMessage() {
      if (messageField.value.trim() === "") {
        document.getElementById("error-message").classList.add("active");
        messageField.classList.add("error-input");
        return false;
      } else {
        document.getElementById("error-message").classList.remove("active");
        messageField.classList.remove("error-input");
        return true;
      }
    }

    // Validar en tiempo real cuando se ingresa texto en los campos
    fullnameField.addEventListener("input", validateFullname);
    emailField.addEventListener("input", validateEmail);
    phoneField.addEventListener("input", validatePhone);
    messageField.addEventListener("input", validateMessage);

    // Agregar validación al enviar el formulario
    contactForm.addEventListener("submit", function (event) {
      // Realizar la validación de todos los campos
      var isValid =
        validateFullname() &&
        validateEmail() &&
        validatePhone() &&
        validateMessage();

      // Si todas las validaciones son exitosas, mostrar una alerta de éxito
      if (isValid) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Mensaje enviado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // Si alguna validación falla, evitar el envío del formulario
        event.preventDefault();
      }
    });
  } else {
    console.error("Formulario no encontrado");
  }
});
