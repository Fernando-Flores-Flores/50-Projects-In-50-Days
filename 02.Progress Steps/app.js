const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
let counter = 1;

next.addEventListener("click", () => {
  counter++;
  update();
});

prev.addEventListener("click", () => {
  counter--;
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < counter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (counter === 1) {
    prev.disabled = true;
  } else if (counter === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

}
