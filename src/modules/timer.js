const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes') 
    const timerSeconds = document.getElementById('timer-seconds')
    
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = ((dateStop - dateNow) / 1000)   // разность между стоп и нью
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
  
        return { timeRemaining, hours, minutes, seconds }
        
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()
        
        if (getTime.timeRemaining > 0) {
            timerHours.textContent = getTime.hours > 9 ? getTime.hours : '0' + getTime.hours;
            timerMinutes.textContent = getTime.minutes > 9 ? getTime.minutes : '0' + getTime.minutes;
            timerSeconds.textContent = getTime.seconds > 9 ? getTime.seconds : '0' + getTime.seconds;
            setInterval(updateClock, 1000)
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    
    updateClock()
}
export default timer
