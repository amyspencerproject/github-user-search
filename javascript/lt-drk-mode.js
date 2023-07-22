// Elements that make the mode toggle in the header
const darkOption = document.getElementById("dark-mode-option");
const lightOption = document.getElementById("light-mode-option");
const button = document.getElementById("mode-button");

// All the elements that need styles added for dark-mode
const body = document.querySelector("body");
const header = document.querySelector("header");
const companyName = document.querySelector("h1");
const searchContainer = document.querySelector("search-container");
const searchInput = document.querySelector("search");

// used this function in html as "onclick" attribute
modeSwitch = () => {
  body.classList.toggle("drk-body-background");
  header.classList.toggle("drk-body-background");
  companyName.classList.toggle("drk-mode-on");
  //   Three above work because selector is on an element

  //  Using an ID works. I think I will need an aria=true/false toggle here??
  darkOption.classList.toggle("hide");
  lightOption.classList.toggle("hide");

  // These two do not work because selector is on a class and you are trying to toggle a class
  searchContainer.classList.add("drk-body-background");
  searchInput.classList.toggle("drk-mode-on");
};
