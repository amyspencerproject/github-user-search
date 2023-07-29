const searchForm = document.getElementById("search-form");
const searchString = document.getElementById("search-input");
const userMessage = document.getElementById("user-message");
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");
const userHandle = document.getElementById("user-handle");
const userJoin = document.getElementById("user-join");
const userBio = document.getElementById("user-bio");
const userRepos = document.getElementById("repos");
const userFollowers = document.getElementById("followers");
const userFollowing = document.getElementById("following");
const userLocation = document.getElementById("location");
const locationIcon = document.querySelector(".location-icon");
const userWebsite = document.getElementById("website");
const websiteIcon = document.querySelector(".website-icon");
const userTwitter = document.getElementById("twitter");
const twitterIcon = document.querySelector(".twitter-icon");
const userOrganization = document.getElementById("organization");
const organizationIcon = document.querySelector(".org-icon");

addEventListener("submit", (e) => {
  e.preventDefault(); //stop page from refreshing
  userMessage.innerHTML = "";
  const usernameString = searchString.value;
  let stringValid = inputValidator(usernameString);

  if (typeof stringValid === "string") {
    getUser(usernameString);
  }
});

//validate the search string
const inputValidator = function (usernameString) {
  const acceptedInput = /^[a-zA-Z0-9]+$/;

  if (!usernameString.match(acceptedInput)) {
    console.log("Invalid Input!");
    userMessage.innerHTML = "Only letters and numbers please";
  } else {
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
  if (data.message === "Not Found") {
    userMessage.innerHTML = "No Results";
  } else if (
    data.message ===
    "You have sent an invalid request. Please do not send this request again."
  ) {
    userMessage.innerHTML = "Only letters and numbers please";
  }

  const handle = data.login;
  if (handle === null) {
    userHandle.innerHTML = "Not Available";
  } else {
    userHandle.innerHTML = `@${handle}`;
  }

  const avatar = data.avatar_url;
  userAvatar.src = avatar;

  const name = data.name;
  if (name === null) {
    userName.innerHTML = handle;
  } else {
    userName.innerHTML = name;
  }

  // User joined date
  const join = data.created_at;
  const joinObject = new Date(join);
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

  const date = joinObject.getDate();
  const month = monthNames[joinMonth];
  const year = joinObject.getFullYear();
  userJoin.innerHTML = `Joined ${date} ${month} ${year}`;

  // User bio section
  const bio = data.bio;
  if (bio === null) {
    userBio.innerHTML = "This profile has no bio";
    userBio.style.color = "var(--not-available)";
  } else {
    userBio.innerHTML = bio;
  }

  const repos = data.public_repos;
  userRepos.innerHTML = repos;

  const followers = data.followers;
  userFollowers.innerHTML = followers;

  const following = data.following;
  userFollowing.innerHTML = following;

  const location = data.location;
  if (location === null) {
    userLocation.innerHTML = "Not Available";
    userLocation.style.color = "var(--not-available)";
    locationIcon.style.fill = "var(--not-available)";
  } else {
    userLocation.innerHTML = location;
  }

  const website = data.blog;
  if (website === null) {
    userWebsite.innerHTML = "Not Available";
    userWebsite.style.color = "var(--not-available)";
    websiteIcon.style.fill = "var(--not-available)";
  } else {
    userWebsite.innerHTML = website;
    userWebsite.href = website;
  }

  const twitter = data.twitter_username;
  if (twitter === null) {
    userTwitter.innerHTML = "Not Available";
    userTwitter.style.color = "var(--not-available)";
    twitterIcon.style.fill = "var(--not-available)";
  } else {
    userTwitter.innerHTML = twitter;
    userTwitter.href = twitter;
  }

  const organization = data.company;
  if (organization === null) {
    userOrganization.innerHTML = "Not Available";
    userOrganization.style.color = "var(--not-available)";
    organizationIcon.style.fill = "var(--not-available)";
  } else {
    userOrganization.innerHTML = organization;
    const organizationGithub = organization.replace("@", "https://github.com/");
    userOrganization.href = organizationGithub;
  }
};
