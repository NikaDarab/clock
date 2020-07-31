const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate (){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds /60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes /60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours /12)*360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const year = new Intl.DateTimeFormat('en', {year:'numeric'}).format();
    const month = new Intl.DateTimeFormat('en', {month:'long'}).format();
    const day = new Intl.DateTimeFormat('en',{day:'2-digit' }).format();
    document.getElementById("date").innerHTML = day+' '+ month+' '+ year;
}
setInterval(setDate,1000);

setDate();

