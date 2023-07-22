Use eventListeners it provides more flexibility as you can add multiple event listeners for the same event or remove them later if needed. It also promotes better separation of concerns by keeping your JavaScript code separate from your HTML.

As for the aria-expanded, that’s not needed for theme toggles. That’s more for nav buttons or anything that “opens” content.
For the toggle, I would instead use two radios along with labels; benefit is that you can always add more themes in the future.
Unknown-DEV — Today at 12:27 AM
(Finally got a chance to look at your code)

For your theme colors you want to do the following (colors are just examples)
[data-theme="light"] {
--primary-color: #4287f5;
--secondary-color: #f59b42;
--background-color: #ffffff;
/_ Light theme styles _/
}

[data-theme="dark"] {
--primary-color: #f54292;
--secondary-color: #42f588;
--background-color: #212121;
/_ Dark theme styles _/
}

Instead of apply the theme to each individual item… Apply the chosen theme by setting the 'data-theme' attribute on the root element.

So something like
document.documentElement.setAttribute('data-theme', 'dark');
