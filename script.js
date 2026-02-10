const btn = document.getElementById("right-btn");
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const emailField = document.getElementById("field-email")
    const labelEmail = document.getElementById("label-email");
    let error = labelEmail.querySelector(".error-email");


    if (!email) {
        if (!error) {
            error = document.createElement("p");
            error.textContent = "Valid email required"
            error.classList.add("error-email");
            emailField.classList.add("email-field-error");
            labelEmail.appendChild(error);
            error.classList.add("shake");
            error.addEventListener("animationed", () => {
                error.classList.remove("shake");
            })
        }
        return
    }

    if (!email.includes("@")) {
        if (!error) {
            error = document.createElement("p");
            error.textContent = "Valid email required"
            error.classList.add("error-email");
            emailField.classList.add("email-field-error");
            labelEmail.appendChild(error);
            error.classList.add("shake");
            error.addEventListener("animationend", () => {
                error.classList.remove("shake");
            })
        }
        return
    }

    if (!email.includes(".com")) {
        if (!error) {
            error = document.createElement("p");
            error.textContent = "Valid email required"
            error.classList.add("error-email");
            emailField.classList.add("email-field-error");
            labelEmail.appendChild(error);
            error.classList.add("shake");
            error.addEventListener("animationed", () => {
                error.classList.remove("shake");
            })

        }
        return
    }

    if (email) {
        if(error){
            labelEmail.removeChild(error)
            error.classList.remove("error-email")
            emailField.classList.remove("email-field-error");
        }
    }
    
})

btn.addEventListener('click', function () {



});