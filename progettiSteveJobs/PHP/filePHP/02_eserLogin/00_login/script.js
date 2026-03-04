const password = document.getElementById("password");
const buttonPassword = document.getElementById("toggle-password");

buttonPassword.onclick = () => {
  const show = password.type === "password";
  password.type = show ? "text" : "password";
  buttonPassword.style.backgroundImage = show
    ? 'url("assets/show.svg")'
    : 'url("assets/hidden.svg")';
};
