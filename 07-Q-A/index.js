"use strict";
const $ = document;

const questions = $.querySelectorAll(".question");
const questionButtons = $.querySelectorAll(".question-button");
const btn = $.querySelectorAll(".question-button");

questionButtons.forEach((e) => {
      e.addEventListener("click", () => {
            const ques = e.parentElement.parentElement;
            console.log(ques);
            if (ques.classList.contains("show-text")) {
                  ques.classList.remove("show-text");
            } else {
                  ques.classList.add("show-text");
            }
      });
});

