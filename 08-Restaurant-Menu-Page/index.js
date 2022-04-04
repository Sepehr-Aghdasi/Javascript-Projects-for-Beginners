const $ = document;
const main = $.querySelector(".main");
const buttons = $.querySelectorAll(".btn");

window.addEventListener("load", () => {
      buttons.forEach((dataId) => {
            dataId.addEventListener("click", () => {
                  const buttonDataId = dataId.getAttribute("data-id");
                  updateDisplay(menuItemObj, buttonDataId);
            });
      });
      // /by default Category is All
      // shows all
      updateDisplay(menuItemObj);
});

const updateDisplay = (data, category = "all") => {
      console.log("data is=> ", data, "category is=> ", category);
      let displayValues = "";

      for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                  if (data[i][j]["category"] == category || category == "all") {
                        let val = data[i][j];
                        displayValues += `<div class="menu-item col-6">
                        <img src="${val.img}" alt="${val.title}" class="photo" />
                        <div class="item-info">
                        <header>
                        <h4 class="title">${val.title}</h4>
                        <h4 class="price">${val.price}</h4>
                        </header>
                        <p class="item-text">
                        ${val.text}
                        </p>
                        </div>
                        </div>`;
                  }
            }
      }
      main.innerHTML = displayValues;
};
