const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const finishtDate = new Date(this.targetDate);

    setInterval(() => {
      const toDaytTime = Date.now();
      const deltaTime = finishtDate - toDaytTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      refs.days.innerHTML = days;
      refs.hours.innerHTML = hours;
      refs.mins.innerHTML = mins;
      refs.secs.innerHTML = secs;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 14, 2021'),
});

timer.start();

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}
