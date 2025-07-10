// скрипт для apple device
const buttonRight = document.querySelector(".button-right");
const buttonLeft = document.querySelector(".button-left");
const device = document.querySelector(".device");
let devices = ['iphone', 'mini', 'ipad', 'macbook', 'imac'];
let j = 0;
function nextDevice(event){
	let target = event.target;
	if(target == buttonRight){
		j++;	
		if(i != devices.length){
			device.className = "device " + devices[i];
		}else{
			j = 0;
			device.className = "device " + devices[i];
		}
	}
	if(target == buttonLeft){
		i--;
		if(i < 0){
			i = devices.length - 1;
			device.className = "device " + devices[i];
		}else{
			device.className = "device " + devices[i];
		}
	}
}
buttonRight.addEventListener("click", nextDevice);
buttonLeft.addEventListener("click", nextDevice);