'use strict'

const refs ={
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  }

const targetDate = new Date('Dec 31, 2020');
  
function updateClockFace(time){
  function pad(value){
    return String(value).padStart(2,'0')
  };

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}
      
const timer ={
  start(){
    setInterval(()=>{
      const currentTime = Date.now();
      const deltaTime = (targetDate - currentTime);
      updateClockFace(deltaTime);
    }, 1000);
  }}

timer.start();
 
  