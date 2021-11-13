function toCamelCase(string) {

  const words = string.replace(/\s+/g, ' ').split(' ');

  const result = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  });

  return result.join('');

}

function updateFrequency(cards, frequency='weekly') {

  selectedFrequency = frequency;
 
  let i;
  for (i = 0; i < cards.length; i++) {
    const hours = cards[i].querySelector('.card__hours');
    const lastWeek = cards[i].querySelector('.card__last-week');
    const cardName = toCamelCase(cards[i].querySelector('.card__title').innerText);
    const trackedTime = timeTracking[cardName][frequency];

    hours.innerText = trackedTime.hours;
    lastWeek.innerText = trackedTime.lastWeek;
  }
}
const timeTracking = {
  work: {
    daily: {
      hours: '5hrs',
      lastWeek: 'Previous - 7hrs'
    },
    weekly: {
      hours: '32hrs',
      lastWeek: 'Previous - 36hrs'
    },
    monthly: {
      hours: '103hrs',
      lastWeek: 'Previous - 128hrs'
    }
  },
  play: {
    daily: {
      hours: '1hr',
      lastWeek: 'Previous - 2hrs'
    },
    weekly: {
      hours: '10hrs',
      lastWeek: 'Previous - 8hrs'
    },
    monthly: {
      hours: '23hrs',
      lastWeek: 'Previous - 29hrs'
    }
  },
  study: {
    daily: {
      hours: '0hrs',
      lastWeek: 'Previous - 1hr'
    },
    weekly: {
      hours: '4hrs',
      lastWeek: 'Previous - 7hrs'
    },
    monthly: {
      hours: '13hrs',
      lastWeek: 'Previous - 19hrs'
    }
  },
  exercise: {
    daily: {
      hours: '1hr',
      lastWeek: 'Previous - 1hr'
    },
    weekly: {
      hours: '4hrs',
      lastWeek: 'Previous - 5hrs'
    },
    monthly: {
      hours: '11hrs',
      lastWeek: 'Previous - 18hrs'
    }
  },
  social: {
    daily: {
      hours: '1hr',
      lastWeek: 'Previous - 3hrs'
    },
    weekly: {
      hours: '5hrs',
      lastWeek: 'Previous - 10hrs'
    },
    monthly: {
      hours: '21hrs',
      lastWeek: 'Previous - 23hrs'
    }
  },
  selfCare: {
    daily: {
      hours: '0hrs',
      lastWeek: 'Previous - 1hr'
    },
    weekly: {
      hours: '2hrs',
      lastWeek: 'Previous - 2hrs'
    },
    monthly: {
      hours: '7hrs',
      lastWeek: 'Previous - 11hrs'
    }
  }
}
const dailyBtn = document.getElementById('dailyBtn');
const weeklyBtn = document.getElementById('weeklyBtn');
const monthlyBtn = document.getElementById('monthlyBtn');
const cards = document.getElementsByClassName('card');
let selectedFrequency;

document.addEventListener('DOMContentLoaded', () => {
  updateFrequency(cards);
  document.getElementById(`${selectedFrequency}Btn`).classList.add('selected');
})

dailyBtn.onclick = function() {
  if (selectedFrequency === 'daily') {
    return
  }

  // Change button color to white
  this.classList.add('selected');
  // Change button to default color
  document.getElementById(`${selectedFrequency}Btn`).classList.remove('selected');

  updateFrequency(cards, 'daily');
}

weeklyBtn.onclick = function() {
  if (selectedFrequency === 'weekly') {
    return
  }

  // Change button color to white
  this.classList.add('selected');
  // Change button to default color
  document.getElementById(`${selectedFrequency}Btn`).classList.remove('selected');

  updateFrequency(cards, 'weekly');
}

monthlyBtn.onclick = function() {
  if (selectedFrequency === 'monthly') {
    return
  }

  // Change button color to white
  this.classList.add('selected');
  // Change button to default color
  document.getElementById(`${selectedFrequency}Btn`).classList.remove('selected');

  updateFrequency(cards, 'monthly');
}
