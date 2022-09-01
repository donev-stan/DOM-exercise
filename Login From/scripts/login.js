import elements from "./domElements.js";

const loginFunc = (e) => {
  e.preventDefault();

  const termsChecked = elements.termsCheckbox().checked;
  const usernameValue = elements.usernameInput().value;
  const passwordValue = elements.passwordInput().value;

  if (usernameValue.trim() === "") {
    return (elements.usernameErrorMsg().style.display = "flex");
  }

  if (passwordValue.trim() === "") {
    return (elements.passwordErrorMsg().style.display = "flex");
  }

  if (termsChecked === false) {
    return (elements.termsErrorMsg().style.display = "flex");
  }

  elements.container().innerHTML = "Login Successful!";
  elements.container().style.padding = "100px";
  elements.container().style.fontSize = "2rem";
};

export default loginFunc;
