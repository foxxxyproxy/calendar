export const is_weekend = day => {
  if (day == "Sat" || day == "Sun") {
    return "weekend";
  } else return "";
};

export const day_name = day => {
  const date = createUTCDate(2018, 1, day);
  const options = { weekday: "short" };
  let name = new Intl.DateTimeFormat("en-US", options).format(date);
  return name;
};

const createUTCDate = (year, month, day) => {
  return new Date(Date.UTC(year, month, day));
};
