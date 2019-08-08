import { is_weekend } from "./date-helpers.js"
import { day_name } from "./date-helpers.js"

const days = document.querySelectorAll(".day");
const my_grid = document.querySelector("#app-calendar");

for (let i = 1; i <= 31; i++) {
    let name = day_name(i);
    let weekend = is_weekend(name);
    console.log(weekend);
    my_grid.insertAdjacentHTML("beforeend", `<div class="day ${weekend} ${name}"> ${i}</div>`);
}

for (let i = 1; i <= 7; i++) {
    let name = day_name(i);
    days[i - 1].insertAdjacentHTML("afterbegin", `<p>${name}</p>`);
}

days.forEach(day => {
    day.addEventListener('click', event => {
        event.currentTarget.classList.toggle("selected");
    });
});