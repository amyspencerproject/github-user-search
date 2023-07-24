const searchButton = document.getElementById("search-button");
const searchString = document.getElementById("search-input");
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");
const userHandle = document.getElementById("user-handle");
const userJoin = document.getElementById("user-join");
const userBio = document.getElementById("user-bio");

// document.getElementById("");
// event listener on submit button
// store search sting into variable
// validate the search string? like not chiocciola, spaces or maybe change case etc
// call API and see if there is a match
// populate fields with user info or return an no match error
//

searchButton.addEventListener("click", (e) => {
  e.preventDefault(); //stop page from refreshing
  const usernameString = searchString.value;
  let stringValid = inputValidator(usernameString);
  console.log(stringValid);

  if (typeof stringValid === "string") {
    getUser(usernameString);
  }
});

//validate the search string
const inputValidator = function (usernameString) {
  const acceptedInput = /[a-zA-Z0-9]/;

  if (!usernameString.match(acceptedInput)) {
    console.log("Invalid input!");
    // userMessage.innerText = "";
  } else {
    console.log("Valid Input ❤️");
    return usernameString;
  }
};

//API call
const getUser = async function (usernameString) {
  const response = await fetch(
    `https://api.github.com/users/${usernameString}`
  );
  const data = await response.json();
  console.log(data);

  const avatar = data.avatar_url;
  const name = data.name;
  const handle = data.login;
  const join = data.created_at;
  const bio = data.bio;
  const repos = data.public_repos;
  const followers = data.followers;
  const following = data.following;
  const location = data.location;
  const website = data.blog;
  const twitter = data.twitter_username;
  const organization = data.company;

  console.log(join);
  const joinObject = new Date(join);
  console.log(joinObject);
  console.log(joinObject.getDate());
  const joinMonth = joinObject.getMonth();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(monthNames[joinMonth]);

  console.log(joinObject.getFullYear());
  // console.log(join.parse());
  // console.log(typeof join);
  // console.log(join.substring(5, 7));

  // const month = join.getMonth();
  // console.log(month);

  // console.log(bio);
  // console.log(repos);
  // console.log(followers);
  // console.log(following);
  // console.log(location);
  // console.log(website);
  // console.log(twitter);
  // console.log(organization);

  userAvatar.src = avatar;
  userName.innerHTML = name;
  userHandle.innerHTML = "@" + handle;
  userJoin.innerHTML = `Joined ${joinObject.getDate()} ${
    monthNames[joinMonth]
  } ${joinObject.getFullYear()}`;
};
