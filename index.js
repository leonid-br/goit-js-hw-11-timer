class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.time = {
      days: document.querySelector(
        `${this.selector} > .field > [data-value ="days"]`,
      ),
      hours: document.querySelector(
        `${this.selector} > .field >[data-value="hours"]`,
      ),
      mins: document.querySelector(
        `${this.selector} > .field >[data-value="mins"]`,
      ),
      secs: document.querySelector(
        `${this.selector} > .field >[data-value="secs"]`,
      ),
    };
  }
  start() {
    const finishtDate = new Date(this.targetDate);

    setInterval(() => {
      const toDaytTime = Date.now();
      const deltaTime = finishtDate - toDaytTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      this.time.days.innerHTML = days;
      this.time.hours.innerHTML = hours;
      this.time.mins.innerHTML = mins;
      this.time.secs.innerHTML = secs;
    }, 1000);

    function pad(value) {
      return String(value).padStart(2, '0');
    }

    function getTimeComponents(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 15, 2021'),
});

timer.start();
