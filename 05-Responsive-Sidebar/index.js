const $ = document;

const sidebar = $.querySelector(".sidebar");
const buttons = $.querySelectorAll("button");

buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
            const buttonClassName = e.currentTarget.classList;
            if (buttonClassName.contains("open-sidebar-button")) {
                  sidebar.classList.toggle("close-sidebar");
            } else if (buttonClassName.contains("close-sidebar-button")) {
                  sidebar.classList.add("close-sidebar");
            }
      });
});
