const timer = (deadline) => {
	const timerHours = document.getElementById("timer-hours");
	const timerMinutes = document.getElementById("timer-minutes");
	const timerSeconds = document.getElementById("timer-seconds");

	const getTimeRem = (stopTime) => {
		let stopDate = new Date(stopTime).getTime();
		let nowDate = new Date().getTime();
		let timeRemaining = (stopDate - nowDate) / 1000;
		let hours = Math.floor((((timeRemaining) / 60) / 60) % 24);
		let minutes = Math.floor(((timeRemaining) / 60) % 60);
		let seconds = Math.floor((timeRemaining) % 60);

		return {hours, minutes, seconds, timeRemaining};
	};

	const updateClock = (deadline) => {
		let time = getTimeRem(deadline);

		if (time.timeRemaining > 0) {
            timerHours.textContent = time.hours > 9 ? time.hours : '0' + time.hours;
            timerMinutes.textContent = time.minutes > 9  ? time.minutes : '0' + time.minutes;
            timerSeconds.textContent = time.seconds > 9  ? time.seconds : '0' + time.seconds;
        } else if (time.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };
    
	setInterval(updateClock, 1000, deadline);
};

export default timer;