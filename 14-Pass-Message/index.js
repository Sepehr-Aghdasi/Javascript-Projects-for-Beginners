const d = document;
const submitBtn = d.querySelector(".button button");
const textMessage = d.querySelector(".text-message");
const alertBox = d.querySelector(".alert-box");

let myArray = [];

d.addEventListener("keypress", focusWhenKeyClicked);
submitBtn.addEventListener("click", passMessage);

function focusWhenKeyClicked() {
      let input = d.querySelector(".textbox input");
      if (event.keyCode >= 48 && event.keyCode <= 57) {
            // Number
            input.focus();
      } else if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Alphabet upper case
            input.focus();
      } else if (event.keyCode >= 97 && event.keyCode <= 122) {
            // Alphabet lower case
            input.focus();
      }
      // Enter keyCode
      if (window.event.keyCode == 13) {
            console.log("enter clicked");
            if (input.value.length > 0) {
                  passMessage();
            } else {
                  displayAlert("Fill in the input", "failed");
            }
      }
}

function passMessage() {
      let input = d.querySelector(".textbox input");

      if (input.value.length <= 0) {
            displayAlert("Fill in the input", "failed");
            // focusWhenKeyClicked();
      } else {
            displayAlert("Text successful Add", "success");
            textMessage.textContent = input.value;
            myArray.push(input.value);
            input.value = "";
      }
}

function displayAlert(text, color) {
      let spanElement = d.createElement("span");

      // console.log(
      //       `Is span Element Exist => ${typeof spanElement == "undefined" && spanElement == null}`
      // );

      if (typeof spanElement != "undefined" && spanElement != null) {
            spanElement.setAttribute("id", "span-text");
            alertBox.appendChild(spanElement);
            spanElement.textContent = text;
      }

      if (color == "success") {
            if (alertBox.classList.contains("alert-failed")) {
                  alertBox.classList.remove("alert-failed");
            }
            alertBox.classList.add("alert-success");
      }
      if (color == "failed") {
            if (alertBox.classList.contains("alert-success")) {
                  alertBox.classList.remove("alert-success");
            }
            alertBox.classList.add("alert-failed");
      }
      setTimeout(() => {
            alertBox.classList.remove("alert-failed");
            alertBox.classList.remove("alert-success");
            spanElement.remove();
      }, 2000);

      let spanIsExist = alertBox.children;
      console.log(spanIsExist[0]);
}

setInterval(() => {
      if (!myArray.length <= 0) {
            console.log(`All text stored here =>`);
            console.log(myArray);
      }
}, 2000);
