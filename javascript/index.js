function updateCityTime(cityClass, timeZone) {
  let cityElement = document.querySelector(`.${cityClass}`);
  let cityDate = cityElement.querySelector(".date");
  let cityTime = cityElement.querySelector(".time");
  let cityCurrent = moment().tz(timeZone);

  cityDate.innerHTML = cityCurrent.format("MMM Do YYYY");
  cityTime.innerHTML = cityCurrent.format("hh:mm:ss  [<strong>] A [</strong>]");

  if (cityElement.classList.contains("city")) {
    cityElement.querySelector("span").innerHTML = timeZone
      .replace(`_`, ` `)
      .split("/")[1];
  }
}

function updateTime() {
  updateCityTime("city", moment.tz.guess());
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

function selectedTimezone(event) {
  let timezone = event.target.value;
  let timezoneName = timezone.replace(`_`, ` `).split("/")[1];
  let timezoneTime = moment().tz(timezone);
  let newTimezoneElement = document.querySelector("#principal");
  newTimezoneElement.innerHTML = `<div class="">
          <div class="icon">
            <img src="css/images/location.svg" alt="" />
            <br/>
           <br/>
          </div>
          <h2>${timezoneName}</h2>
          <div class="time">${timezoneTime.format(
            "hh:mm [<strong>] A [</strong>]"
          )}</div>
          <div class="date">${timezoneTime.format("MMM Do YYYY")}</div>
          
          <div class="message"><small><em>The city displayed above, represents its entire time zone.</em></small></div>
          <br/>
          <div><a href="index.html"><strong>BACK TO HOME PAGE 👈🏻<strong></a>
        </div>
  `;
}

let timezoneSelectElement = document.querySelector("#timezone");
timezoneSelectElement.addEventListener("change", selectedTimezone);
