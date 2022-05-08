const quoteArray = ["Sepehr Aghdasi Front End Developer"];
const speed = 100;
let textPosition = 0;

const typeWrite = () => {
      document.querySelector("h4").innerHTML =
            quoteArray[0].substring(0, textPosition) + "<span>\u25AE</span>";

      if (textPosition++ != quoteArray[0].length) setTimeout(typeWrite, speed);
};

window.addEventListener("load", typeWrite);
