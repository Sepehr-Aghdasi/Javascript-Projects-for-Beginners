const $ = document;

let countDownDate = new Date("Dec 7,2022 10:22:33");
countDownDate.getTime();

const x = () => {
      const daysContainer = $.querySelector(".days");
      const hoursContainer = $.querySelector(".hours");
      const minutesContainer = $.querySelector(".minutes");
      const secondsContainer = $.querySelector(".seconds");
      
      const expireContainer = $.querySelector(".expire");
      const giveaway = $.querySelector(".giveaway");

      const now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      giveaway.textContent = countDownDate;

      if (distance < 0) {
            clearInterval(x);
            days = hours = minutes = seconds = 0;
            expireContainer.style.display = "block";
      }

      daysContainer.textContent = days;
      hoursContainer.textContent = hours;
      minutesContainer.textContent = minutes;
      secondsContainer.textContent = seconds;
};
setInterval(x, 1000);

const showTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      console.log(
            year.toString() +
                  " " +
                  month.toString() +
                  " " +
                  day.toString() +
                  " " +
                  hours.toString() +
                  " " +
                  minutes.toString() +
                  " " +
                  seconds.toString()
      );
};
setInterval(showTime, 1000);
