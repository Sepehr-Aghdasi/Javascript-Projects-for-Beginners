const $ = document;

// input(task text)
const task = $.querySelector(".task");
// add item button
const push = $.querySelector(".push");
// task area => where list have to go
const tasksArea = $.querySelector(".tasks-area");

let tasksArray = [];

// add item to list
const addItem = () => {
      let val = task.value.trim();

      if (val.length === 0) {
            displayAlert("Please Enter a Task", "danger");
      } else if (stringExistInArray(tasksArray, val)) {
            /* check if there is duplicate string */
            displayAlert("item already exist", "danger");
      } else {
            tasksArray.push(val);
            console.log(tasksArray);

            tasksArea.innerHTML += `
            <div class="task-item">
                  <input type="checkbox" class="confirm-task"/>
                  <span class="taskName">
                        ${val}
                  </span>
                  <button class="deleteBtn">
                        <i class="far fa-trash-alt"></i>
                  </button>
            </div>`;

            // clear input value after submitting
            task.value = "";
            displayAlert("Item Add Successfully", "success");

            // tasks delete buttons
            const deleteButton = $.querySelectorAll(".deleteBtn");
            deleteButton.forEach((e) => {
                  e.addEventListener("click", (item) => {
                        // delete string from array
                        const specificString = item.currentTarget.previousElementSibling.innerText;

                        tasksArray = tasksArray.filter((str) => str !== specificString);

                        item.currentTarget.parentElement.remove();
                        displayAlert("Item Deleted Successfully", "danger");
                  });
            });

            // checkbox
            const confirmTask = $.querySelectorAll(".confirm-task");
            confirmTask.forEach((e) => {
                  e.addEventListener("click", (item) => {
                        const siblingText = item.currentTarget.nextSibling.nextSibling;
                        if (item.currentTarget.checked) {
                              siblingText.style.textDecoration = "line-through";
                              siblingText.style.opacity = "0.3";
                        } else {
                              siblingText.style.textDecoration = "none";
                              siblingText.style.opacity = "1";
                        }
                  });
            });
      }
};

// find out if an array contains a duplicate string
function stringExistInArray(arrayOfArrays, item) {
      // convert to lowercase string and after that check
      arrayOfArrays = arrayOfArrays.map((str) => str.toLowerCase());
      item = item.toLowerCase();

      return arrayOfArrays.includes(item);
}

// show message to client
const displayAlert = (text, color) => {
      const alertBox = $.querySelector(".display-alert");
      const alertText = $.querySelector(".alert-message");

      alertBox.style.visibility = "visible";
      alertText.textContent = text;

      if (color === "danger") {
            alertBox.classList.add("bg-danger");

            // remove bg-success class if exist
            alertBox.classList.contains("bg-success")
                  ? alertBox.classList.remove("bg-success")
                  : alertBox.classList.add("bg-danger");
      } else if (color === "success") {
            alertBox.classList.add("bg-success");

            // remove bg-danger class if exist
            alertBox.classList.contains("bg-danger")
                  ? alertBox.classList.remove("bg-danger")
                  : alertBox.classList.add("bg-success");
      }

      // hide message after 2000 Milliseconds
      setTimeout(() => {
            alertBox.style.visibility = "hidden";
            alertText.textContent = "";
      }, 2000);
};

// if any keys pressed focus on the task input
const focusElement = () => {
      let keyCode = window.event.keyCode;

      // keyboard keyCodes
      if (
            (keyCode >= 65 && keyCode <= 90) ||
            (keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 96 && keyCode <= 105)
      ) {
            task.focus();
      }

      // enter keyCode = 13
      // if enter key pressed add item
      keyCode == 13 ? addItem() : "";
};

window.addEventListener("keypress", focusElement);
push.addEventListener("click", addItem);
