const $ = document;

const btn = $.querySelector("button");
const showHexCode = $.querySelector("#show");
const colors = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
      let hex = "#";
      for (let i = 0; i < 6; i++) {
            hex += colors[generateRandomNumber()];
            $.body.style.backgroundColor = hex;
            showHexCode.innerText = hex;
      }
      console.log(hex);
});

const generateRandomNumber = () => {
      return Math.floor(Math.random() * colors.length);
};
