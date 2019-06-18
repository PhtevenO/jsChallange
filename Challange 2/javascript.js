
const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');


function clockDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = ((seconds / 60) * 360) + 90;
    const minDeg = ((minutes / 60) * 360) + 90;
    const hourDeg = ((hours / 60) * 360) + 90;
    
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(clockDate, 1000);