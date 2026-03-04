const toggleBtn = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password"); 

toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.classList.toggle("hidden", isHidden);
});