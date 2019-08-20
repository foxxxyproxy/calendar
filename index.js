import { is_weekend, day_name } from "./date-helpers.js";

const days = document.querySelectorAll(".day");
const my_grid = document.querySelector("#app-calendar");

for (let i = 1; i <= 31; i++) {
  let name = day_name(i);
  let weekend = is_weekend(name);
  //console.log(name);
  my_grid.insertAdjacentHTML(
    "beforeend",
    `<div class="day ${weekend} ${name}"> ${i}</div>`
  );
}

document.querySelectorAll(".day").forEach(day => {
  day.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected");
    console.log("click!!");
  });
});
