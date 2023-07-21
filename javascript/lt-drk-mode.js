const button = document.getElementById("mode-button");

// All the elements that need styles added for dark-mode
const body = document.querySelector("body");
const header = document.querySelector("header");
const headerCompanyName = document.querySelector("lt-header");

modeSwitch = () => {
  body.classList.toggle("drk-body-background");
  header.classList.toggle("drk-body-background");
  headerCompanyName.classList.toggle("");
};
