export class HandlerData {
  constructor(container) {
    this._container = container;
  }

  setData(dataOfApi) {
    this._container.textContent = dataOfApi;
  }

  setGreeting(dataOfApi) {
    this._container.textContent = (() =>{ if (dataOfApi > 6 && dataOfApi < 12) {
      return "GOOD MORNONG";
    } else if (dataOfApi >= 12 && dataOfApi < 18) {
      return "GOOD AFTERNOON";
    } else if (dataOfApi >= 18 && dataOfApi < 24) {
      return "GOOD EVENING";
    } else {
      return "GOOD NIGHT";
    }})()
  }

  setDayOfWeek(day) {
    this._container.textContent = (() => {
      switch (day) {
        case "Monday":
          return 1;
        case "Tuesday":
          return 2;
        case "Wednesday":
          return 3;
        case "Thursday":
          return 4;
        case "Friday":
          return 5;
        case "Saturday":
          return 6;
        case "Sunday":
          return 7;
        default:
          return;
      }
    })();
  }

  setDayOfYear(week, day) {
    this._container.textContent = week + Number(day);
  }
}
