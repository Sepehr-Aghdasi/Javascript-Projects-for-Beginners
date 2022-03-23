const $ = document;

const counter = $.querySelector("#counter");
const buttons = $.querySelectorAll("button");

let count = 0;

buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
            // Get button class name
            const buttonClassName = event.currentTarget.classList;

            if (buttonClassName.contains("decrease")) {
                  count--;
                  updateDisplay(count);
            } else if (buttonClassName.contains("increase")) {
                  count++;
                  updateDisplay(count);
            } else {
                  count = 0;
                  updateDisplay(count);
            }
            console.log(buttonClassName);
      });
});

const updateDisplay = (val) => {
      counter.innerText = val;
};
