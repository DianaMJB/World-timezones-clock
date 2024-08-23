function updateCityTime(cityClass, timeZone) {
  let cityElement = document.querySelector(`.${cityClass}`);
  let cityDate = cityElement.querySelector(".date");
  let cityTime = cityElement.querySelector(".time");
  let cityCurrent = moment().tz(timeZone);

  cityDate.innerHTML = cityCurrent.format("MMM Do YYYY");
  cityTime.innerHTML = cityCurrent.format("hh:mm:ss  [<strong>] A [</strong>]");
}

function updateTime() {
  updateCityTime("new-york", "America/New_York");
  updateCityTime("london", "Europe/London");
  updateCityTime("tokyo", "Asia/Tokyo");
  updateCityTime("sydney", "Australia/Sydney");
  updateCityTime("hong-kong", "Asia/Hong_Kong");
  updateCityTime("moscow", "Europe/Moscow");
  updateCityTime("dubai", "Asia/Dubai");
  updateCityTime("bangkok", "Asia/Bangkok");
}

updateTime();
setInterval(updateTime, 1000);
