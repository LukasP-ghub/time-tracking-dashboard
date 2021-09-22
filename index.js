const nav = document.querySelector('[data-nav]');
const actTimes = [...document.querySelectorAll('[data-activity-time]')];
const actPrevTimes = [...document.querySelectorAll('[data-activity-prevtime]')];

const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

let prevActiveLink;

const activitiesMap = data.map((item) => {
  console.log(actTimes.filter((elem) => elem.dataset.activityTime.toLowerCase() === item.title.toLowerCase()));
  return {
    activity: item.title.toLowerCase(),
    timeframes: item.timeframes,
    actTimeElem: actTimes.filter((elem) => elem.dataset.activityTime.toLowerCase() === item.title.toLowerCase()),
    actPrevTimeElem: actPrevTimes.filter((elem) => elem.dataset.activityPrevtime.toLowerCase() === item.title.toLowerCase()),
  }
});

(() => {
  nav.addEventListener('click', (e) => {
    const timeframe = e.target.textContent.toLowerCase();
    e.target.classList.toggle('active');
    prevActiveLink?.classList.toggle('active');
    prevActiveLink = e.target;
    activitiesMap.forEach(item => {
      item.actTimeElem[0].textContent = `${item.timeframes[timeframe].current} hrs`;
      item.actPrevTimeElem[0].textContent = `Previus - ${item.timeframes[timeframe].previous} hrs`;
    })
  });

})()
