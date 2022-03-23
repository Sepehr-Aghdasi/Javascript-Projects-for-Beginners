const $ = document;

const counter = $.querySelector("#counter");
const decrease = $.querySelector(".decrease");
const reset = $.querySelector(".reset");
const increase = $.querySelector(".increase");

let count = 0;

increase.addEventListener("click", () => {
      count++;
      display(count);
});

decrease.addEventListener("click", () => {
      count--;
      display(count);
});

reset.addEventListener("click", () => {
      count = 0;
      display(count);
});

const display = (val) => {
      counter.innerText = val;
      console.log(count);
};
