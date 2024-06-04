document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "templates/index.html"; // Redirige al index
  });