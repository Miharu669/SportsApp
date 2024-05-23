document
  .getElementById("login-content")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Comprobamos si las credenciales son correctas
    if (username === "admin" && password === "factoriaf5") {
      // Guardamos las credenciales en localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("loggedIn", true);

      // Redirigimos a la página teams.html
      window.location.href = "../pages/teams.html";
    } else {
      // Credenciales incorrectas, mostramos un mensaje de error
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  });

// Verificar si el usuario ya está autenticado al cargar la página
window.addEventListener("load", function () {
  this.localStorage.removeItem(loggedIn);
  if (localStorage.getItem("loggedIn")) {
    // Redirigimos a la página teams.html si ya está autenticado
    window.location.href = "../pages/teams.html";
  }
});
