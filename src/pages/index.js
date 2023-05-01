import "../pages/index.css";
import { api, apiQuote } from "../components/Api";
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
  quoteAutor
} from "../utils/constants";

const setDate = () => {
  api
    .getTimeZone()
    .then((res) => {
      geolocation.textContent = `${res.geo.country_name.toLocaleUpperCase()},  ${res.geo.city.toLocaleUpperCase()}`;
      time.textContent = res.time_24;
      day.textContent = res.date_time_wti.slice(0, (res.date_time_wti.length - 15)).toLocaleUpperCase();
      week.textContent = res.week;
      dayYear.textContent = ((res.week - 1)*7) + handleDayOfWeek(res.date_time_txt.split(', ')[0]);
      dayWeek.textContent = handleDayOfWeek(res.date_time_txt.split(', ')[0]);
      greeting.textContent = handleGreeting(res.time_24.slice(0, 2));

    })
    .catch((err) => console.log(err));
};

const setAstronomy = () => {
  api
    .getAstronomy()
    .then((res) => {
      sunrise.textContent = res.sunrise;
      sunset.textContent = res.sunset;
      dayLength.textContent = res.day_length;
    })
    .catch((err) => console.log(err));
};

setDate();
setAstronomy();

const handleGreeting = (timeContent) => {
  if(timeContent >6 && timeContent < 12){
    return 'GOOD MORNONG'
  }else if(timeContent >= 12 && timeContent < 18){
    return 'GOOD AFTERNOON'
  }else if(timeContent >= 18 && timeContent < 24){
    return 'GOOD EVENING'
  }else{
    return 'GOOD NIGHT'
  }
}

const handleDayOfWeek = (day) => {
  switch(day){
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    case 'Saturday':
      return 6;
    case 'Sunday':
      return 7;
    default:
      return;
  }
}

data.addEventListener('click', ()=>{
  more.classList.toggle('more__active');
  mouse.classList.toggle('data__mouse_active');
  if(screen.availWidth > 767){
    lead.classList.toggle('lead__screen-768');
    more.classList.toggle('more__screen-768');
    data.classList.toggle('data__screen-768');
    mouse.classList.toggle('data__mouse_screen-768');
    mouse.classList.toggle('data__mouse_active');
  }
})

const handleQuote = () => {
  const randomQuote = InitialQuote[Math.floor(Math.random() * InitialQuote.length)];
  quoteText.textContent = `" ${randomQuote.q.toLocaleUpperCase()} "`;
  quoteAutor.textContent = randomQuote.a.toLocaleUpperCase();
}

handleQuote();

let now = setInterval(() => {
  let date = new Date();
  time.textContent = `${(''+date.getHours()).padStart(2, "0")}:${(''+date.getMinutes()).padStart(2, "0")}:${(''+date.getSeconds()).padStart(2, "0")}`;
}, 1000);
