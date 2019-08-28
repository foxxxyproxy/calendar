import { is_weekend, getDayName, getURLParam } from "./date-helpers.js";
import DataStorage from "./data-storage.js";

const days = document.querySelectorAll(".day");
const my_grid = document.querySelector("#app-calendar");
const app = document.querySelector("#app");
const [month, year] = getURLParam();

for (let i = 1; i <= 31; i++) {
  let name = getDayName(i, month, year);
  let weekend = is_weekend(name);
  my_grid.insertAdjacentHTML(
    "beforeend",
    `<div data-day = "${i}" class="day ${weekend} ${name}"> ${i}</div>`
  );
}

document.querySelectorAll(".day").forEach(day => {
  day.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected");
    saveSelectedDays();
    console.log(`it's ${event.currentTarget.classList[1]}`);
  });
});

document.querySelector("#theme-switch").addEventListener("click", event => {
  app.classList.toggle("dark");
  const isDark = app.classList.contains("dark");
  DataStorage.setItem("is-dark", isDark);
});

const saveSelectedDays = () => {
  const days = [...document.querySelectorAll(".day.selected")].map(
    day => day.dataset.day
  );
  DataStorage.setItem("selected-days", days);
};

const init = () => {
  //restore theme
  if (DataStorage.getBoolean("is-dark")) {
    app.classList.add("dark");
  }

  //restore selected days
  const selectedDays = DataStorage.getArray("selected-days");
  if (selectedDays.length > 0) {
    selectedDays.forEach(day => {
      document
        .querySelector(`.day[data-day="${day}"]`)
        .classList.add("selected");
    });
  }
};

init();
