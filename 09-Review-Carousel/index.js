const reviewsData = [
      {
            id: 1,
            author: "Name-1",
            img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
            job: "Web Developer",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate debitis quia? Maiores fuga dignissimos minima sed aspernatur blanditiis. Voluptatibus.",
      },
      {
            id: 2,
            author: "Name-2",
            img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
            job: "UX Designer",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate debitis quia? Maiores fuga dignissimos minima sed aspernatur blanditiis. Voluptatibus.",
      },
      {
            id: 3,
            author: "Name-3",
            img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
            job: "UI Designer",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate debitis quia? Maiores fuga dignissimos minima sed aspernatur blanditiis. Voluptatibus.",
      },
      {
            id: 4,
            author: "Name-4",
            img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
            job: "Back EndDev",
            info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate debitis quia? Maiores fuga dignissimos minima sed aspernatur blanditiis. Voluptatibus.",
      },
];

const $ = document;

const AUTHOR = $.querySelector("#author");
const IMG = $.querySelector("#person-image");
const JOB = $.querySelector("#job");
const INFO = $.querySelector("#info");
// buttons
const BUTTONS = $.querySelectorAll("button");

let currentItem = 0;

window.addEventListener("load", () => {
      const item = reviewsData[currentItem];

      AUTHOR.textContent = item.author;
      IMG.src = item.img;
      JOB.textContent = item.job;
      INFO.textContent = item.info;
});

const updateReviews = (person) => {
      const item = reviewsData[person];

      AUTHOR.textContent = item.author;
      IMG.src = item.img;
      JOB.textContent = item.job;
      INFO.textContent = item.info;
};

BUTTONS.forEach((btn) => {
      btn.addEventListener("click", (e) => {
            const currentButtonClassName = e.currentTarget.classList;
            console.log(e.currentTarget.className);

            if (currentButtonClassName.contains("prev-btn")) {
                  currentItem--;

                  if (currentItem < 0) {
                        currentItem = reviewsData.length - 1;
                  }
                  updateReviews(currentItem);
            } else if (currentButtonClassName.contains("next-btn")) {
                  currentItem++;

                  if (currentItem > reviewsData.length - 1) {
                        currentItem = 0;
                  }

                  updateReviews(currentItem);
            } else {
                  currentItem = randomNumberGenerator();
                  updateReviews(currentItem);
            }
      });
});

const randomNumberGenerator = () => {
      return Math.floor(Math.random() * reviewsData.length);
};
