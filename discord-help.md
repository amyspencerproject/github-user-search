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

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

:root {
--lt-body-background: hsl(227, 100%, 98%);
--lt-background: hsl(0, 0%, 100%);
--lt-shadow: hsla(227, 46%, 50%, 19.86%);
--lt-text-grey: hsl(217, 20%, 51%);
--lt-text-purple-grey: hsl(217, 35%, 45%);
--lt-text-dark: hsl(217, 21%, 21%);
--lt-active-text-dark: hsl(220, 18%, 16%);
--btn-blue: hsl(212, 100%, 50%);
--btn-active-blue: hsl(212, 100%, 69%);
--chiocciola-text-blue: hsl(212, 100%, 50%);
--drk-body-background: hsl(220, 40%, 13%);
--drk-background: hsl(220, 41%, 20%);
--drk-text: hsl(0, 0%, 100%);
--error-text: hsl(0, 92%, 62%);
--drk-active-text-blue: hsl(222, 44%, 70%);
}

https://lukelowrey.com/css-variable-theme-switcher/

:root {
--lt-text-grey: hsl(217, 20%, 51%);
--lt-text-purple-grey: hsl(217, 35%, 45%);
--lt-text-dark: hsl(217, 21%, 21%);
--lt-active-text-dark: hsl(220, 18%, 16%);
--btn-blue: hsl(212, 100%, 50%);
--btn-active-blue: hsl(212, 100%, 69%);
--chiocciola-text-blue: hsl(212, 100%, 50%);
--error-text: hsl(0, 92%, 62%);
--drk-active-text-blue: hsl(222, 44%, 70%);
}
[data-theme="light"] {
--body-background: hsl(227, 100%, 98%);
--background: hsl(0, 0%, 100%);
--shadow: hsla(227, 46%, 50%, 19.86%);
--primary-text: hsl(217, 20%, 51%);
--secondary-text: hsl(217, 21%, 21%);
--tertiary-text: hsl(217, 35%, 45%);

--primary-active-text: hsl(220, 18%, 16%);
}

[data-theme="dark"] {
--body-background: hsl(220, 40%, 13%);
--background: hsl(220, 41%, 20%);
--shadow: hsl(220, 40%, 13%);
--primary-text: hsl(217, 20%, 51%);
--secondary-text: hsl(0, 0%, 100%);
--tertiary-text: hsl(217, 35%, 45%);

--primary-active-text: hsl(212, 100%, 69%);
}
