const $ = document;

const buttons = $.querySelectorAll(".tab-btn");
const contents = $.querySelectorAll(".content");
const images = $.querySelectorAll(".images");

buttons.forEach((e) => {
      e.addEventListener("click", (event) => {
            const buttonDataId = event.target.dataset.id;
            console.log(`Selected Button Data Id => ${buttonDataId}`);

            buttons.forEach((e) => {
                  e.classList.remove("active");
            });
            event.target.classList.add("active");

            contents.forEach((e) => {
                  e.classList.remove("active");
            });
            const contentId = $.getElementById(buttonDataId);
            contentId.classList.add("active");

            images.forEach((e) => {
                  e.classList.remove("active");
            });
            const imageId = $.getElementsByClassName(buttonDataId);

            for (let i = 0; i < imageId.length; i++) {
                  imageId[i].classList.add("active");
            }
      });
});
