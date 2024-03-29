# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop view](/Screenshot.png)

### Links

- Solution URL: [Solution URL](https://github.com/sicktooth/newsletter-sign-up-with-success-message)
- Live Site URL: [Live site URL](https://github.com/sicktooth/newsletter-sign-up-with-success-message/deployments/github-pages)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I realized you cannot use querySelectors for jQuery functionalities.

Adding a function to the input element that removes the error message immediately it detects the email was correctly formatted before submission by adding an event listener to the input.
See code below:

**NOTE: This function is mostly written in jQuery.**

```js
const inputValidator = () => {
    const inputValue = input.val();
    if (inputValue.match(regex)) {
        errorLabel.css("display", "none");
        errorInput.removeClass("error__input");
    }
}
input.on("input",inputValidator);
```

### Continued development

In the coming projects, I am building more websites with better animations and focusing on learning React

### Useful resources

- [Simplilearn Youtube](https://youtu.be/nlGF-zh0fsg?si=yDpfPNi88zvk1ulJ) - This in understanding regex. I really liked the way it was explained from scratch.
- [A place to practice regex](https://rubular.com/) - This is an amazing website which helped me in understanding Regex by practising. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Samuel Osaronungwe](https://sicktooth.github.io/portfolio/)
- Frontend Mentor - [@sicktooth](https://www.frontendmentor.io/profile/sicktooth)
- Twitter - [@sammy_o_osaro](https://twitter.com/Sammy_O_Osaro)
