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
## Visualização do Projeto

| Desktop | Mobile |
|--------|--------|
| ![Tela Desktop](https://github.com/user-attachments/assets/2e6638ed-cba5-4c68-ab56-69d6460cd486) | ![Tela Mobile](https://github.com/user-attachments/assets/18fd4489-d2e6-4c8c-af87-f68cac823736) |

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- CSS Flexbox


### What I learned

Ive learn the follow codes below, that help me to make this code possible.

```css
.shake {
    animation: shake 0.4s ease-in-out;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}
}
```
```js

  //To prevent loading
  event.preventDefault();

  //Remove and Add a classlist
  emailField.classList.add("email-field-error");
  error.classList.remove("shake");

  //Create a element
  error = document.createElement("p");

  //Add a element from a var
  labelEmail.appendChild(error);

 //Trick to make de CSS recalc the code to reuse the animation key
  void error.offsetWidth;

  //To style direct from js
  sectionOne.style.display = "none";
}
```

## Author

- Frontend Mentor - [@Eduarddo-sm](https://www.frontendmentor.io/profile/Eduarddo-sm])
