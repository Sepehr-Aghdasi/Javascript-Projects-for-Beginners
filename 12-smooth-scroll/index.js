const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

document.body.onscroll = () => {
      let top = document.documentElement.scrollTop;
      text.innerHTML = document.documentElement.scrollTop;

      if (document.documentElement.scrollTop > 1000) {
            btn.style.opacity = 1;
      } else {
            btn.style.opacity = 0;
      }

      btn.addEventListener("click", () => {
            let current = document.documentElement.scrollTop;
            let scroll = setInterval(() => {
                  // document.documentElement.scrollTop = current-=20;

                  window.scrollTo(0, (current -= 20));
                  if (current < 0) {
                        clearInterval(scroll);
                  }
            }, 10);
      });
};
