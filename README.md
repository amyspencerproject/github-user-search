# GitHub User Search App solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username using the [GitHub User API](https://docs.github.com/en/rest/users?apiVersion=2022-11-28#get-a-user)
- See relevant user information based on their search
- Switch between light and dark themes

The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

const response = await fetch("https://api.github.com/users/octocat");

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### Screenshot

![](./screenshots/light-mode.png) ![](./screenshots/dark-mode.png)
![](./screenshots/user-search.png) ![](./screenshots/user-message.png)

### Links

- Github Repo URL: [Github User Search Repo](https://github.com/amyspencerproject/github-user-search)
- Live Site URL: [Github User Search Page](https://amyspencerproject.github.io/github-user-search/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Flex
- Mobile-first workflow

### What I learned

- Working with Figma design files it is easy to just go with hex codes. I debated wether to stick with the hex or use hsl. For this challenge I went with hsl and hsla. I read an article by Josh Comeau about how hsl is actually more intuitive and how easily you can make changes to a hsl. If you were savvy enough you could just adjust the satuation and get a lighter or darker version with out going thru what I do with hex codes.

- I asssumed that the light to dark mode toggle would be a button with an `event listener`. To my surprise I was able to make a toggle with just a JS function that is called inside of the html with `onclick=""`. This is my first time making a light to dark mode toggle with only JS. Previously I done this with React.

- Using `onclick=` in the HTML did not work! I could only select IDs and elements not classes when using this method. I asked on FEM's Dicord for advice and changed my plan. Using an event listener is better because everything is more flexible. You can add more that one event listener to an html element. You can remove event listeners easily in the future. There is better separation fo concerns by keeping the JS code seperated from the HTML.

- Further advice was to use radio buttons as a toggle for themes. Again this makes it easier to add different themes or more themes in the future. I managed to get this to work but I think there might be a better solution.

- Last bit of advice was to build a themes in css and then apply it to root element as an attribute instead of applying theme to each individual item.

- My validation was not working if there were any letters or numbers along with spaces and special charaters. I needed to extend your regex to specify that letters must start, end, and only contain with letters/numbers. This regex `/^[a-zA-Z0-9]+$/` worked! The caret means the string must start with this. The plus means at least 1 of those characters, and the dollar means it must also be the end of the string

- In-line `<svg>` is something I avoid. This challenge requres that the fill of the `svg` icons change with hover and when data is not available. I had some weird clipping issues when a website url was really long. I tried switching to flex, playing with margins, trying to change object-fit. In the end I added the `overflow="visible"` attribute to the `<svg>` div.

### Continued development

**Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Useful resources

- [Case using for hsl()](https://www.joshwcomeau.com/css/color-formats/#hsl-4) - Article by Josh Comeau about all the different color formats.
- [GitHub User API](https://docs.github.com/en/rest/users?apiVersion=2022-11-28#get-a-user) - Documentation for Github API
- [Toggle for dark mode](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp) - the function you put in the `onclick` attribute comes from whatever script files you have imported into the html file.
- [Dark Mode theme with CSS variables](https://lukelowrey.com/css-variable-theme-switcher/)
- [Event Listener on Radio Buttons](https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/)
- [Date Contructore](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [Date Prototype for Month](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
- [Remove Character from String](https://stackoverflow.com/questions/9932957/how-can-i-remove-a-character-from-a-string-using-javascript) - Used this for removing the @ on the organziation handle.
- [Common `svg` Fails](https://css-tricks.com/6-common-svg-fails-and-how-to-fix-them/)

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
