const searchButton = document.getElementById("search-button");
const searchString = document.getElementById("search-input");

// event listener on submit button
// store search sting into variable
// validate the search string? like not chiocciola, spaces or maybe change case etc
// call API and see if there is a match
// populate fields with user info or return an no match error
//

searchButton.addEventListener("click", (e) => {
  e.preventDefault(); //stop page from refreshing
  const string = searchString.value;
  getUser(string);

  let stringValid = inputValidator(string);
  // console.log(stringValid);
  // stringValid is undefined. I was thinking it would be a boolean??

  if (stringValid == true) {
    console.log("TRUTH");
    // getUser(string);
  }
});

//validate the search string
const inputValidator = function (string) {
  const acceptedInput = /[a-zA-Z0-9]/;

  if (!string.match(acceptedInput)) {
    console.log("Invalid input!");
    // userMessage.innerText = "";
  }
};

//API call
const getUser = async function (string) {
  console.log(`${string}`);
  const response = await fetch(`https://api.github.com/users/${string}`);
  // const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log(data);
};
