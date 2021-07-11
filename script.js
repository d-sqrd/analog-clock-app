setInterval(setClock,1000);
const secondsHand = document.querySelector('[seconds-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const hourHand = document.querySelector('[hour-hand]');
function setClock(){
	const currDate = new Date();
	const secondsRatio = currDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currDate.getMinutes()) / 60;
	const hourRatio = (minutesRatio + currDate.getHours()) / 12;
	setRotation(secondsHand,secondsRatio);
	setRotation(minuteHand,minutesRatio);
	setRotation(hourHand,hourRatio);
}
function setRotation(handElement,rotationRatio){
	handElement.style.setProperty('--rotation',rotationRatio * 360);
}
setClock();