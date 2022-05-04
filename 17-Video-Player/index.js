const $ = document;

const preloader = $.querySelector(".preloader");
const videoContainer = $.querySelector(".video-container");
const playAndPauseBtn = $.querySelector(".playAndPauseBtn");

window.addEventListener("load", () => {
      setTimeout(() => {
            preloader.classList.add("hide-preloader");
      }, 300);
});

playAndPauseBtn.addEventListener("click", () => {
      if (!playAndPauseBtn.classList.contains("play")) {
            playAndPauseBtn.classList.add("play");
            videoContainer.pause();
            playAndPauseBtn.innerHTML = "Play";
      } else {
            playAndPauseBtn.classList.remove("play");
            videoContainer.play();
            playAndPauseBtn.innerHTML = "Pause";
      }
});
