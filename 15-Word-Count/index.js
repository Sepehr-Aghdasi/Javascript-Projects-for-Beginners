const d = document;

const input = d.querySelector(".row input");
const output = d.querySelector(".output span");
const submitBtn = d.querySelector(".row input[type=submit]");

input.oninput = function () {
      let inputLength = input.value.length;
      output.textContent = inputLength;
};
