const d = document;
const text = d.querySelector(".text");
const author = d.querySelector(".author");
const submitBtn = d.querySelector(".button button");

let randomNumber;
submitBtn.addEventListener("click", () => {
      randomNumber = generateRandomNumber(quotesObj);

      text.textContent = quotesObj[randomNumber].quote;
      author.textContent = quotesObj[randomNumber].author;
});

const myArray = [];
// generateRandomNumber Function returns None Duplicate Number
// Made by Myself
function generateRandomNumber(arr) {
      myArray.push(Math.floor(Math.random() * arr.length));

      // Check if the last element in Array is duplicate
      if (myArray[myArray.length - 2] === myArray[myArray.length - 1]) {
            console.log(
                  `Find duplicate element in array \t the duplicate number is => ${
                        myArray[myArray.length - 1]
                  }`
            );
            // delete last element in Array if its duplicate
            myArray.pop();
            // then generate new number And Push into Array
            myArray.push(Math.floor(Math.random() * arr.length));
      }

      let rnd;
      for (let i = 0; i < myArray.length; i++) {
            rnd = myArray[i];
      }

      console.log(myArray);

      return rnd;
}
