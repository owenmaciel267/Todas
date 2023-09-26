const login = document.querySelector("#loginFrom");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];

  const validUsers = Users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUsers) {
    return alert("Usuario o contraseña incorrecta");
  }
  alert(`Bienvenido ${validUsers.name}`);
  localStorage.setItem("login_success", JSON.stringify(validUsers))
  window.location.href = "./index.html";
});
