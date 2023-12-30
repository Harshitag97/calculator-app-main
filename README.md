# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

- This is the Loading screen of the calculator

![Calculator](./Screenshots/Screenshot%202023-12-30%20at%2014-28-53%20Frontend%20Mentor%20Calculator%20app.png)

- Before using Del key

![Before using Del key](./Screenshots/Screenshot%202023-12-30%20at%2014-37-54%20Frontend%20Mentor%20Calculator%20app.png)

- After using Del Key

![After using Del key](./Screenshots/Screenshot%202023-12-30%20at%2014-39-10%20Frontend%20Mentor%20Calculator%20app.png)

- Calculator Operation
  ![Add](./Screenshots/Screenshot%202023-12-30%20at%2014-40-19%20Frontend%20Mentor%20Calculator%20app.png)

  ![Results](./Screenshots/Screenshot%202023-12-30%20at%2014-41-16%20Frontend%20Mentor%20Calculator%20app.png)

  ![Minus](./Screenshots/Screenshot%202023-12-30%20at%2014-42-10%20Frontend%20Mentor%20Calculator%20app.png)

  ![Results](./Screenshots/Screenshot%202023-12-30%20at%2014-43-01%20Frontend%20Mentor%20Calculator%20app.png)

  ![Mul](./Screenshots/Screenshot%202023-12-30%20at%2014-45-18%20Frontend%20Mentor%20Calculator%20app.png)

  ![Result](./Screenshots/Screenshot%202023-12-30%20at%2014-46-24%20Frontend%20Mentor%20Calculator%20app.png)

### Links

- Solution URL: [Github](https://your-solution-url.com)
- Live Site URL: [Netlify](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- I learned about the regular expression which insert the commas between numbers in JS

```js
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
```

- I learned how to use querySelectorAll function in Js

```js
const buttons = document.querySelectorAll("button")
```

To see how you can add code snippets, see below:

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/) - This helped me for Javascript eval functions and CSS hover proerties reason. I really liked this pattern and will use it going forward.
- [Stack Overflow](https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators) - This is an amazing article which helped me finally understand the use of regular expression in JS and use of queryselectorAll method in JS . I'd recommend it to anyone still learning this concept.

## Author

- Website - [Harshit](https://www.your-site.com)
- Frontend Mentor - [Harshit](https://www.frontendmentor.io/profile/harshitag97)
