import "../pages/index.css";
import { api } from "../components/Api";
import { HandlerData } from "../components/HandlerData";
import {
  geolocation,
  lead,
  data,
  mouse,
  time,
  day,
  more,
  dayYear,
  dayWeek,
  week,
  sunrise,
  sunset,
  dayLength,
  greeting,
  InitialQuote,
  quoteText,
  quoteAutor,
} from "../utils/constants";

const handlerFeolocation = new HandlerData(geolocation);
const handlerGreeting = new HandlerData(greeting);
const handlerDataOfTime = new HandlerData(time);
const handlerDay = new HandlerData(day);
const handlerWeek = new HandlerData(week);
const handlerSunrise = new HandlerData(sunrise);
const handlerSunset = new HandlerData(sunset);
const handlerDayLength = new HandlerData(dayLength);
const handlerDayYear = new HandlerData(dayYear);
const handlerDayWeek = new HandlerData(dayWeek);

const getDataApi = () => {
  Promise.all([api.getTimeZone(), api.getAstronomy()])
    .then(([geo, astro]) => {
      handlerFeolocation.setData(
        `${geo.geo.country_name.toLocaleUpperCase()},  ${geo.geo.city.toLocaleUpperCase()}`
      );
      handlerDataOfTime.setData(geo.time_24);
      handlerDay.setData(
        geo.date_time_wti
          .slice(0, geo.date_time_wti.length - 15)
          .toLocaleUpperCase()
      );
      handlerWeek.setData(geo.week);
      handlerGreeting.setGreeting(geo.time_24.slice(0, 2));
      handlerDayWeek.setDayOfWeek(geo.date_time_txt.split(", ")[0]);
      handlerDayYear.setDayOfYear((geo.week - 1) * 7, dayWeek.textContent);

      handlerSunrise.setData(astro.sunrise);
      handlerSunset.setData(astro.sunset);
      handlerDayLength.setData(astro.day_length);
      setRealTime();
    })
    .catch(console.log);
};
getDataApi();

data.addEventListener("click", () => {
  more.classList.toggle("more__active");
  mouse.classList.toggle("data__mouse_active");
  if (screen.availWidth > 767) {
    lead.classList.toggle("lead__screen-768");
    more.classList.toggle("more__screen-768");
    data.classList.toggle("data__screen-768");
    mouse.classList.toggle("data__mouse_screen-768");
    mouse.classList.toggle("data__mouse_active");
  }
});

const setRealTime = () => {
  let now = setInterval(() => {
    let date = new Date();
    time.textContent = `${("" + date.getHours()).padStart(2, "0")}:${(
      "" + date.getMinutes()
    ).padStart(2, "0")}:${("" + date.getSeconds()).padStart(2, "0")}`;
  }, 1000);
};

const handleQuote = () => {
  const randomQuote =
    InitialQuote[Math.floor(Math.random() * InitialQuote.length)];
  quoteText.textContent = `" ${randomQuote.q.toLocaleUpperCase()} "`;
  quoteAutor.textContent = randomQuote.a.toLocaleUpperCase();
};

handleQuote();
