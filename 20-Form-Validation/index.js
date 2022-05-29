const d = document;
let classes = (classes) => document.getElementsByClassName(classes);

const failureIcon = classes("failure-icon");
const successIcon = classes("success-icon");

const form = d.querySelector(".form");
const username = d.forms["form"]["username"];
const email = d.forms["form"]["email"];
const phoneNumber = d.forms["form"]["number"];
const password = d.forms["form"]["password"];
const confirmPassword = d.forms["form"]["password2"];
const submitBtn = d.querySelector(".form button");

window.addEventListener("load", focusElements);
form.onsubmit = function () {
      return validate();
};

// validate inputs form
const validate = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const phoneNumberValue = phoneNumber.value.trim();
      const passwordValue = password.value.trim();
      const confirmPasswordValue = confirmPassword.value.trim();

      // Check username
      if (usernameValue === "") {
            setMessage(username, "red", "Username is required");

            return false;
      } else {
            setMessage(username, "green");
      }

      // Check email
      if (emailValue === "") {
            setMessage(email, "red", "Email is required");

            return false;
      }
      if (!isValidEmail(emailValue)) {
            setMessage(email, "red", "invalid email");

            return false;
      } else {
            setMessage(email, "green");
      }

      // check phone number
      if (phoneNumberValue === "") {
            setMessage(phoneNumber, "red", "phone number is required");

            return false;
      }
      if (isNaN(phoneNumberValue)) {
            setMessage(phoneNumber, "red", "insert number");

            return false;
      }
      if (phoneNumberValue.length !== 11) {
            setMessage(phoneNumber, "red", "phone number must be at 11 character");

            return false;
      } else {
            setMessage(phoneNumber, "green");
      }

      // check the password
      const lowerCase = /[a-z]/;
      const upperCase = /[A-Z]/;
      const numbers = /[0-9]/;
      const symbols = /[-!$%^@&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      if (passwordValue === "") {
            setMessage(password, "red", "Password is required");

            return false;
      }
      if (passwordValue.length <= 7) {
            setMessage(password, "red", "Password must be at least 8 character.");

            return false;
      }
      if (!passwordValue.match(lowerCase)) {
            setMessage(password, "red", "Use lowercase letters.");

            return false;
      }
      if (!passwordValue.match(upperCase)) {
            setMessage(password, "red", "Use uppercase letters.");

            return false;
      }
      if (!passwordValue.match(numbers)) {
            setMessage(password, "red", "Use numbers letters.");

            return false;
      }
      if (!passwordValue.match(symbols)) {
            setMessage(password, "red", "Use symbols letters.");

            return false;
      } else {
            setMessage(password, "green");
      }

      // Check the confirm password input
      if (confirmPasswordValue === "") {
            setMessage(confirmPassword, "red", "please confirm your password");

            return false;
      } else if (passwordValue !== confirmPasswordValue) {
            setMessage(confirmPassword, "red", "passwords doesn't match");

            return false;
      } else {
            setMessage(confirmPassword, "green");
      }
};

// check the Email input with Regex
const isValidEmail = (email) => {
      const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // convert to string than lower case then test the email
      return emailRegex.test(String(email).toLowerCase());
};

// set message(Error or Success)
const setMessage = (input, color, message) => {
      // get small tag from HTML
      const smallTag = input.parentElement.querySelector("small");

      input.style.borderColor = color;
      smallTag.style.color = color;
      smallTag.textContent = message;

      const successIcon = input.parentElement.querySelector(".success-icon");
      const failureIcon = input.parentElement.querySelector(".failure-icon");

      // success icon
      if (color === "green") {
            if (failureIcon.classList.contains("show-icon")) {
                  failureIcon.classList.remove("show-icon");
            }

            successIcon.classList.add("show-icon");
      }
      // failure icon
      if (color === "red") {
            if (successIcon.classList.contains("show-icon")) {
                  successIcon.classList.remove("show-icon");
            }

            failureIcon.classList.add("show-icon");
      }
};

// focus on the next input when Enter key pressed
function focusElements() {
      let inputs = document.querySelectorAll("input");
      for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("keypress", function (e) {
                  if (e.which == 13) {
                        e.preventDefault();
                        var nextInput = document.querySelectorAll(
                              '[tabIndex="' + (this.tabIndex + 1) + '"]'
                        );
                        if (nextInput.length === 0) {
                              nextInput = document.querySelectorAll('[tabIndex="1"]');
                        }
                        nextInput[0].focus();
                  }
            });
      }
}
