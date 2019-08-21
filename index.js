import { is_weekend, getDayName, getURLParam } from "./date-helpers.js";

const days = document.querySelectorAll(".day");
const my_grid = document.querySelector("#app-calendar");
const [month, year] = getURLParam();

for (let i = 1; i <= 31; i++) {
  let name = getDayName(i, month, year);
  let weekend = is_weekend(name);
  my_grid.insertAdjacentHTML(
    "beforeend",
    `<div class="day ${weekend} ${name}"> ${i}</div>`
  );
}

document.querySelectorAll(".day").forEach(day => {
  day.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected");
    console.log(`it's ${event.currentTarget.classList[1]}`);
  });
});
