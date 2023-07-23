const label = document.querySelector("label");
const darkMode = document.getElementById("dark-label-group");
const lightMode = document.getElementById("light-label-group");

darkMode.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(darkModeInput);
  document.documentElement.setAttribute("data-theme", "dark");
  darkMode.classList.add("hide");
  lightMode.classList.remove("hide");
  // console.log(lightModeInput);
});

lightMode.addEventListener("click", function (e) {
  e.preventDefault();
  document.documentElement.setAttribute("data-theme", "light");
  darkMode.classList.remove("hide");
  lightMode.classList.add("hide");
});

// ===================== trying to use input and input:checked =====================
// +++++ not specific to radio buttons but will catch all imputs
// const input = document.querySelectorAll("input");

// +++++ Must change name="mode" on input div to use this
// const modeInput = document.getElementsByName("mode");

// const darkModeInput = document.getElementsByName("dark-mode");
// const lightModeInput = document.getElementsByName("light-mode");

// ++++ classes on the label div
// const darkModeLabel = document.querySelector("dark-mode-option");
// const lightModeLabel = document.querySelector("light-mode-option");

// label.addEventListener("click", function (e) {
//   if (darkModeInput.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     darkMode.classList.add("hide");
//     lightMode.classList.remove("hide");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     darkMode.classList.remove("hide");
//     lightMode.classList.add("hide");
//   }
// });

// input.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(modeInput);
// });
