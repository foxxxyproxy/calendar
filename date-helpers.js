export const is_weekend = day => {
  if (day == "Sat" || day == "Sun") {
    return "weekend";
  } else return "";
};

export const getDayName = (day, month, year) => {
  const date = createUTCDate(year, month, day);
  const options = { weekday: "short" };
  let name = new Intl.DateTimeFormat("en-US", options).format(date);
  return name;
};

const createUTCDate = (year, month, day) => {
  return new Date(Date.UTC(year, month, day));
};

export const getURLParam = () => {
  const parsedURL = new URL(window.location.href);
  console.log(parsedURL);
  let searchParam__date = parsedURL.searchParams.get("date");

  if (!searchParam__date) {
    parsedURL.searchParams.append("date", "27-0-2018");
    searchParam__date = parsedURL.searchParams.get("date");
  }
  console.log(searchParam__date);

  searchParam__date = searchParam__date.split("-");
  let [day, month, year] = searchParam__date;

  month = toHumanFormat(month);
  return [month, year];
};

const toHumanFormat = month => {
  month = Number.parseInt(month) - 1;

  return month;
};
