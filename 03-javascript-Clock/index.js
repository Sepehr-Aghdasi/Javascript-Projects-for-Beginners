const $ = document;

const display = $.getElementById("display");

(function updateClock() {
      const today = new Date();

      let seconds = today.getSeconds();
      let minutes = today.getMinutes();
      let hours = today.getHours();
      let displayTime = "AM";

      if (hours == 0) {
            hours == 12;
      }
      if (hours > 12) {
            hours = hours - 12;
            displayTime = "PM";
      }

      seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
      minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
      hours = hours < 10 ? "0" + hours.toString() : hours;

      let clock = hours + ":" + minutes + ":" + seconds + " " + displayTime;

      interval = setInterval(updateClock, 1000);
      display.innerText = clock;
})();
