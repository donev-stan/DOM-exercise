import elements from "./domElements.js";
import loginFunc from "./login.js";

elements.loginBtn().addEventListener("click", loginFunc);

elements.usernameInput().addEventListener("input", () => {
  elements.usernameErrorMsg().style.display = "none";
});

elements.passwordInput().addEventListener("input", () => {
  elements.passwordErrorMsg().style.display = "none";
});

elements.termsCheckbox().addEventListener("change", () => {
  elements.termsErrorMsg().style.display = "none";
});
